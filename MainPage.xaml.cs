using Microsoft.JSInterop;
using PCSC;
using PCSC.Monitoring;
using RAR.IdCard.Sdk.Reader;

namespace VimeDesktopApp;

public partial class MainPage : ContentPage
{
    private static readonly VnIdcard CardReader = new VnIdcard();
    private static CardInfo _cardInfo;
    public MainPage()
    {
        _cardInfo = new CardInfo();
        InitializeComponent();
        CardReader.OnStatusChanged += CardReader_OnStatusChanged;
        CardReader.StartMonitor(false);
    }
    [JSInvokable]
    public static CardInfo CheckBattery()
    {
      

       
        return _cardInfo;
    }
    private static void CardReader_OnStatusChanged(object sender, StatusChangeEventArgs e)
    {
        Console.WriteLine($"Device {e.ReaderName} change stated from: {e.LastState} to: {e.NewState}.");
        if (e.LastState != SCRState.Empty || e.NewState != SCRState.Present)
            return;

        try
        {
         
            var result = TryScanCard(e.ReaderName);
            _cardInfo.BackImage = result.BackImage;
            _cardInfo.FrontImage = result.FrontImage;
            _cardInfo.FaceImage = result.FaceImage;


        }
        catch (Exception ex)
        {
            Console.WriteLine("Error occured: " + ex.ToString());
        }
        finally
        {
            CardReader.RejectCard(); //Only support on SCAN-READER
        }
    }
    [STAThread]
    private static  CardInfo TryScanCard(string readerName)
    {
        try
        {
            var scanResult = CardReader.ScanCard(true);
            var cardInfo = new CardInfo
            {
                FaceImage = null,
                BackImage = null,
                FrontImage = null

            };
            if (scanResult)
            {
                // Xử lý hình ảnh mặt trước
                var frontImage = CardReader.GetScanImage()?.Front;
                if (frontImage != null)
                {
                    var jpgFront = frontImage.ToMemoryStream(".jpg").ToArray();
                    var scanFront = Convert.ToBase64String(jpgFront);
                    cardInfo.FrontImage = scanFront;
                }

                // Xử lý hình ảnh mặt sau
                var backImage = CardReader.GetScanImage()?.Back;
                if (backImage != null)
                {
                    var jpgBack = backImage.ToMemoryStream(".jpg").ToArray();
                    var scanBack = Convert.ToBase64String(jpgBack);
                    cardInfo.BackImage = scanBack;



                    // BackImageData = ConvertBase64ToImage(scanBack);
                }

                var canCode = CardReader.GetOcrCanCode();
                var mrz = CardReader.GetChipMRZ();
                CardReader.ReadCard(readerName, canCode, mrz);
                cardInfo.FaceImage = CardReader.GetChipFaceImage();

            }

            return cardInfo;
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            // CardReader.RejectCard();
        }
        finally
        {
            CardReader.RejectCard();
        }

        return new CardInfo();

    }
}

public class CardInfo
{
    public string? FaceImage { get; set; }
    public string? BackImage { get; set; }
    public string? FrontImage { get; set; }
}