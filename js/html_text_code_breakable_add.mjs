import { fn_name } from "./fn_name.mjs";
import { text_code_break_pieces } from "./text_code_break_pieces.mjs";
import { subtract } from "./subtract.mjs";
import { text_split } from "./text_split.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_includes } from "./text_includes.mjs";
import { html_span } from "./html_span.mjs";
import { html_style_white_space } from "./html_style_white_space.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { html_element } from "./html_element.mjs";
export function html_text_code_breakable_add(parent, code, write) {
  ("writes code into parent with a place to break between the pieces ",
    fn_name("text_code_break_pieces"),
    " cuts it into, so code wider than its room wraps between its tokens rather than inside one");
  ("A place to break is an empty element rather than an invisible character, because a character would be copied along with the code and a program holding one no longer runs, and it would stand in the text a test reads. The empty element marks where a line may end and is nothing at all to the text.");
  ("Each piece is written by write(parent, piece), handed in by the caller, because the writers of code here differ - some write a piece as plain text and some as markup - and taking the one the caller already used changes where a line may break and nothing else.");
  let pieces = text_code_break_pieces(code);
  let last = subtract(pieces.length, 1);
  ("2026-11-12: a browser also ends a line after any hyphen, so for (...; i--) on a phone broke between the two minus signs, as i- then -). So every run of text with a hyphen in it and no space, as i--) or -1 or self-control, is written inside an element that may not break, and the rest of the piece is written as before. The run is cut only at spaces, so what stands either side of it is what stood there before, and a writer that reads a negative number by the character before its minus still sees a space or nothing.");
  function piece_write(piece) {
    let parts = text_split(piece, /(\S*-\S*)/);
    for (let part of parts) {
      if (text_empty_is(part)) {
        continue;
      }
      if (text_includes(part, "-")) {
        let held = html_span(parent);
        html_style_white_space(held, "nowrap");
        write(held, part);
      } else {
        write(parent, part);
      }
    }
  }
  for (let index = 0; less_than_equal(index, last); index++) {
    piece_write(pieces[index]);
    if (less_than(index, last)) {
      html_element(parent, "wbr");
    }
  }
}
