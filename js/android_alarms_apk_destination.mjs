export function android_alarms_apk_destination() {
  "the Firebase Storage path the alarms APK is uploaded to; under http/ so the storage rules serve it public-read (no login needed to download onto a phone)";
  let r = "http/alarms/app-debug.apk";
  return r;
}
