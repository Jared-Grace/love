import { text_spaces_beside_punctuation_removed } from "./text_spaces_beside_punctuation_removed.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { regex_usfm_marker } from "./regex_usfm_marker.mjs";
import { regex_usfm_word_attributes } from "./regex_usfm_word_attributes.mjs";
import { whitespace_normalize } from "./whitespace_normalize.mjs";
export function usfm_markers_removed(text) {
  arguments_assert(arguments, 1);
  ("$plain text");
  ("The words of a passage of usfm with every mark taken out of it and nothing else changed.");
  ("A mark says what the words beside it are - a paragraph, a line of poetry, a name of God, a word the translators added - and none of that is anything a reader of the verse hears. So the marks go and the words they stood beside stay, which is the opposite of what is done to a note, where the mark and its contents go together.");
  ("What hangs on a word goes before the marks do. The bar and its dictionary number are found by looking for the next backslash, so they have to be taken while the backslashes are still there.");
  ("Each mark becomes a space rather than nothing, because two marks often sit either side of a word boundary and joining what they separated would run two words into one. The spaces that makes are then flattened, so nothing is left of the mark but the gap that was already there.");
  ("THE GAPS BESIDE PUNCTUATION ARE THEN CLOSED BACK UP, because a mark falls between a word and its comma as readily as between two words. A translation marked at every single word - which is what aligning a translation to the Hebrew does - otherwise comes out with each comma and full stop standing on its own between two spaces. The space that saves two words from running together is the same space that separates a sentence from its own full stop, so it cannot be decided when the mark is removed; it is decided afterwards, by which side of the gap the punctuation is on.");
  let r = regex_usfm_word_attributes();
  let unattributed = text.replace(r, "");
  let r2 = regex_usfm_marker();
  let unmarked = unattributed.replace(r2, " ");
  let normalized = whitespace_normalize(unmarked);
  let tightened = text_spaces_beside_punctuation_removed(normalized);
  return tightened;
}
