import { app_shared_bible_language_unknown_row } from "./app_shared_bible_language_unknown_row.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { app_shared_text_warning_color } from "./app_shared_text_warning_color.mjs";
import { each } from "./each.mjs";
import { html_div_text_bold } from "./html_div_text_bold.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
export function app_shared_bible_language_unknown_screen(parent, unknown) {
  "What a reader sees instead of the verses when the link they followed names a language in a way this repo cannot read.";
  "It says what is wrong, in the same words the link uses, and it offers the correction rather than only describing it - one press and they are reading. Somebody who arrives here did not choose these codes; a link was sent to them, or they typed it once and mistyped a letter. Telling them their address is invalid and stopping there leaves them with nothing to do about it.";
  let heading = "This link asks for a language we do not have";
  let head = html_div_text_bold(parent, heading);
  let color = app_shared_text_warning_color();
  html_font_color_set(head, color);
  let said = "Choose what it should say and the page will open.";
  app_shared_text_body(parent, said);
  function draw(code) {
    app_shared_bible_language_unknown_row(parent, code);
  }
  each(unknown, draw);
}
