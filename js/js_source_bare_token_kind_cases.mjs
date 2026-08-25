import { text_frozen } from "./text_frozen.mjs";
export function js_source_bare_token_kind_cases() {
  "Written-out files and one bare word out of each, pinning what the file says that word was standing as - a value, program, or still neither.";
  "THE ONE ANSWER NOBODY WOULD NOTICE MISSING IS PROGRAM. A word standing alone is nearly always an entry of a list in this repo, so a reading that only ever answered value would agree with almost every commit it was pointed at and still be broken. Half of these cases exist to make the program answer fire, because a branch that never runs is a split that is not really being made.";
  "NEITHER IS WRITTEN DOWN AS AN ANSWER AND NOT AS A GAP. Standing in both settings, standing in no setting, and coming out of a file that will not parse are three different reasons to stay undecided, and each one is a case here, because the reading is allowed to be unsure and is not allowed to be unsure quietly.";
  "A NAME WITH A VALUE AFTER IT IS NOT THE SAME SHAPE AS A NAME ON ITS OWN. A record written as a name and a colon holds the name as a key, which is neither an entry nor an argument, and the case saying so is what stops the reading treating every mention of a word in a record as a value chosen.";
  let cases = [
    {
      name: "an entry of a list is a value",
      code: text_frozen("let names = [\n  cross,\n  pray,\n  dye,\n];"),
      bare: text_frozen("pray,"),
      kind: text_frozen("data"),
    },
    {
      name: "the last entry of a list is a value too, with no comma to go by",
      code: text_frozen("let names = [\n  cross,\n  pray\n];"),
      bare: text_frozen("pray"),
      kind: text_frozen("data"),
    },
    {
      name: "a number standing as an entry is a value",
      code: text_frozen("let counts = [\n  1,\n  7,\n];"),
      bare: text_frozen("7,"),
      kind: text_frozen("data"),
    },
    {
      name: "a part of a record written under its own name is a value",
      code: text_frozen("let r = {\n  cross,\n  pray,\n};"),
      bare: text_frozen("pray,"),
      kind: text_frozen("data"),
    },
    {
      name: "an argument of a call broken over several lines is program",
      code: text_frozen("let r = combine(\n  cross,\n  pray,\n);"),
      bare: text_frozen("pray,"),
      kind: text_frozen("code"),
    },
    {
      name: "an argument of a call made with new is program",
      code: text_frozen("let r = new Reader(\n  pray,\n);"),
      bare: text_frozen("pray,"),
      kind: text_frozen("code"),
    },
    {
      name: "a parameter of a function written out over several lines is program",
      code: text_frozen("function ask(\n  cross,\n  pray,\n) {\n  return cross;\n}"),
      bare: text_frozen("pray,"),
      kind: text_frozen("code"),
    },
    {
      name: "a parameter of a lambda is program as well",
      code: text_frozen("let ask = (\n  cross,\n  pray,\n) => cross;"),
      bare: text_frozen("pray,"),
      kind: text_frozen("code"),
    },
    {
      name: "a name standing in both settings at once stays undecided rather than being guessed at",
      code: text_frozen("let names = [\n  pray,\n];\nlet r = combine(\n  pray,\n);"),
      bare: text_frozen("pray,"),
      kind: text_frozen("name alone"),
    },
    {
      name: "a name the file no longer holds anywhere stays undecided, which is what a line taken out looks like",
      code: text_frozen("let names = [\n  cross,\n];"),
      bare: text_frozen("pray,"),
      kind: text_frozen("name alone"),
    },
    {
      name: "a name written as a key with its value after it is neither an entry nor an argument",
      code: text_frozen('let r = {\n  pray: "a wording",\n};'),
      bare: text_frozen("pray,"),
      kind: text_frozen("name alone"),
    },
    {
      name: "a file that will not parse cannot be asked and says so",
      code: text_frozen("let names = [\n  pray,\n"),
      bare: text_frozen("pray,"),
      kind: text_frozen("name alone"),
    },
  ];
  return cases;
}
