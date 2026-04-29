import { app_prefix_without_fn } from "../../../love/public/src/app_prefix_without_fn.mjs";
import { folder_secret_join } from "../../../love/public/src/folder_secret_join.mjs";
import { html_input_placeholder_wide } from "../../../love/public/src/html_input_placeholder_wide.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { html_p } from "../../../love/public/src/html_p.mjs";
import { clipboard_paste } from "../../../love/public/src/clipboard_paste.mjs";
import { html_button_wide } from "../../../love/public/src/html_button_wide.mjs";
import { html_mobile_default_font_size_context } from "../../../love/public/src/html_mobile_default_font_size_context.mjs";
export function app_calendar_main(context) {
  let root = html_mobile_default_font_size_context(context);
  let component2 = html_button_wide(
    root,
    "Paste Facebook Messages URL or WhatsApp number",
    lambda2,
  );
  let p = html_p(root);
  async function lambda2() {
    let paste = await clipboard_paste();
    html_text_set(p, paste);
  }
  html_input_placeholder_wide(root, "Facebook Messages URL");
  html_input_placeholder_wide(root, "WhatsApp number");
  let without = app_prefix_without_fn(app_fn);
  let file_path = folder_secret_join(only);
}
