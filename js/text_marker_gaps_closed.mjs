import { arguments_assert } from "./arguments_assert.mjs";
import { text_gap_mark } from "./text_gap_mark.mjs";
export function text_marker_gaps_closed(text) {
  arguments_assert(arguments, 1);
  ("$plain text");
  ("A passage whose removed marks are still standing in it as gap marks, with each of those gaps decided: closed up where the marking had wedged itself between a word and its own punctuation, and otherwise turned back into the single space that keeps two words apart.");
  ("ONLY THE GAPS THE MARKING MADE ARE TOUCHED, and that is the whole point of doing it here rather than on the finished string. A space in front of a comma has to go when the marking put it there and has to stay when the translator wrote it; a passage read as one flat string cannot tell those apart, so a rule written for the flat string has to guess, and it guesses the same way every time. It ate the space after the closing quotation mark in ninety verses of one translation, because that translation opens with the mark English closes with.");
  ("The gap around an apostrophe standing inside a word is decided first and closed on both sides. A translation aligned to the Hebrew marks every word, so the s of a possessive is marked apart from the name it belongs to and the apostrophe is marked apart from both - and the ordinary rule, which knows an apostrophe only as something a quotation ends with, closes the gap in front of it and leaves the one behind it. Two thousand seven hundred and seventy-eight verses read Solomon apostrophe space s. Letters on both sides of it and a gap of the marking's own making on both sides is what says it is inside a word rather than at the end of a speech.");
  ("Then the gaps in front of the punctuation that closes, and the gaps behind the punctuation that opens. The two lists are separate because punctuation is not symmetrical - a comma closes up leftwards and an opening bracket closes up rightwards - and only the marks that are unambiguous are listed. A straight double quote opens and closes with the same character, so no rule about the space beside it can be right both times, and it is left exactly as it was rather than half repaired.");
  ("Every gap left over becomes one space. A mark falls between two words as readily as between a word and its comma, and joining what it separated would run the two words into one.");
  let g = text_gap_mark();
  let gap = "[\\s" + g + "]*" + g + "[\\s" + g + "]*";
  let inside_word = new RegExp(
    "([A-Za-z])" + gap + "([’'])" + gap + "([A-Za-z])",
    "g",
  );
  let unsplit = text.replace(inside_word, "$1$2$3");
  let before_closing = new RegExp(gap + "(?=[,.;:!?)\\]}”’»…])", "g");
  let leftwards = unsplit.replace(before_closing, "");
  let after_opening = new RegExp("(?<=[“(\\[{«])" + gap, "g");
  let rightwards = leftwards.replace(after_opening, "");
  let remaining = new RegExp(gap, "g");
  let spaced = rightwards.replace(remaining, " ");
  return spaced;
}
