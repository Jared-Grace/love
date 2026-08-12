import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_add } from "./list_add.mjs";
export function text_lines_search(text, s) {
  "The lines of this text that hold this word, each one given back with the place it sits at, counted from one the way an editor counts";
  "The word is looked for exactly as it is written. It is not read as a pattern, so a dot is a dot and a star is a star. That is the whole reason this can be one thing to learn: every machine's own searching command reads patterns by its own rules, and the rules disagree, so a pattern learned on one machine quietly means something else on the next. A plain word means the same everywhere.";
  "What comes back is a list of small records rather than lines of printed text. Printed text is the end of the road - the next thing that wants it has to take it apart again, and a line holding a colon takes itself apart wrongly. A record can be counted, sorted, filtered and handed on.";
  arguments_assert(arguments, 2);
  let lines = text_split_newline(text);
  let found = [];
  let number = 0;
  for (let line of lines) {
    number = number + 1;
    let holds = text_includes(line, s);
    if (holds) {
      let one = {
        number,
        line,
      };
      list_add(found, one);
    }
  }
  return found;
}
