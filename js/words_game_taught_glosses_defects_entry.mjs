import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { not_equal } from "./not_equal.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { and } from "./and.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { words_early_reader_outside_untaught } from "./words_early_reader_outside_untaught.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { text_combine } from "./text_combine.mjs";
export async function words_game_taught_glosses_defects_entry(
  written,
  glosses,
  defects,
) {
  "Every taught word's written answer checked for the two things that make it unusable: a half of it left unwritten, and an answer leaning on words the reader has not been taught yet.";
  "AN ANSWER THAT NEEDS ANOTHER ANSWER IS NOT AN ANSWER. A reader who taps a word to find out what it means and is handed three more words to tap has been sent further from the sentence they were reading, so the words a gloss may use are exactly the ones already taught.";
  arguments_assert(arguments, 3);
  for (let word of written) {
    let entry = property_get(glosses, word);
    let gloss = property_or_null(entry, "gloss");
    let explain = property_or_null(entry, "explain");
    let halves = [gloss, explain];
    let said_both = true;
    for (let piece of halves) {
      let there = not_equal(piece, null);
      let filled = text_empty_not_is(piece);
      let said = and(there, filled);
      if (not(said)) {
        let blank = {
          word,
          fault: "one half of the answer is not written",
        };
        list_add(defects, blank);
        said_both = false;
      }
    }
    if (not(said_both)) {
      continue;
    }
    let both = list_join_space([gloss, explain]);
    let outside = await words_early_reader_outside_untaught(both);
    let reached = list_empty_not_is(outside);
    if (reached) {
      let joined = list_join_comma_space(outside);
      let harder = {
        word,
        fault: text_combine(
          "the answer says words the reader would have to tap in turn: ",
          joined,
        ),
      };
      list_add(defects, harder);
    }
  }
}
