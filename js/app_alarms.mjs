import { property_get } from "./property_get.mjs";
import { html_mobile_default } from "./html_mobile_default.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { html_div_text_centered } from "./html_div_text_centered.mjs";
import { window_open } from "./window_open.mjs";
import { android_alarms_apk_url } from "./android_alarms_apk_url.mjs";
export function app_alarms(context) {
  let root = property_get(context, "root");
  html_mobile_default(context);
  let card = app_shared_container_blue(root);
  let url = android_alarms_apk_url();
  function open_download() {
    window_open(url);
  }
  app_shared_button_wide(card, "Download the Android app", open_download);
  html_div_text_centered(
    card,
    "Open this on your Android phone, then tap the button to download and install",
  );
  html_div_text_centered(
    card,
    "Allow install from unknown apps once, then open JESUS rose to life Alarms and tap Test alarm",
  );
}
