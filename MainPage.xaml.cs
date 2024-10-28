using Microsoft.JSInterop;
using RAR.IdCard.Sdk.Reader;

namespace VimeDesktopApp;

public partial class MainPage : ContentPage
{
    // private static VnIdcard _cardReader = new VnIdcard();
    public MainPage()
    {
        InitializeComponent();
        // TryScanCard();
    }
    [JSInvokable]
    public static string CheckBattery()
    {
        string batteryDetails = "This device," + DeviceInfo.Name + ", has battery level of " + Math.Floor(Battery.ChargeLevel * 100) + "% ." + "Energy Saver Status: " + Battery.EnergySaverStatus;
        Microsoft.Maui.Devices.EnergySaverStatus batterySaverStatus = Battery.EnergySaverStatus;
        return batteryDetails;
    }
    // private  CardInfo TryScanCard()
    // {
        
        // var scanResult =  _cardReader.ScanCard(true);
        // var cardInfo = new CardInfo
        // {
        //     FaceImage = null,
        //     BackImage = null,
        //     FrontImage = null
        //     
        // };
        // if (scanResult)
        // {
        //     // Xử lý hình ảnh mặt trước
        //     var frontImage = _cardReader.GetScanImage()?.Front;
        //     if (frontImage != null)
        //     {
        //         var jpgFront = frontImage.ToMemoryStream(".jpg").ToArray();
        //         var scanFront = Convert.ToBase64String(jpgFront);
        //         cardInfo.FrontImage = scanFront;
        //     }
        //
        //     // Xử lý hình ảnh mặt sau
        //     var backImage = _cardReader.GetScanImage()?.Back;
        //     if (backImage != null)
        //     {
        //         var jpgBack = backImage.ToMemoryStream(".jpg").ToArray();
        //         var scanBack = Convert.ToBase64String(jpgBack);
        //         cardInfo.FrontImage = scanBack;
        //         cardInfo.FaceImage = _cardReader.GetChipFaceImage();
        //
        //         // BackImageData = ConvertBase64ToImage(scanBack);
        //     }
        //     
        //     
        // }
        //
        // return cardInfo;
    // }
}

// public class CardInfo
// {
//     public string? FaceImage { get; set; }
//     public string? BackImage { get; set; }
//     public string? FrontImage { get; set; }
// }