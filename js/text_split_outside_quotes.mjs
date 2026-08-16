import { text_separators_longest_first } from "./text_separators_longest_first.mjs";
import { text_quote_end_index } from "./text_quote_end_index.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_add } from "./list_add.mjs";
export function text_split_outside_quotes(value, separators) {
  "A piece of text cut at any of these separators, but only where the separator stands outside quotation marks - so a separator written inside a quoted argument leaves the text whole there.";
  "A plain split cannot tell the two apart, and for a shell command line that difference decides whether a reading is true. A line handing a whole command to something else as a quoted argument holds every separator that command holds, and split naively it comes apart into pieces that were never run - so a program named only inside the quotation marks is counted as though it had been reached for. The same cut also takes any script handed over between quote marks apart into its own lines, which is where a count of programs picks up words like `done` and `const` and `EOF`.";
  "Both kinds of quotation mark are followed, each ending only on its own kind, because a mark of one kind inside the other is ordinary text. A backslash outside quotation marks, or inside the double kind, hides whatever follows it; inside the single kind nothing is hidden, which is the same rule a shell keeps.";
  "The separators are tried longest first, so a two-character one is never mistaken for the single-character one it begins with. A mark left open at the end closes nothing and the rest comes back as one piece, which errs toward joining rather than cutting - for a count, a piece too few understates a shape, while a piece too many invents one.";
  let ordered = text_separators_longest_first(separators);
  function separator_at(from) {
    for (let separator of ordered) {
      let here = value.startsWith(separator, from);
      if (here) {
        return separator;
      }
    }
    return null;
  }
  let pieces = [];
  let taken = 0;
  let index = 0;
  while (less_than(index, value.length)) {
    let character = value[index];
    let quoted = equal(character, "'") || equal(character, '"');
    if (quoted) {
      index = text_quote_end_index(value, index);
      continue;
    }
    let escaped = equal(character, "\\");
    if (escaped) {
      index = index + 2;
      continue;
    }
    let separator = separator_at(index);
    if (not_equal(separator, null)) {
      let item = value.slice(taken, index);
      list_add(pieces, item);
      index = index + separator.length;
      taken = index;
      continue;
    }
    index = index + 1;
  }
  let last = value.slice(taken);
  list_add(pieces, last);
  return pieces;
}
