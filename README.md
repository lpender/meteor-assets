# meteor image asset generator

## Setup

-   Clone this repository.
-   Open the repository in the command line and run `npm install`

```
git clone https://github.com/lpender/meteor-assets
cd meteor-assets
npm install
```

## Environmental Dependencies

This project requires `imagemagick`.

#### Linux

```
sudo apt-get install imagemagick imagemagick-doc
```

#### Os X

Install [homebrew](http://brew.sh/) and then:

```
brew install imagemagick
```

### Note

This repository has been updated for usage with Meteor v1.3.

If `meteor --version` is less than `1.3`:

```
git pull --tags
git checkout v0.0.2
```

## Usage

_Note_: You can use the same icon cross platform but it's not recommended in
some cases. See [this issue](https://github.com/lpender/meteor-assets/issues/6)
for more details.

1.  Generate icons at 1024x1024 and place them in `resources/icon-ios.png` and
    `resources/icon-android.png`.

2.  Generate splash screens at 2208x2208 and place them in
    `resources/splash-ios.png` and `resources/splash-android.png`.

3.  Run `node meteor-assets`.

4.  Copy the `resources` directory to your app: `cp -R resources /path/to/my/app`.

5.  Add this to your `mobile-config.js`

```javascript
App.icons({
    app_store: 'resources/icons/app_store.png', // 1024x1024
    iphone_2x: 'resources/icons/iphone_2x.png', // 120x120
    iphone_3x: 'resources/icons/iphone_3x.png', // 180x180
    ipad: 'resources/icons/ipad.png', // 76x76
    ipad_2x: 'resources/icons/ipad_2x.png', // 152x152
    ipad_pro: 'resources/icons/ipad_pro.png', // 167x167
    ios_settings: 'resources/icons/ios_settings.png', // 29x29
    ios_settings_2x: 'resources/icons/ios_settings_2x.png', // 58x58
    ios_settings_3x: 'resources/icons/ios_settings_3x.png', // 87x87
    ios_spotlight: 'resources/icons/ios_spotlight.png', // 40x40
    ios_spotlight_2x: 'resources/icons/ios_spotlight_2x.png', // 80x80
    ios_spotlight_3x: 'resources/icons/ios_spotlight_3x.png', // 120x120
    ios_notification: 'resources/icons/ios_notification.png', // 20x20
    ios_notification_2x: 'resources/icons/ios_notification_2x.png', // 40x40
    ios_notification_3x: 'resources/icons/ios_notification_3x.png', // 60x60
    iphone_legacy: 'resources/icons/iphone_legacy.png', // 57x57
    iphone_legacy_2x: 'resources/icons/iphone_legacy_2x.png', // 114x114
    ipad_spotlight_legacy: 'resources/icons/ipad_spotlight_legacy.png', // 50x50
    ipad_spotlight_legacy_2x: 'resources/icons/ipad_spotlight_legacy_2x.png', // 100x100
    ipad_app_legacy: 'resources/icons/ipad_app_legacy.png', // 72x72
    ipad_app_legacy_2x: 'resources/icons/ipad_app_legacy_2x.png', // 144x144
    android_mdpi: 'resources/icons/android_mdpi.png', // 48x48
    android_hdpi: 'resources/icons/android_hdpi.png', // 72x72
    android_xhdpi: 'resources/icons/android_xhdpi.png', // 96x96
    android_xxhdpi: 'resources/icons/android_xxhdpi.png', // 144x144
    android_xxxhdpi: 'resources/icons/android_xxxhdpi.png' // 192x192
});

App.launchScreens({
    iphone: 'resources/splashes/iphone.png', // 320x480
    iphone_2x: 'resources/splashes/iphone_2x.png', // 640x490
    iphone5: 'resources/splashes/iphone5.png', // 640x1136
    iphone6: 'resources/splashes/iphone6.png', // 750x1334
    iphone6p_portrait: 'resources/splashes/iphone6p_portrait.png', // 2208x1242
    iphone6p_landscape: 'resources/splashes/iphone6p_landscape.png', // 2208x1242
    iphoneX_portrait: 'resources/splashes/iphoneX_portrait.png', // 1125x2436
    iphoneX_landscape: 'resources/splashes/iphoneX_landscape.png', // 2436x1125
    ipad_portrait: 'resources/splashes/ipad_portrait.png', // 768x1024
    ipad_portrait_2x: 'resources/splashes/ipad_portrait_2x.png', // 1536x2048
    ipad_landscape: 'resources/splashes/ipad_landscape.png', // 1024x768
    ipad_landscape_2x: 'resources/splashes/ipad_landscape_2x.png', // 2048x1536
    android_mdpi_portrait: 'resources/splashes/android_mdpi_portrait.png', // 320x480
    android_mdpi_landscape: 'resources/splashes/android_mdpi_landscape.png', // 480x320
    android_hdpi_portrait: 'resources/splashes/android_hdpi_portrait.png', // 480x800
    android_hdpi_landscape: 'resources/splashes/android_hdpi_landscape.png', // 800x480
    android_xhdpi_portrait: 'resources/splashes/android_xhdpi_portrait.png', // 720x1280
    android_xhdpi_landscape: 'resources/splashes/android_xhdpi_landscape.png', // 1280x720
    android_xxhdpi_portrait: 'resources/splashes/android_xxhdpi_portrait.png', // 1080x1440
    android_xxhdpi_landscape: 'resources/splashes/android_xxhdpi_landscape.png', // 1440x1080
    android_xxxhdpi_portrait: 'resources/splashes/android_xxxhdpi_portrait.png', // 1280x1920
    android_xxxhdpi_landscape:
        'resources/splashes/android_xxxhdpi_landscape.png' // 1920x1280
});
```

Sizes thanks to

-   https://docs.meteor.com/api/mobile-config.html#App-icons
-   https://docs.meteor.com/api/mobile-config.html#App-launchScreens

## Notes

-   This will crop splashes horizontally centered and vertically centered.
-   This does not currently generate [9 patch](https://developer.android.com/guide/topics/graphics/2d-graphics.html#nine-patch) images for Android.

## Contributing

It wouldn't be so bad to turn this into a proper CLI node package.
