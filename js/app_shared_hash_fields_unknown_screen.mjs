import { app_shared_hash_field_unknown_row } from "./app_shared_hash_field_unknown_row.mjs";
import { app_shared_hash_fields_unknown_heading } from "./app_shared_hash_fields_unknown_heading.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { app_shared_text_warning_color } from "./app_shared_text_warning_color.mjs";
import { each } from "./each.mjs";
import { html_div_text_bold } from "./html_div_text_bold.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { property_get } from "./property_get.mjs";
export function app_shared_hash_fields_unknown_screen(parent, findings) {
  "What a reader sees instead of the page when the link they followed says something the page cannot read.";
  "It says what is wrong, in the same words the link uses, and it offers the correction rather than only describing it - one press and they are through. Somebody who arrives here did not write this link; it was sent to them, or they typed it once and mistyped a letter. Telling them their address is invalid and stopping there leaves them with nothing to do about it.";
  let heading = app_shared_hash_fields_unknown_heading(findings);
  let head = html_div_text_bold(parent, heading);
  let color = app_shared_text_warning_color();
  html_font_color_set(head, color);
  let said = "Choose what it should say and the page will open.";
  app_shared_text_body(parent, said);
  function draw(finding) {
    let field = property_get(finding, "field");
    let value = property_get(finding, "value");
    app_shared_hash_field_unknown_row(parent, field, value);
  }
  each(findings, draw);
}
