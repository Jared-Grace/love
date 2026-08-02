import { text_frozen } from "./text_frozen.mjs";
export function js_code_getter_literal_cases() {
  "Files written out small, each one saying which written value the function in it";
  "exists to return, or nothing when it exists to return something else.";
  "The empty answers are the ones that earn their keep, and one of them is why";
  "this corpus was written at all. A word wrapped in the do-not-change marker used";
  "to count as the function's value wherever in the body it sat, which read three";
  "functions that freeze a folder's name, hand it to the call that builds a path,";
  "and return the path as though each returned the bare name. The duplicate report";
  "standing on that answer then offered to put a whole path where a name goes.";
  "The three shapes that do answer are kept beside it, because the cheap way to";
  "make the wrong answer go away is to stop reading frozen words at all - and that";
  "would take every genuinely frozen constant out of the report silently.";
  "Every name written inside a case is held as fixed text, because the pass that";
  "canonicalizes this file would otherwise read a real one as a reference and";
  "change what the case says.";
  let cases = [
    {
      code: text_frozen('export function f() {\n  return "chosen";\n}\n'),
      f_name: text_frozen("f"),
      literal: "chosen",
      why: "handed straight back, which is the plainest getter there is",
    },
    {
      code: text_frozen(
        'export function f() {\n  let v = "chosen";\n  return v;\n}\n',
      ),
      f_name: text_frozen("f"),
      literal: "chosen",
      why: "given a name and then handed back, which is what the canonicalizing pass writes",
    },
    {
      code: text_frozen(
        'export function f() {\n  return text_frozen("chosen");\n}\n',
      ),
      f_name: text_frozen("f"),
      literal: "chosen",
      why: "a frozen word handed straight back is still the answer, and a frozen constant is exactly the kind most worth watching",
    },
    {
      code: text_frozen(
        'export function f() {\n  let v = text_frozen("chosen");\n  return v;\n}\n',
      ),
      f_name: text_frozen("f"),
      literal: "chosen",
      why: "a frozen word given a name and handed back - the shape a reader tempted to stop trusting frozen words altogether would lose",
    },
    {
      code: text_frozen(
        'export function f() {\n  let copy_name = text_frozen("chosen");\n  let folder = path_named(copy_name);\n  return folder;\n}\n',
      ),
      f_name: text_frozen("f"),
      literal: "",
      why: "the frozen word is an argument and the answer is what the call built out of it, so this function names a path and not a word - the case that found the mistake",
    },
    {
      code: text_frozen(
        'export function f() {\n  let held = list_of("chosen");\n  return held;\n}\n',
      ),
      f_name: text_frozen("f"),
      literal: "",
      why: "the same mistake one wrapper off, and it was already answered correctly - which is why the frozen branch reading differently was easy to miss",
    },
    {
      code: text_frozen(
        'export function f() {\n  let cases = [text_frozen("chosen"), text_frozen("other")];\n  return cases;\n}\n',
      ),
      f_name: text_frozen("f"),
      literal: "",
      why: "a body freezing several words is a corpus of written-out cases, and reading the first of them would file the whole corpus under whichever word happens to come first",
    },
    {
      code: text_frozen('export function g() {\n  return "chosen";\n}\n'),
      f_name: text_frozen("f"),
      literal: "",
      why: "the file holds no function by the name asked about, so there is nothing here to answer for",
    },
  ];
  return cases;
}
