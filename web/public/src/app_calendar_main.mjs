import { html_mobile_default_font_size_context } from "../../../love/public/src/html_mobile_default_font_size_context.mjs";
import { html_width_full } from "../../../love/public/src/html_width_full.mjs";
import { html_input } from "../../../love/public/src/html_input.mjs";
export function app_calendar_main(context) {
  let root = html_mobile_default_font_size_context(context);
  let component = html_input(root);
  html_width_full(component);
}
