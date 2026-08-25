import { js_line_data_is } from "./js_line_data_is.mjs";
import { text_ends_with_any } from "./text_ends_with_any.mjs";
import { text_slice_from } from "./text_slice_from.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
export function diff_line_kind(line) {
  "What one changed line of a difference is made of: an import, a written-out comment, a value chosen, a name standing alone that could be either, or actual code";
  "The four are worth telling apart because only one of them is a gap. Imports are already written by the canonicalizing pass, and a comment in this repo is a bare piece of text standing on its own line, which no transform was ever going to compose. What is left is the code, and that is where a missing command would have helped";
  let without_sign = text_slice_from(line, 1);
  let bare = text_trim(without_sign);
  let brought_in = text_starts_with(bare, "import ");
  if (brought_in) {
    let r = "import";
    return r;
  }
  ("A LINE THAT OPENS WITH A PIECE OF TEXT IS NOT YET PROSE, and reading it as prose was wrong wherever a piece of text is data. A name inside a written-out record opens with the same character - a key, a colour, a word in a list - so counting by the opening alone filed every such line under the paragraphs written for a reader, and two of the four commits held up as prose rewritten by hand turned out to be entries added to a record.");
  ("WHAT SETTLES IT IS THE OTHER END. Prose here is a piece of text standing alone as a whole statement, which is the thing this already said it was looking for, so it closes the way a statement closes and nothing that is being handed to something else does. A key is followed by its value, an entry in a list by the comma before the next one; only a paragraph runs out at a semicolon.");
  let written = text_starts_with(bare, '"');
  let wrapped = text_starts_with(bare, '("');
  let opened = written || wrapped;
  if (opened) {
    let endings = ['";', '");'];
    let standing = text_ends_with_any(bare, endings);
    if (standing) {
      let r2 = "comment";
      return r2;
    }
  }
  ("WHAT IS LEFT SPLITS AGAIN, and this reading used to stop before it. A value written into a record is not a paragraph, which is why it stopped being read as one - but it is not a command missing either, and calling it code put every colour picked and every number raised into the one bucket this whole reading exists to size. It is asked about last on purpose: prose is settled first, so a line reaching here has already failed to be a whole statement of its own.");
  let held = js_line_data_is(bare);
  if (held) {
    let r3 = "data";
    return r3;
  }
  ("ONE SHAPE IS LEFT UNDECIDED RATHER THAN GUESSED. A single name and a comma is written the same way whether it is an entry of a list, a part of a record under its own name, or an argument of a call broken over several lines - values, values, and program. The line carries no mark that separates them, so it is answered as itself and the reader is handed the doubt as a number instead of a sentence.");
  let alone = js_line_name_alone_is(bare);
  if (alone) {
    let r4 = "name alone";
    return r4;
  }
  let r5 = "code";
  return r5;
}
