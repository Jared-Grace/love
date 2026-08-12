import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { bible_interlinear_original_keys_find } from "./bible_interlinear_original_keys_find.mjs";
import { bible_interlinear_json_path } from "./bible_interlinear_json_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { text_trim } from "./text_trim.mjs";
("Which editorial marks actually occur in the interlinear's marked base-text column, and");
("how many words each one covers - counted off the data rather than read off the header.");
("The header names seven editions, but a header is a claim about the column and the");
("counts are the column itself; a mark that never occurs would have us writing a filter");
("for nothing, and one that occurs but is unnamed would have us shipping it unnoticed.");
("Nothing here is matched against a hand-typed mark. Typing them is what this function");
("exists to avoid: the brace, chevron and guillemet characters have near-identical twins,");
("a typed copy silently matches none of them, and a mark that matches nothing does not");
("read as an error - it reads as a word with no mark on it, which is the wrong answer in");
("the one direction that ships. So a mark is anything in the word that is not a letter,");
("counting Hebrew's vowel points and cantillation as part of the word, and the marks are");
("grouped by what they turn out to be. That found an undocumented");
("trailing asterisk the header never mentions, and counted NE's chevrons as unmarked.");
export async function bible_interlinear_sigla_report() {
  let path = bible_interlinear_json_path();
  let rows = await file_read_json(path);
  let keys = bible_interlinear_original_keys_find(rows);
  let marked_key = keys.marked;
  let plain_key = keys.plain;
  let letter = /[\p{L}\p{M}]/u;
  let counts = {};
  let samples = {};
  let words_total = 0;
  let words_marked = 0;
  function text_of(row, key) {
    let value = row[key];
    let missing = equal(value, undefined) || equal(value, null);
    let message = String(value);
    let r = missing ? "" : text_trim(message);
    return r;
  }
  function mark_of(word) {
    let characters = Array.from(word);
    function letter_not_is(character) {
      let is_letter = letter.test(character);
      let n = not(is_letter);
      return n;
    }
    let marks = characters.filter(letter_not_is);
    let joined = marks.join("");
    return joined;
  }
  function row_read(row) {
    let marked = text_of(row, marked_key);
    if (equal(marked, "")) {
      return;
    }
    words_total = words_total + 1;
    let mark = mark_of(marked);
    if (equal(mark, "")) {
      return;
    }
    words_marked = words_marked + 1;
    function code_of(character) {
      let point = character.codePointAt(0).toString(16);
      let r2 = "U+" + point.toUpperCase();
      return r2;
    }
    let codepoints = Array.from(mark).map(code_of).join(" ");
    counts[codepoints] = (counts[codepoints] || 0) + 1;
    let seen = samples[codepoints] || [];
    if (less_than(seen.length, 3)) {
      seen.push({
        marked,
        plain: text_of(row, plain_key),
        mark,
      });
      samples[codepoints] = seen;
    }
  }
  rows.forEach(row_read);
  let report = {
    keys,
    words_total,
    words_marked,
    counts,
    samples,
  };
  return report;
}
