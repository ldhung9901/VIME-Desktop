﻿using Microsoft.JSInterop;

namespace VimeDesktopApp;

public partial class App : Application
{
    public App()
    {
        InitializeComponent();
        CheckAndRequestCameraPermission();
        CheckAndRequestFilePermission();

        MainPage = new MainPage();
    }

    public async Task<PermissionStatus> CheckAndRequestCameraPermission()
    {
        PermissionStatus status = await Permissions.CheckStatusAsync<Permissions.Camera>();

        if (status == PermissionStatus.Granted)
            return status;

        if (status == PermissionStatus.Denied && DeviceInfo.Platform == DevicePlatform.iOS)
        {
            // Prompt the user to turn on in settings
            // On iOS once a permission has been denied it may not be requested again from the application
            return status;
        }

        if (Permissions.ShouldShowRationale<Permissions.Camera>())
        {
            // Prompt the user with additional information as to why the permission is needed
        }

        status = await Permissions.RequestAsync<Permissions.Camera>();

        return status;
    }
    public async Task<PermissionStatus> CheckAndRequestFilePermission()
    {
        PermissionStatus status = await Permissions.CheckStatusAsync<Permissions.Photos>();

        if (status == PermissionStatus.Granted)
            return status;

        if (status == PermissionStatus.Denied && DeviceInfo.Platform == DevicePlatform.iOS)
        {
            // Prompt the user to turn on in settings
            // On iOS once a permission has been denied it may not be requested again from the application
            return status;
        }

        if (Permissions.ShouldShowRationale<Permissions.Photos>())
        {
            // Prompt the user with additional information as to why the permission is needed
        }

        status = await Permissions.RequestAsync<Permissions.Photos>();

        return status;
    }
}