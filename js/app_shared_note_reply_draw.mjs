import { arguments_assert } from "./arguments_assert.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_shared_note_reply_draw(line, one) {
  "Under a note's words, the answer written back to it, when there is one - so a reply is read beside the note it answers rather than mapped back to it from somewhere else.";
  arguments_assert(arguments, 2);
  let reply = property_or_null(one, "reply");
  if (reply) {
    let text = text_combine_multiple(["↳ ", reply]);
    let answered_line = html_div_text(line, text);
    html_style_assign(answered_line, {
      "margin-top": "0.25rem",
      "font-style": "italic",
    });
  }
}
