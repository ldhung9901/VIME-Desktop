using Microsoft.JSInterop;
using PCSC;
using PCSC.Monitoring;
using RAR.IdCard.Sdk.Reader;

namespace VimeDesktopApp;

public partial class MainPage : ContentPage
{
    private static bool _continue = true;
    private static readonly VnIdcard VnIdcard = new VnIdcard();
    private static CardInfo _cardInfo =  new CardInfo();

    public MainPage()
    {
        var thread = new Thread(UserEnrollmentAutomation);
        thread.Start();
        InitializeComponent();
       
    }
    [JSInvokable]
    public static CardInfo CheckBattery()
    {
        return _cardInfo;
    }
    [STAThread]
    private static void UserEnrollmentAutomation()
    {
        VnIdcard.OnStatusChanged += Vn_OnStatusChanged;
        VnIdcard.StartMonitor(false);
        while (_continue)
        {
           
            Thread.Sleep(100);
        }
        VnIdcard.StopMonitor();
    }

    private static void Vn_OnStatusChanged(object sender, StatusChangeEventArgs e)
    {
        Console.WriteLine($"Device {e.ReaderName} change stated from: {e.LastState} to: {e.NewState}.");
        if (e.LastState != SCRState.Empty || e.NewState != SCRState.Present)
            return;

        try
        {
            string canCode = ""; //You can get it from OCR scan image; Example: 009904, 
            string MRZ = ""; //You can get it from OCR scan image; Example: "IDVNM0d580000221034058000026<<45810262M9912315VNM<<<<<<<<<<<0NGUYEN<<VAN<TY<<<<<<<<<<<<<<<<";

            TryScanCard(); //Only support on SCAN-READER
            canCode = VnIdcard.GetOcrCanCode();
           

            VnIdcard.ReadCard(e.ReaderName, canCode, MRZ);
            //Console.WriteLine($"FaceImage lafffff: {_vnIdcard.GetChipFaceImage().Substring(0, 200)}...");
            _cardInfo.FullName = VnIdcard.GetPersonalDetail().Name;
            _cardInfo.FaceImage =  VnIdcard.GetChipFaceImage();
            _cardInfo.IdentityNumber = VnIdcard.GetPersonalDetail().DocumentNumber;
        }
        catch (Exception ex)
        {
            Console.WriteLine("Error occured: " + ex.ToString());
        }
        finally
        {
            VnIdcard.RejectCard(); //Only support on SCAN-READER
        }
    }
    private static bool TryScanCard()
    {
        Console.WriteLine("Trying scan card...");
        try
        {
            bool scanResult = VnIdcard.ScanCard(true);
            //Convert to jpeg base64
            if (scanResult && VnIdcard.GetScanImage() != null && VnIdcard.GetScanImage().Front != null)
            {
                var jpgFront = VnIdcard.GetScanImage().Front.ToMemoryStream(".jpg").ToArray();
                //File.WriteAllBytes("D:/front.jpg", jpgFront);
                var scanFront = Convert.ToBase64String(jpgFront);
                _cardInfo.FrontImage = scanFront;
            }
            if (scanResult && VnIdcard.GetScanImage() != null && VnIdcard.GetScanImage().Back != null)
            {
                var jpgBack = VnIdcard.GetScanImage().Back.ToMemoryStream(".jpg").ToArray();
                //File.WriteAllBytes("D:/back.jpg", jpgBack);
                var scanBack = Convert.ToBase64String(jpgBack);
                _cardInfo.BackImage = scanBack;
            }
            var cancode = VnIdcard.GetOcrCanCode();
            if (!string.IsNullOrEmpty(cancode))
            {
                Console.WriteLine($"CanCode from Image OCR: {cancode}");
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine("Scan error: " + ex.Message);
        }
        return false;
    }
}

public class CardInfo
{
    public string? FaceImage { get; set; }
    public string? FullName { get; set; }
    public string? IdentityNumber { get; set; }
    public string? BackImage { get; set; }
    public string? FrontImage { get; set; }
}