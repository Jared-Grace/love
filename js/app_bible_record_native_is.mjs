export function app_bible_record_native_is() {
  "Whether this page is running inside the Android recorder app (android/record), which gives the page a love_record_native object to ask for the upright camera.";
  let r = "love_record_native" in window;
  return r;
}
