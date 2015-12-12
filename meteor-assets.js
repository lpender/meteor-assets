var fs = require('fs'),
    gm = require('gm').subClass({imageMagick: true});

var icons = [
  {name:"iphone", size: "60x60"},
  {name:"iphone_2x", size: "120x120"},
  {name: "iphone_3x", size: "180x180"},
  {name: "ipad", size: "76x76"},
  {name: "ipad_2x", size: "152x152"},
  {name: "android_ldpi", size: "36x36"},
  {name: "android_mdpi", size: "48x48"},
  {name: "android_hdpi", size: "72x72"},
  {name: "android_xhdpi", size: "96x96"}
]

var splashes = [
  {"name":"iphone","size":"320x480"},
  {"name":"iphone_2x","size":"640x960"},
  {"name":"iphone5","size":"640x1136"},
  {"name":"iphone6","size":"750x1334"},
  {"name":"iphone6p_portrait","size":"1242x2208"},
  {"name":"iphone6p_landscape","size":"2208x1242"},
  {"name":"ipad_portrait","size":"768x1024"},
  {"name":"ipad_portrait_2x","size":"1536x2048"},
  {"name":"ipad_landscape","size":"1024x768"},
  {"name":"ipad_landscape_2x","size":"2048x1536"},
  {"name":"android_ldpi_portrait","size":"200x320"},
  {"name":"android_ldpi_landscape","size":"320x200"},
  {"name":"android_mdpi_portrait","size":"320x480"},
  {"name":"android_mdpi_landscape","size":"480x320"},
  {"name":"android_hdpi_portrait","size":"480x800"},
  {"name":"android_hdpi_landscape","size":"800x480"},
  {"name":"android_xhdpi_portrait","size":"720x1280"},
  {"name":"android_xhdpi_landscape","size":"1280x720"}
 ]


function getSize(image) {
  var sizes = image.size.split('x');
  return { width: sizes[0], height: sizes[1] }
}

// source file, target directory, image profile
function resize(source, target, image) {
  var icon = gm(source);

  var imageSize = getSize(image);
  var width = imageSize.width;
  var height = imageSize.height;
  var name = image.name;

  icon.resize(width, height)
    .write(target + name + '.png', function(err) {
      if(err) {
        console.log(err);
        console.log("Quitting because of an error");
      } else {
        console.log("Wrote " + name);
      }
    });
};

function crop(source, target, image) {
  var size;
  var splash = gm(source);

  var imageSize = getSize(image);
  var width = imageSize.width;
  var height = imageSize.height;
  var name = image.name;

  // square up so that it cuts off as little as possible
  if (height > width) {
    splash.resize(height, height);

    size = height;
  } else {
    splash.resize(width, width);

    size = width;
  }

  // calculate x offset
  var xOffset = (size/2) - (width/2);
  var yOffset = (size/2) - (height/2);

  splash.crop(width, height, xOffset, yOffset)
    .write(target + name + '.png', function(err) {
      if(err) {
        console.log(err);
        console.log("Quitting because of an error");
      } else {
        console.log("Wrote " + name);
      }
    });
}

icons.forEach(function(icon) {
  resize('resources/icon.png', 'resources/icons/', icon);
});

splashes.forEach(function(splash) {
  crop('resources/splash.png', 'resources/splashes/', splash);
});
