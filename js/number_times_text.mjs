import { text_combine } from "./text_combine.mjs";

export function number_times_text(count) {
  "How many times something happens, written the way an English sentence says it: once, twice, three times, and so on.";
  "Prose written for somebody who has never met a grammatical term should not be handing them numerals in the middle of a sentence. Past twelve a numeral reads better than a long spelled-out word, which is where English itself changes over.";
  let words = {
    0: "never",
    1: "once",
    2: "twice",
    3: "three times",
    4: "four times",
    5: "five times",
    6: "six times",
    7: "seven times",
    8: "eight times",
    9: "nine times",
    10: "ten times",
    11: "eleven times",
    12: "twelve times",
  };
  let word = words[count];
  if (word) {
    return word;
  }
  let counted = text_combine(String(count), " times");
  return counted;
}
