import { regex_usfm_word_attributes } from "./regex_usfm_word_attributes.mjs";
import { regex_usfm_marker } from "./regex_usfm_marker.mjs";
import { text_gap_mark } from "./text_gap_mark.mjs";
import { text_marker_gaps_closed } from "./text_marker_gaps_closed.mjs";
import { whitespace_normalize } from "./whitespace_normalize.mjs";
import { text_spaces_beside_settled_punctuation_removed } from "./text_spaces_beside_settled_punctuation_removed.mjs";
export function usfm_markers_removed(text) {
  "$plain text";
  "The words of a passage of usfm with every mark taken out of it and nothing else changed.";
  "A mark says what the words beside it are - a paragraph, a line of poetry, a name of God, a word the translators added - and none of that is anything a reader of the verse hears. So the marks go and the words they stood beside stay, which is the opposite of what is done to a note, where the mark and its contents go together.";
  "What hangs on a word goes before the marks do. The bar and its dictionary number are found by looking for the next backslash, so they have to be taken while the backslashes are still there.";
  "EACH MARK LEAVES A GAP MARK BEHIND RATHER THAN A SPACE, and that one character is what makes the tidying up afterwards decidable instead of a guess. A mark falls between a word and its own comma as readily as between two words, so some of the holes have to close and some have to become a space - and a passage that has already been flattened into one string cannot tell a hole the marking made from a space the translator typed. Leaving the holes marked keeps the two apart until the question is actually asked.";
  "The spaces are flattened last, once the gaps have been decided, so that nothing is left of a mark but the gap that was already there.";
  "A space the author typed is then shut only beside the punctuation whose side no language argues about. The publisher of the printed bible types ( which means and Likewise , every and you’ ?, in fifty-nine verses, and those are slips rather than words; but the same broad tidying applied to a curly quotation mark ate ninety real spaces in a language that opens its speech with the mark english closes one with.";
  let r = regex_usfm_word_attributes();
  let unattributed = text.replace(r, "");
  let r2 = regex_usfm_marker();
  let mark = text_gap_mark();
  let gapped = unattributed.replace(r2, mark);
  let closed = text_marker_gaps_closed(gapped);
  let normalized = whitespace_normalize(closed);
  let settled = text_spaces_beside_settled_punctuation_removed(normalized);
  return settled;
}
