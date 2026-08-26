import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_span_text_code } from "./html_span_text_code.mjs";
import { html_span_text_content } from "./html_span_text_content.mjs";
import { each } from "./each.mjs";
export function html_spans_prose_code(parent, parts) {
  arguments_assert(arguments, 2);
  ("A sentence that has code in the middle of it, drawn a piece at a time so that the code wears the code lettering and the words around it do not.");
  ("It exists because a sentence about code cannot be one run of text. Joined into one string first, the code in it is indistinguishable from the words by the time anything could style it, and the only way back is to hunt for it again by shape - which is guessing. Handed over already cut into pieces, each piece already knows which it is.");
  ("EVERY PIECE SAYS WHICH IT IS, and none of them is allowed to leave it out. A piece that could omit the answer would be a piece whose lettering depends on what the writer forgot, and the writer forgetting reads on the screen as the code having been ordinary words all along - a difference nothing goes red about.");
  ("Every piece is set exactly as written and never as markup, in both kinds, because the words around code are as likely to quote a piece of it as the code is to hold one.");
  function each_part(part) {
    let text = property_get(part, "text");
    let code = property_get(part, "code");
    if (code) {
      html_span_text_code(parent, text);
      return;
    }
    html_span_text_content(parent, text);
  }
  each(parts, each_part);
}
