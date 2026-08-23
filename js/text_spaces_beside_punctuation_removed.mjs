import { arguments_assert } from "./arguments_assert.mjs";
export function text_spaces_beside_punctuation_removed(text) {
  "$plain text";
  "A passage with the gaps closed up that punctuation had opened either side of it - no space left in front of a comma or a full stop, and none left behind an opening bracket or quotation mark.";
  "IT IS FOR TEXT THAT WAS BUILT UP OUT OF PIECES, NOT FOR TEXT SOMEBODY TYPED. Where a passage is assembled by taking marking out from between words, every mark removed leaves the gap it was standing in, and the marks fall between the words and their punctuation as readily as between two words. A translation published with each of its words aligned to the Hebrew is marked at every single word, so its punctuation comes out standing on its own with a space either side of it - said , “ These people - which reads as a fault in the app rather than as a translation.";
  "The two lists are separate because punctuation is not symmetrical. A comma closes up leftwards and an opening bracket closes up rightwards, and a reader shown either one done the other way round would see the mistake at once.";
  "Only the marks that are unambiguous are listed. A straight double quote opens and closes with the same character, so no rule about the space beside it can be right both times, and it is left exactly as it was rather than being half repaired.";
  arguments_assert(arguments, 1);
  let closing = /\s+([,.;:!?)\]}”’»…])/g;
  let tightened = text.replace(closing, "$1");
  let opening = /([“(\[{«])\s+/g;
  let v = tightened.replace(opening, "$1");
  return v;
}
