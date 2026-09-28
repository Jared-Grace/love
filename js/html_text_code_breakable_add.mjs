import { fn_name } from "./fn_name.mjs";
import { subtract } from "./subtract.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { text_code_break_pieces } from "./text_code_break_pieces.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_element } from "./html_element.mjs";
export function html_text_code_breakable_add(parent, code) {
  ("writes code into parent with a place to break between the pieces ",
    fn_name("text_code_break_pieces"),
    " cuts it into, so code wider than its room wraps between its tokens rather than inside one");
  ("A place to break is an empty element rather than an invisible character, because a character would be copied along with the code and a program holding one no longer runs, and it would stand in the text a test reads. The empty element marks where a line may end and is nothing at all to the text.");
  ("Each piece is written the way every writer of code here writes it, so this changes where a line may break and nothing else.");
  let pieces = text_code_break_pieces(code);
  let last = subtract(pieces.length, 1);
  for (let index = 0; less_than_equal(index, last); index++) {
    html_span_text(parent, pieces[index]);
    if (less_than(index, last)) {
      html_element(parent, "wbr");
    }
  }
}
