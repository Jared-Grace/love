import { html_input_wide } from "../../../love/public/src/html_input_wide.mjs";
import { html_button_wide } from "../../../love/public/src/html_button_wide.mjs";
import { html_mobile_default_font_size_context } from "../../../love/public/src/html_mobile_default_font_size_context.mjs";
export function app_calendar_main(context) {
  let root = html_mobile_default_font_size_context(context);
  function lambda2() {}
  let component2 = html_button_wide(
    root,
    "Paste Facebook Messages URL or WhatsApp number",
    lambda2,
  );
  html_input_wide(root);
}
