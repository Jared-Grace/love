import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
export function number_word_english_or_null(number) {
  "$plain number";
  "The ordinary English word for a small whole number, or nothing where the number is outside the handful a sentence written for a reader would ever spell out.";
  "IT ANSWERS NOTHING RATHER THAN GUESSING, because a little way up the ladder the answer stops being one word, and a caller handed back two words where it expected one would drop them into a sentence that no longer reads. A caller wanting a bigger number wants the digits, which is a different question and already answered elsewhere.";
  "The list begins at nothing rather than at one, so a count of none has a word too - a sentence saying a page offers no passages at all is a sentence somebody may one day have to write.";
  "IT IS FOR CHECKING A SENTENCE AGAINST A COUNT, not for composing one. A card promising nine passages and a list naming ten is a promise made to a stranger before they have opened anything, and the only way to catch it is to turn the count into the word the sentence would have used.";
  arguments_assert(arguments, 1);
  let words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
  ];
  let word = property_get_or_null(words, number);
  return word;
}
