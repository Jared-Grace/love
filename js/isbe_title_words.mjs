import { greater_than_equal } from "./greater_than_equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
export function isbe_title_words(title) {
  "The words a verse would spell for an International Standard Bible Encyclopedia title, each once: Merom, Waters Of is the waters of Merom, Bruise; Bruised is Bruise and Bruised.";
  "$plain title";
  "the title is an article's name as its own page prints it; it is read for words, and nothing in it runs.";
  "A SEMICOLON SEPARATES TWO WORDS THE ARTICLE IS ABOUT, so each gets its own row. A NUMBER OR WORD IN BRACKETS only tells two articles of one name apart - Sin (1), Lot (2) - and no verse prints it.";
  "A TITLE TURNED ROUND AT A COMMA IS TURNED BACK the way a verse says it: Merom, Waters Of is waters of Merom, Expectation, Messianic is Messianic Expectation. A number after the comma - God, 1 - is dropped like a bracket.";
  "A HYPHEN IS A SPACE, because a dash splits a verse word in two before it is looked up; a possessive is its name, the way a tapped word is read.";
  let plain = title.replace(/\s*\([^)]*\)/g, "");
  let r = [];
  for (let part of plain.split(";")) {
    let comma = part.indexOf(",");
    let phrase = part;
    if (greater_than_equal(comma, 0)) {
      let head = part.slice(0, comma).trim();
      let tail = part.slice(comma + 1).trim();
      phrase = /^\d+$/.test(tail) ? head : tail + " " + head;
    }
    let spaced = phrase.replaceAll("-", " ").replace(/['’]s\b/g, "");
    function lambda(w) {
      let g = greater_than(w.length, 0);
      return g;
    }
    let words = spaced.split(/\s+/).filter(lambda);
    let small = /^(of|the|and|in|to|a|an|on|at|for|by|from|with)$/i;
    let several = greater_than(words.length, 1);
    function lambda2(w) {
      let r2 = several && small.test(w) ? w.toLowerCase() : w;
      return r2;
    }
    let cased = words.map(lambda2);
    let key = cased.join(" ");
    let wanted =
      greater_than(key.length, 0) &&
      not(/^\d+$/.test(key)) &&
      not(r.includes(key));
    if (wanted) {
      r.push(key);
    }
  }
  return r;
}
