import { text_frozen } from "./text_frozen.mjs";
export function js_code_literal_key_only_cases() {
  "Files written out small, each one saying whether every place it writes a given";
  "word is a place where a field is named rather than a value given.";
  "The false cases are the ones that earn their keep, and two of them are the";
  "whole reason this is judged by where the word sits rather than by which call it";
  "is near. A word handed third to a field call is the value being stored, not the";
  "field being named; a word standing after the colon of an entry is the same";
  "mistake one shape over. A reader that asked only which function was being";
  "called would answer true to both, and would then quietly withhold a repeated";
  "constant that genuinely wanted merging.";
  "The last case is the one that keeps the whole thing honest: a file that names a";
  "field in one line and carries the value in another is not a file of field";
  "names, so it stays on offer.";
  "Every name written inside a case is held as fixed text, because the pass that";
  "canonicalizes this file would otherwise read a real one as a reference and";
  "change what the case says.";
  let cases = [
    {
      code: text_frozen('let held = record["chosen"];'),
      literal: "chosen",
      key_only: true,
      why: "a word inside the brackets of a lookup is the field being looked up",
    },
    {
      code: text_frozen('property_set(record, "chosen", true);'),
      literal: "chosen",
      key_only: true,
      why: "handed second to a field call, which is where this repo writes the field name",
    },
    {
      code: text_frozen('let held = property_get(record, "chosen");'),
      literal: "chosen",
      key_only: true,
      why: "the reading half of the same shape",
    },
    {
      code: text_frozen('let record = { "chosen": 1 };'),
      literal: "chosen",
      key_only: true,
      why: "a word standing as the key of an entry names a field as plainly as the brackets do",
    },
    {
      code: text_frozen('property_set(record, "phase", "chosen");'),
      literal: "chosen",
      key_only: false,
      why: "handed third to a field call, so it is the value being stored - the case that fails a reader which asks only which function is being called",
    },
    {
      code: text_frozen('let record = { phase: "chosen" };'),
      literal: "chosen",
      key_only: false,
      why: "after the colon rather than before it, so the entry names something else and this is what it holds",
    },
    {
      code: text_frozen('let held = "chosen";'),
      literal: "chosen",
      key_only: false,
      why: "bound to a name, which is the plainest way a word can be a value",
    },
    {
      code: text_frozen('shown(record, "chosen");'),
      literal: "chosen",
      key_only: false,
      why: "second to a call, but not one of the field calls, so nothing here says it is a field name",
    },
    {
      code: text_frozen('("the word chosen appears in this sentence");'),
      literal: "the word chosen appears in this sentence",
      key_only: false,
      why: "a file that only mentions the word in its own account of itself has no site at all, and no sites is not all sites",
    },
    {
      code: text_frozen(
        'property_set(record, "chosen", 1);\nlet held = "chosen";',
      ),
      literal: "chosen",
      key_only: false,
      why: "one mention names a field and the other carries a value, so the file is not one this should withhold",
    },
  ];
  return cases;
}
