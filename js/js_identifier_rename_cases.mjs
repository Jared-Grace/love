import { fn_name } from "./fn_name.mjs";
import { text_frozen } from "./text_frozen.mjs";
export function js_identifier_rename_cases() {
  "Pieces of code, a name to move and the name to move it to, each paired with what the code should read as afterwards";
  "Every rename in the repo comes through here, so what this pass touches is what a rename touches. Renaming a function moves its name in every file that mentions it, and a file mentioning it as the word after a dot was having that word moved too. The object being asked then answers nothing rather than complaining, so the file goes on running and quietly does the wrong thing";
  ("Two of the cases are the ones that had actually gone wrong. ",
    text_frozen("abs"),
    " wraps Math.abs and ",
    text_frozen("log"),
    " shares its word with console.log in seventy-two files, so moving either name rewrote the word this repo does not own");
  ("Each piece of code is frozen text. The words inside are ordinary repo names, and the pass that turns a mentioned name into a reference would rewrite them into something the case no longer tests");
  ("The two words above are frozen for the same reason the code below them is, though they are only being talked about. Each of them is what a case is made of, and a case is about the word it was written with; spelled as a reference, a rename of either function would move the word here and leave it standing in the case underneath, so the sentence saying which word went wrong would name a different one than the case testing it");
  let cases = [
    {
      name: "a value the file reads takes the new name wherever it is read",
      code: text_frozen(
        "export function f(width) {\n  let a = width;\n  return a;\n}\n",
      ),
      from: text_frozen("width"),
      to: text_frozen("w"),
      renamed: text_frozen(
        "export function f(w) {\n  let a = w;\n  return a;\n}\n",
      ),
    },
    {
      name: "a word after a dot belongs to whatever is being asked and stays where it is",
      code: text_frozen(
        "export function f(n) {\n  let a = Math.abs(n);\n  return a;\n}\n",
      ),
      from: text_frozen("abs"),
      to: text_frozen("absolute"),
      renamed: text_frozen(
        "export function f(n) {\n  let a = Math.abs(n);\n  return a;\n}\n",
      ),
    },
    {
      name: "the same word read as a value and spelled after a dot, where only the value moves",
      code: text_frozen(
        "export function f(log) {\n  console.log(log);\n  return log;\n}\n",
      ),
      from: text_frozen("log"),
      to: text_frozen("said"),
      renamed: text_frozen(
        "export function f(said) {\n  console.log(said);\n  return said;\n}\n",
      ),
    },
    {
      name: "a key written out in full stays and the value beside it moves",
      code: text_frozen(
        "export function f(width) {\n  let v = { width: width };\n  return v;\n}\n",
      ),
      from: text_frozen("width"),
      to: text_frozen("w"),
      renamed: text_frozen(
        "export function f(w) {\n  let v = {\n    width: w\n  };\n  return v;\n}\n",
      ),
    },
    {
      name: "a short entry is written out in full first, so the key keeps the old word and only the value moves",
      code: text_frozen(
        "export function f(width) {\n  let v = { width };\n  return v;\n}\n",
      ),
      from: text_frozen("width"),
      to: text_frozen("w"),
      renamed: text_frozen(
        "export function f(w) {\n  let v = {\n    width: w\n  };\n  return v;\n}\n",
      ),
    },
  ];
  return cases;
}
