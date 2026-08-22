import { words_game_taught_glosses_defects_word } from "./words_game_taught_glosses_defects_word.mjs";
import { words_game_taught_glosses_defects_entry } from "./words_game_taught_glosses_defects_entry.mjs";
import { words_game_taught } from "./words_game_taught.mjs";
import { words_game_taught_glosses } from "./words_game_taught_glosses.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { not } from "./not.mjs";
export async function words_game_taught_glosses_defects() {
  "Everything wrong with the glosses the game means to show a player who taps a taught word - a taught word with no answer written for it, an answer written for a word nothing teaches, an empty half, and an explanation that reaches for a word the reader would have to tap in turn.";
  "IT ANSWERS WITH A LIST RATHER THAN THROWING, so the gate beside it can name every defect in one reading instead of one per run. Fixing twenty of these one throw at a time is twenty runs of a check that takes the same time to find all twenty.";
  "THE LAST OF THE FOUR IS THE ONE WORTH HAVING. The first three are bookkeeping and a person would notice them; an explanation quietly reaching past the reader is the failure that looks like success, because the page renders, the word has an answer, and the player is no better off than before they tapped.";
  let taught_words = await words_game_taught();
  let glosses = words_game_taught_glosses();
  let written = object_property_names(glosses);
  let defects = words_game_taught_glosses_defects_word(taught_words, written);
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
  await words_game_taught_glosses_defects_entry(written, glosses, defects);
  return defects;
}
