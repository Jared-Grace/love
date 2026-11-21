import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_element } from "./html_element.mjs";
import { html_media_source_file_set } from "./html_media_source_file_set.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_div } from "./html_div.mjs";
import { firebase_auth_ensure } from "./firebase_auth_ensure.mjs";
import { app_bible_record_clip_path } from "./app_bible_record_clip_path.mjs";
import { firebase_upload_blob_browser } from "./firebase_upload_blob_browser.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
export function app_bible_record_take_draw(
  panel,
  blob,
  chapter_code,
  verse_numbers,
  on_again,
  on_done,
) {
  "What was just recorded, played back before it is sent: the video, a button to send it up, and one to throw it away and record again.";
  "Sending asks for signing in first, the first time only, because only the owner may add recordings - a recording sent up becomes a video posted to YouTube with nobody looking at it again, so a stranger must not be able to send one.";
  arguments_assert(arguments, 6);
  html_clear(panel);
  let video = html_element(panel, "video");
  html_media_source_file_set(video, blob);
  let element = html_component_element_get(video);
  element.controls = true;
  element.playsInline = true;
  html_style_assign(video, {
    width: "100%",
    "max-height": "70vh",
    background: "black",
  });
  let buttons = html_div(panel);
  async function send() {
    await firebase_auth_ensure(buttons);
    let path = app_bible_record_clip_path(chapter_code, verse_numbers, blob);
    await firebase_upload_blob_browser(path, blob);
    on_done();
  }
  app_shared_button_wide(buttons, "Send this recording", send);
  app_shared_button_wide(buttons, "Record again", on_again);
}
