import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function text_script_language_codes(text) {
  "$plain text";
  "The bible language codes the alphabets in text point to, most likely first - a name written in Telugu letters gives tel, one in Arabic letters gives ur, then arb, fas and the others written that way. Answers an empty list for Latin letters, which say nothing about a language.";
  "★ A GUESS, NOT A CHOICE: an alphabet narrows the languages, and a person may read none of them, so what this answers is only ever offered or checked, never kept as theirs.";
  "★ KANA BEFORE HAN: Japanese is written with Chinese characters too, so any kana makes it Japanese; Chinese characters alone stay Chinese.";
  "Only alphabets some bible here is written in are listed, and the codes are the ones a next-passage link takes.";
  let scripts = [
    ["Telugu", ["tel"]],
    ["Tamil", ["tam"]],
    ["Gujarati", ["gu"]],
    ["Kannada", ["kn"]],
    ["Malayalam", ["mal"]],
    ["Gurmukhi", ["pa"]],
    ["Oriya", ["or"]],
    ["Bengali", ["ben", "asm"]],
    ["Devanagari", ["hin", "mr", "npi"]],
    ["Arabic", ["ur", "arb", "fas", "ckb", "uig"]],
    ["Hebrew", ["heb"]],
    ["Cyrillic", ["rus", "ukr", "srp"]],
    ["Ethiopic", ["am"]],
    ["Myanmar", ["mya"]],
    ["Hangul", ["kor"]],
    ["Hiragana", ["jpn"]],
    ["Katakana", ["jpn"]],
    ["Han", ["zh"]],
  ];
  let kana = /[\p{Script=Hiragana}\p{Script=Katakana}]/u.test(text);
  let codes = [];
  for (let [script, list] of scripts) {
    if (equal(script, "Han") && kana) {
      continue;
    }
    let pattern = new RegExp("\\p{Script=" + script + "}", "u");
    let b = pattern.test(text);
    if (not(b)) {
      continue;
    }
    for (let code of list) {
      let b2 = codes.includes(code);
      if (not(b2)) {
        codes.push(code);
      }
    }
  }
  return codes;
}
