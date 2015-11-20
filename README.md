# meteor image asset generator

1. Generate an icon at 1024x1024 and place it in `resources/icon.png`.

2. Generate a splash screen at 2208x2208 and place it in `resources/splash.png`.

3. Run `node meteor-assets`

4. Add this to your `mobile-config.js`

```
App.icons({
  "iphone": "resources/icons/iphone.png", // 60x60
  "iphone_2x": "resources/icons/iphone_2x.png", // 120x120
  "iphone_3x": "resources/icons/iphone_3x.png", // 180x180
  "ipad": "resources/icons/ipad.png", // 76x76
  "ipad_2x": "resources/icons/ipad_2x.png", // 152x152
  'android_ldpi': "resources/icons/android_ldpi.png", // 36x36
  'android_mdpi': "resources/icons/icon_mdpi.png", // 48x48
  'android_hdpi': "resources/icons/icon_hdpi.png", // 72x72
  'android_xhdpi': "resources/icons/icon_xhdpi.png" // 96x96
});

App.launchScreens({
  "iphone": "resources/launchScreens/iphone.png", // 320x245
  "iphone_2x": "resources/launchScreens/iphone_2x.png", // 640x490
  "iphone5": "resources/launchScreens/iphone5.png", // 640x1136
  "iphone6": "resources/launchScreens/iphone6.png", // 750x1334
  "iphone6p_portrait": "resources/launchScreens/iphone6p_portrait.png", // 2208x1242
  "iphone6p_landscape": "resources/launchScreens/iphone6p_landscape.png",
  "ipad_portrait": "resources/launchScreens/ipad_portrait.png",
  "ipad_portrait_2x": "resources/launchScreens/ipad_portrait_2x.png",
  "ipad_landscape": "resources/launchScreens/ipad_landscape.png",
  "ipad_landscape_2x": "resources/launchScreens/ipad_landscape_2x.png",
  "android_ldpi_portrait": "resources/launchScreens/android_ldpi_portrait.png",
  "android_ldpi_landscape": "resources/launchScreens/android_ldpi_landscape.png",
  "android_mdpi_portrait": "resources/launchScreens/android_mdpi_portrait.png",
  "android_mdpi_landscape": "resources/launchScreens/android_mdpi_landscape.png",
  "android_hdpi_portrait": "resources/launchScreens/android_hdpi_portrait.png",
  "android_hdpi_landscape": "resources/launchScreens/android_hdpi_landscape.png",
  "android_xhdpi_portrait": "resources/launchScreens/android_xhdpi_portrait.png",
  "android_xhdpi_landscape": "resources/launchScreens/android_xhdpi_landscape.png"
})
```

From https://gist.github.com/jperl/f8c395b9f0f1056ad890
