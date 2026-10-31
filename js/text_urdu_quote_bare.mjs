import { arguments_assert } from "./arguments_assert.mjs";
export function text_urdu_quote_bare(t) {
  "The same Urdu text with everything taken off that two faithful copies of one sentence are free to differ in, so a quote and the verse it came from can be compared word for word.";
  "URDU WRITES ITS SHORT VOWELS AS MARKS ABOVE AND BELOW THE LETTERS, AND MOST TEXT LEAVES THEM OFF. The store writes them on almost every word to help a learner sound it out, and the Bible on the disk writes almost none, so the same words compare unequal letter for letter until the marks are gone. The Bible also sets a small mark after many names, which goes the same way.";
  "Quotation marks are dropped and commas become spaces, because a writer quoting part of a verse chooses where the quote starts and stops and whether to keep the comma in the middle; neither choice changes which words were quoted.";
  arguments_assert(arguments, 1);
  let marks = /[ً-ْٰٕٔؔ]/g;
  let r = t
    .replace(marks, "")
    .replace(/[”“"«»]/g, "")
    .replace(/[،,]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return r;
}
