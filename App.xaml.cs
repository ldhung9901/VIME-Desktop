using Microsoft.JSInterop;

namespace VimeDesktopApp;

public partial class App : Application
{
    public App()
    {
        InitializeComponent();

        MainPage = new MainPage();
    }


}
