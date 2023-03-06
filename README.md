# expo-image-picker minimal reproducible example

Running image picker with `MediaTypeOptions.Images` allows picking images of unsupported types, like svg.
If `ImagePicker.launchImageLibraryAsync` is launched with `allowsEditing: false` this results in promise rejection.
However, setting `allowsEditing: true` causes exception in Java code. This cannot be handled and causes hard crash.

Not relevant for iOS since `MediaTypeOptions.Images` seems to exclude unsupported types on this platform.

## Running

Copy `pear.svg` to android emulator, launch app, and click `allowsEditing: true` button.
Then pick `pear.svg` and observe crash log in logcat.
