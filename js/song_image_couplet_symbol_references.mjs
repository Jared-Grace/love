import { song_image_couplet_get } from "./song_image_couplet_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma_trimmed } from "./text_split_comma_trimmed.mjs";
export function song_image_couplet_symbol_references(n) {
  "$plain n";
  "The passages of scripture the picture beside one line of this hymn rests on, in the order its explanation names them.";
  "THE PICTURE'S PASSAGES ARE NOT THE LINE'S. A line and the emblem drawn beside it answer to Scripture separately, and where a line repeats they come apart completely: the words of couplet 9 rest on what couplet 8's words rest on, because they are the same words, while its broken fetter rests on Psalm 107:14 and Isaiah 61:1, which the line it repeats never touches. Asking one question and reading the other answer back is how a picture ends up captioned with somebody else's reasons.";
  "A picture nobody has written references for is answered with an empty list rather than with nothing at all, so a caller can go straight on to asking how many there are.";
  "IT IS ASKED OF THE COUPLET AND NOT OF THE GLOSS. What a line rests on was written later than the table and lives with the other things written later; what its picture rests on was settled when the picture was described, and so sits beside the description it belongs to. Two references in two places is not tidy, but moving either one away from the words it was written against would leave somebody editing a symbol in one file and its reasons in another.";
  arguments_assert(arguments, 1);
  let couplet = song_image_couplet_get(n);
  let references = text_split_comma_trimmed(couplet.symbol_ref);
  return references;
}
