import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_font_sans_serif_set_html } from "./html_font_sans_serif_set_html.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_input_file_accept } from "./html_input_file_accept.mjs";
import { app_shared_button_wide_input } from "./app_shared_button_wide_input.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { html_element } from "./html_element.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_media_source_file_set } from "./html_media_source_file_set.mjs";
import { phone_photos_send } from "./phone_photos_send.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_shared_color_red } from "./app_shared_color_red.mjs";
export async function phone_photos_preview() {
  ("A screen on the sandbox app, at hash phone_photos, for sending photos from a phone to the computer: pick one from the camera or the gallery and it goes up to storage at once, where the computer takes it down with ",
    fn_name("phone_photos_download_missing"),
    ".");
  ("The picker is not the camera button the receipts app uses, because that one asks for the camera only, and what is wanted here is as often a screenshot already on the phone as a photo taken now.");
  ("Each photo sent is shown under the button with its name once it has arrived, so it can be told which one to look at; a send that fails says so in red instead of looking like one still on its way.");
  arguments_assert(arguments, 0);
  let root = html_body_div();
  html_font_sans_serif_set_html();
  html_p_text(root, "Send photos from this phone to the computer.");
  let input = html_input_file_accept(root, "image/*", on_file);
  app_shared_button_wide_input(root, "📷 Send a photo", input);
  let listed = html_div(root);
  async function on_file(file) {
    let row = html_div(listed);
    html_style_margin_top(row, "1em");
    let picture = html_element(row, "img");
    html_style_set(picture, "max-width", "100%");
    html_media_source_file_set(picture, file);
    let line = html_p_text(row, "Sending...");
    try {
      let name = await phone_photos_send(file);
      let said = text_combine("✅ Sent as ", name);
      html_text_content_set(line, said);
    } catch (e) {
      let said_failed = text_combine("❌ Not sent: ", e.message);
      html_text_content_set(line, said_failed);
      let color = app_shared_color_red();
      html_font_color_set(line, color);
    }
  }
}
