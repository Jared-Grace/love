import { text_frozen } from "./text_frozen.mjs";
export function js_identifier_rename_references_cases() {
  "Small written-out files, each with what replaces the name add and the file that comes out, leaving every place the word only names a property, a key or a method alone.";
  "The first case is the one that broke: a rename of a local add reached the word right of a dot and turned a set's held.add into held.adder.";
  "The replacement may be a whole expression rather than a name, because the command typed by hand has always allowed that; the last case keeps it allowed.";
  "Each file is held as fixed text, so a later rename of a repo function cannot reach into it.";
  let cases = [
    {
      name: "the word right of a dot is the property of the thing on its left and keeps its name",
      replacement: "adder",
      code: text_frozen(
        "export function f(add) {\n  let held = new Set();\n  held.add(add);\n  return add;\n}\n",
      ),
      after: text_frozen(
        "export function f(adder) {\n  let held = new Set();\n  held.add(adder);\n  return adder;\n}\n",
      ),
    },
    {
      name: "a key written out in full keeps its word while the value it reads is renamed",
      replacement: "adder",
      code: text_frozen(
        "export function f(add) {\n  return { add: add, add2: 1 };\n}\n",
      ),
      after: text_frozen(
        "export function f(adder) {\n  return {\n    add: adder,\n    add2: 1\n  };\n}\n",
      ),
    },
    {
      name: "a pair written the short way is written out, so the key a reader asks for keeps its word",
      replacement: "adder",
      code: text_frozen("export function f(add) {\n  return { add };\n}\n"),
      after: text_frozen(
        "export function f(adder) {\n  return {\n    add: adder\n  };\n}\n",
      ),
    },
    {
      name: "a name inside brackets really is read, so it is renamed",
      replacement: "adder",
      code: text_frozen(
        "export function f(add, record) {\n  return record[add];\n}\n",
      ),
      after: text_frozen(
        "export function f(adder, record) {\n  return record[adder];\n}\n",
      ),
    },
    {
      name: "a declared helper is renamed with its uses, and a property written to beside it is not",
      replacement: "adder",
      code: text_frozen(
        "export function f() {\n  function add(list) {\n    list.add = 1;\n  }\n  return add;\n}\n",
      ),
      after: text_frozen(
        "export function f() {\n  function adder(list) {\n    list.add = 1;\n  }\n  return adder;\n}\n",
      ),
    },
    {
      name: "a name read is replaced by a whole expression, and the same word right of a dot is still left alone",
      replacement: "ops.adder",
      code: text_frozen(
        "export function f(list) {\n  return add(list.add);\n}\n",
      ),
      after: text_frozen(
        "export function f(list) {\n  return ops.adder(list.add);\n}\n",
      ),
    },
  ];
  return cases;
}
