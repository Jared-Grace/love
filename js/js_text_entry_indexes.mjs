import { arguments_assert } from "./arguments_assert.mjs";
import { less_than } from "./less_than.mjs";
import { text_index_of_from_try } from "./text_index_of_from_try.mjs";
import { subtract } from "./subtract.mjs";
import { text_slice } from "./text_slice.mjs";
import { add } from "./add.mjs";
import { list_includes } from "./list_includes.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
export function js_text_entry_indexes(line, spelled) {
  "$plain line";
  "the line is one line of javascript source, handed over to be looked through. Nothing in it runs.";
  "$plain spelled";
  "the spelling is one list entry exactly as the source spells it, quotes included. It is text to look for and nothing that runs.";
  "Where in one line of source a given list entry stands ON ITS OWN, as a list of character positions, earliest first.";
  "A PLAIN SEARCH FOR THE TEXT WOULD FIND IT INSIDE A LONGER ENTRY, and that is the whole reason this is separate. The spelling handed in carries its own quotes, so a shorter entry cannot hide inside a longer one through the letters - but the closing quote of one entry and the opening quote of the next sit two characters apart, and a reader walking raw positions has no way to tell an entry from a fragment. Requiring a list opener or a space in front and a comma or a list closer behind is what makes a position an entry.";
  "IT ANSWERS WITH EVERY POSITION RATHER THAN THE FIRST, because the caller is counting occurrences across a whole verse and a short verse keeps its whole word list on one line. Answering with the first would make every line worth at most one entry, which is the assumption that was wrong.";
  "IT ASKS THE LOOKING-UP THAT ANSWERS MINUS ONE RATHER THAN THE ONE THAT REFUSES. The two are spelled a word apart and mean opposite things: the asserting twin stops everything when the text is not there, and not being there is the ordinary case here - most lines of a verse do not hold the entry at all, and the walk ends by running out of matches.";
  arguments_assert(arguments, 2);
  let befores = ["[", " ", "("];
  let afters = [",", "]", ")"];
  let spots = [];
  let at = 0;
  while (less_than(at, line.length)) {
    let spot = text_index_of_from_try(line, spelled, at);
    if (less_than(spot, 0)) {
      break;
    }
    let from2 = subtract(spot, 1);
    let before = text_slice(line, from2, spot);
    let ends = add(spot, spelled.length);
    let to = add(ends, 1);
    let after = text_slice(line, ends, to);
    let opens = list_includes(befores, before);
    let starts = equal(spot, 0);
    let closes = list_includes(afters, after);
    let finishes = equal(ends, line.length);
    let left = opens || starts;
    let right = closes || finishes;
    if (left && right) {
      list_add(spots, spot);
    }
    at = add(spot, 1);
  }
  return spots;
}
