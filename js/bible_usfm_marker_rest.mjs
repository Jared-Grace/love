import { arguments_assert } from "./arguments_assert.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { not } from "./not.mjs";
import { text_slice_from } from "./text_slice_from.mjs";
import { text_split_first } from "./text_split_first.mjs";
import { equal } from "./equal.mjs";
import { text_size } from "./text_size.mjs";
import { text_trim } from "./text_trim.mjs";
export function bible_usfm_marker_rest(line) {
  arguments_assert(arguments, 1);
  ("$plain line");
  ("One line of usfm split into the mark that opens it and everything that mark carries.");
  ("A line's first mark is the one that says what kind of line it is - a paragraph, a step of poetry, a heading, a break - and it is the only mark on the line that means anything about layout. Every other mark on the line is about a word inside it.");
  ("A line opening with no mark at all is answered with an empty mark rather than refused, because the caller has to lay that line out too and an empty mark is exactly what it means: a line that says nothing about itself and is therefore just more of the line above.");
  ("THE VERSE MARK IS NOT ONE OF THESE, and it is the one mark that opens a line and says nothing whatever about how the line is set. Two of the four bibles on this disk open a line with it thirty-eight thousand times, and answering it as the line kind was wrong twice over: the line lost the step or the paragraph it should have inherited from the line above, and the number went out of reach of the one reader that decides whether a number is wanted, so it stood in the words whether it was asked for or not.");
  ("So a line opening with the verse mark is answered as a line that says nothing about itself, with the mark left standing in what it carries for whoever wants the number. The berean never writes a line that way, which is why nothing was noticed until a second printing was put on the shelf.");
  ("THE THREE ANSWERS SPELL THE MARK THE SAME WAY, AND THAT IS NOT A TIDINESS POINT. All three are read by the same callers through one property name, so a spelling that differs between them is a reader that finds the mark on some lines and nothing at all on others - which is not an error anybody sees, it is a bible that silently loses its layout. Two of them once said marker_text while the third said marker, and every chapter read on the disk threw.");
  let marked = text_starts_with(line, "\\");
  if (not(marked)) {
    let unmarked = {
      marker: "",
      rest: line,
    };
    return unmarked;
  }
  let after = text_slice_from(line, 1);
  let marker_text = text_split_first(after, " ");
  let versed = equal(marker_text, "v");
  if (versed) {
    let verse = {
      marker: "",
      rest: line,
    };
    return verse;
  }
  let size = text_size(marker_text);
  let tail = text_slice_from(after, size);
  let rest = text_trim(tail);
  let both = {
    marker: marker_text,
    rest,
  };
  return both;
}
