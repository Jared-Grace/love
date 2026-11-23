export function app_shared_native_update_is() {
  "Whether this page is showing inside one of our Android apps that can update itself (android/shared AppUpdateBridge.kt adds a love_app_native object). In a plain browser there is nothing to update, so nothing is offered.";
  let r = "love_app_native" in window;
  return r;
}
