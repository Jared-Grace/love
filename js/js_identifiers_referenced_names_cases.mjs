import { text_frozen } from "./text_frozen.mjs";
export function js_identifiers_referenced_names_cases() {
  "Small written-out files, each saying which names in it are referenced as values rather than merely written down as the name of something.";
  "This is the side of the free-name question that everything else is subtracted from, so a";
  "name it fails to see can never come out free, and the pass that repairs imports will never";
  "add the import that name wanted. It once counted the word right of a dot, which is how a";
  "line reading console.log pulled in an unused import of this repo's own log; the cases below";
  "are the shapes that distinction turns on.";
  "Every case names its own function, so the answers all begin with that name - a declared";
  "name is a reference here, and it is the declared-names reading that takes it back out";
  "later. Splitting the question that way is the point: this one says what is mentioned, and";
  "nothing about what is bound.";
  "Each file is held as fixed text, and so are the names expected back. Left as references";
  "they would follow a rename while the frozen file beside them kept the old word.";
  let a = text_frozen("list_add");
  let a2 = text_frozen("list_add");
  let a3 = text_frozen("list_add");
  let a4 = text_frozen("list_add");
  let cases = [
    {
      name: "a name called as a function",
      code: text_frozen(
        "export function f() {\n  return list_add([], 1);\n}\n",
      ),
      referenced: ["f", a],
    },
    {
      name: "the word right of a dot names a property and references nothing",
      code: text_frozen(
        "export function f(record) {\n  return record.list_add;\n}\n",
      ),
      referenced: ["f", "record"],
    },
    {
      name: "a word used as a key in an object names the key and references nothing",
      code: text_frozen(
        "export function f() {\n  return { list_add: 1 };\n}\n",
      ),
      referenced: ["f"],
    },
    {
      name: "the short way of writing a pair really does reference the name",
      code: text_frozen(
        "export function f(list_add) {\n  return { list_add };\n}\n",
      ),
      referenced: ["f", a2],
    },
    {
      name: "a property reached through brackets really does reference the name in them",
      code: text_frozen(
        "export function f(record, list_add) {\n  return record[list_add];\n}\n",
      ),
      referenced: ["f", "record", a3],
    },
    {
      name: "the module's own url is one word the language supplies, not two names",
      code: text_frozen(
        "export function f() {\n  return import.meta.url;\n}\n",
      ),
      referenced: ["f"],
    },
    {
      name: "a name mentioned twice is answered once",
      code: text_frozen(
        "export function f() {\n  return list_add(list_add([], 1), 2);\n}\n",
      ),
      referenced: ["f", a4],
    },
    {
      name: "a name the file declares is still a mention - what binds it is another reading's question",
      code: text_frozen(
        "export function f() {\n  let total = 1;\n  return total;\n}\n",
      ),
      referenced: ["f", "total"],
    },
    {
      name: "a method's name sits where a key sits and is text just the same",
      code: text_frozen(
        "class Thing {\n  list_add() {\n    return 1;\n  }\n}\nexport function f() {\n  return Thing;\n}\n",
      ),
      referenced: ["Thing", "f"],
    },
    {
      name: "a property written to, rather than read, is still only a name",
      code: text_frozen(
        "export function f(record) {\n  record.list_add = 1;\n}\n",
      ),
      referenced: ["f", "record"],
    },
  ];
  return cases;
}
