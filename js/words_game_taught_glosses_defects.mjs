import { words_game_taught } from "./words_game_taught.mjs";
import { words_game_taught_glosses } from "./words_game_taught_glosses.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { and } from "./and.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { words_early_reader_outside_untaught } from "./words_early_reader_outside_untaught.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { text_combine } from "./text_combine.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
export async function words_game_taught_glosses_defects() {
  "Everything wrong with the glosses the game means to show a player who taps a taught word - a taught word with no answer written for it, an answer written for a word nothing teaches, an empty half, and an explanation that reaches for a word the reader would have to tap in turn.";
  "IT ANSWERS WITH A LIST RATHER THAN THROWING, so the gate beside it can name every defect in one reading instead of one per run. Fixing twenty of these one throw at a time is twenty runs of a check that takes the same time to find all twenty.";
  "THE LAST OF THE FOUR IS THE ONE WORTH HAVING. The first three are bookkeeping and a person would notice them; an explanation quietly reaching past the reader is the failure that looks like success, because the page renders, the word has an answer, and the player is no better off than before they tapped.";
  let taught_words = await words_game_taught();
  let glosses = words_game_taught_glosses();
  let written = object_property_names(glosses);
  let defects = [];
  for (let word of taught_words) {
    let answered = list_includes(written, word);
    if (not(answered)) {
      let missing = {
        word,
        fault: "the game teaches this word and nothing here says what it means",
      };
      list_add(defects, missing);
    }
  }
  for (let word of written) {
    let taught = list_includes(taught_words, word);
    if (not(taught)) {
      let stray = {
        word,
        fault: "an answer is written for a word the taught list does not carry",
      };
      list_add(defects, stray);
    }
  }
  for (let word of written) {
    let entry = property_get(glosses, word);
    let gloss = property_or_null(entry, "gloss");
    let explain = property_or_null(entry, "explain");
    let halves = [gloss, explain];
    let said_both = true;
    for (let half of halves) {
      let there = not_equal(half, null);
      let filled = text_empty_not_is(half);
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
  return defects;
}
