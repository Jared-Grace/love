import { fn_name } from "./fn_name.mjs";
export function app_shared_native_update() {
  ("Asks the Android app this page is showing in to download its newest version and install it (android/shared AppUpdateBridge.kt). Only offered where ",
    fn_name("app_shared_native_update_is"),
    " says the app can.");
  window.love_app_native.update();
}
