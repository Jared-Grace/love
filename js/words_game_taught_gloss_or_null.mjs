import { words_game_taught_glosses } from "./words_game_taught_glosses.mjs";
import { word_early_reader_matched_or_null } from "./word_early_reader_matched_or_null.mjs";
import { property_get } from "./property_get.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { equal } from "./equal.mjs";
export function words_game_taught_gloss_or_null(word) {
  "$plain word";
  "What the game has to say about one word a player tapped, or null when it has nothing to say about that word.";
  "IT IS THE WHOLE OF WHAT A TAP ASKS, and it answers null rather than refusing, because a player may tap any word in a sentence and most words are not taught ones. A tap on THE is not a mistake somebody made; it is a person finding out what is tappable, and an error there would teach them to stop touching the screen.";
  "IT REACHES THE ENTRY THROUGH THE SAME ENDING-STRIPPER THE CHECKS READ THROUGH, so SINNED finds SIN and FORGIVEN finds FORGIVE without either shape being written into the table. Matching the tapped word against the keys directly would have answered nothing for the shapes people actually say, and the table would have grown a row per shape to hide it.";
  "THE WORD IT IS GIVEN IS ALREADY LOWERED AND STRIPPED TO LETTERS, because the span reader hands the word over that way while drawing the sentence with its comma and its capital intact. Doing that tidying here as well would be a second spelling of what counts as one word, and the two would answer differently the first time one of them changed.";
  let glosses = words_game_taught_glosses();
  let taught = object_property_names(glosses);
  let matched = word_early_reader_matched_or_null(word, taught);
  let none = equal(matched, null);
  if (none) {
    return null;
  }
  let entry = property_get(glosses, matched);
  let r = {
    word: matched,
    gloss: property_get(entry, "gloss"),
    explain: property_get(entry, "explain"),
  };
  return r;
}
