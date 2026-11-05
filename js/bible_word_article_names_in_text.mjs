import { equal } from "./equal.mjs";
export function bible_word_article_names_in_text(text) {
  "The names a piece of writing uses: every word it prints with a capital where a sentence does not start, each once.";
  "$plain text";
  "the text is the words of an article from another site; it is read for words, and nothing in it runs.";
  "A CAPITAL AT THE START OF A SENTENCE SAYS NOTHING, so The and Then are not names just because a sentence opened with them.";
  "A WORD IN QUOTES COUNTS: Easton's writes Revised Version \"Gerasenes\", and that is the word a reader taps.";
  "A possessive is its name, the same way a tapped word is read: David's is David.";
  let r = [];
  for (let match of text.matchAll(/(?<![\p{L}\p{N}’'-])\p{Lu}[\p{L}’'-]*/gu)) {
    let before = text.slice(0, match.index).trimEnd();
    let opens = equal(before.length, 0) || /[.!?]["”’')\]]*$/.test(before);
    let name = match[0].replace(/['’]s?$/, "");
    if (equal(opens, false) && equal(r.includes(name), false)) {
      r.push(name);
    }
  }
  return r;
}
