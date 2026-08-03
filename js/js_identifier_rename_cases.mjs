import { text_frozen } from "./text_frozen.mjs";
export function js_identifier_rename_cases() {
  "Pieces of code, a name to move and the name to move it to, each paired with what the code should read as afterwards";
  "Every rename in the repo comes through here, so what this pass touches is what a rename touches. Renaming a function moves its name in every file that mentions it, and a file mentioning it as the word after a dot was having that word moved too. The object being asked then answers nothing rather than complaining, so the file goes on running and quietly does the wrong thing";
  ("Two of the cases are the shape that had actually gone wrong. A function here was named the same word as a method somebody else owns - Math.abs, and console.log in seventy-two files - so moving that function's name rewrote a word this repo does not own, and the object then answered nothing rather than complaining");
  ("Those two cases are written with words this repo owns no function by, though the fault was found with words it does. Nothing is lost by that: the pass being tested does not know which words name functions here, so a word after a dot is left alone or is not, whatever it is spelled. What is gained is that the words below address only what they are, so no word here is frozen in one place while standing as a reference in another - which is a contradiction a rename can only half obey, and one the repo refuses to record any more of");
  ("Each piece of code is frozen text. The words inside look like names, and the pass that turns a mentioned name into a reference would rewrite them into something the case no longer tests");
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
        "export function f(n) {\n  let a = Math.trunc(n);\n  return a;\n}\n",
      ),
      from: text_frozen("trunc"),
      to: text_frozen("truncate"),
      renamed: text_frozen(
        "export function f(n) {\n  let a = Math.trunc(n);\n  return a;\n}\n",
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
