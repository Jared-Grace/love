import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_hebrew_word_parts } from "./bible_glyph_hebrew_word_parts.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
export function bible_glyph_hebrew_word_english_keys(word) {
  arguments_assert(arguments, 1);
  ("$plain word");
  ("the word is one Hebrew row of the interlinear - its letters, its parsing and its Strong's number. It is data to read and nothing that runs.");
  ("The keys of one Hebrew word's parts in the order ENGLISH says them.");
  ("THE FRONT LETTERS KEEP THEIR PLACE, because and, in, from and the come before their word in English as they do in Hebrew. ONLY THE END LETTERS MOVE, and where they go is read off the stem, not guessed: on a noun or an adjective they are its owner and English says the owner first - his sanctuary - while on a verb or a preposition they are its object and English says it after - praise him, from me. An infinitive is the one verb whose end letters say who does it - in his going is when he goes - so it goes with the nouns.");
  let hebrew = bible_glyph_hebrew_word_parts(word);
  let stem_parsing = hebrew.stem_parsing;
  let owned =
    text_starts_with(stem_parsing, "N-") ||
    text_starts_with(stem_parsing, "Adj") ||
    text_ends_with(stem_parsing, "-Inf");
  let front = [];
  let stem = [];
  let end = [];
  for (let part of hebrew.parts) {
    if (equal(part.role, "prefix")) {
      list_add(front, part.key);
    } else if (equal(part.role, "stem")) {
      list_add(stem, part.key);
    } else {
      list_add(end, part.key);
    }
  }
  let keys = owned ? [...front, ...end, ...stem] : [...front, ...stem, ...end];
  return keys;
}
