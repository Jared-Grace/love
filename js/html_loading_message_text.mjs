import { html_loading_overlay } from "./html_loading_overlay.mjs";
import { html_code_loading_splash } from "./html_code_loading_splash.mjs";
export function html_loading_message_text() {
  ("the single line shown under the loading spinner, shared by the runtime overlay (",
    html_loading_overlay.name,
    ") and the build-time static splash (",
    html_code_loading_splash.name,
    ") so the wording never drifts between them");
  let r = "One moment, please 🙏";
  return r;
}
