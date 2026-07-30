import { text_frozen } from "./text_frozen.mjs";
export function js_free_names_cases() {
  "Small written-out files, each saying which names in it are bound by nothing the file";
  "itself supplies - the names a runtime error would name if the file ran as written.";
  "This reading sits under more of the repo than any other one of its kind. Two gates";
  "ask it, the command that repairs a file's imports asks it, and the pass that";
  "canonicalizes every edited file asks it to decide which imports to add. All of them";
  "pass when it answers nothing. So a reading that had quietly gone silent would not";
  "break anything visibly: the gates would go green, and every file written from then on";
  "would be committed with its imports missing by the very pass whose job is to add them.";
  "The cases therefore carry both directions. Half of them must yield a name, so a";
  "reading that finds nothing fails here first; half must yield none, so a reading that";
  "calls everything free fails too.";
  "Each file is held as fixed text. The names written inside are ordinary repo names, and";
  "the canonicalizing pass would otherwise rewrite them into references and change what";
  "the case says.";
  let a = text_frozen("list_add");
  let a2 = text_frozen("list_add");
  let a3 = text_frozen("list_add");
  let b = text_frozen("list_map");
  let c = text_frozen("property_get");
  let cases = [
    {
      name: "a repo function called, and nothing imports it",
      code: text_frozen(
        "export function f() {\n  return list_add([], 1);\n}\n",
      ),
      free: [a],
    },
    {
      name: "a name read at the top of the file, outside any function",
      code: text_frozen(
        "let value = list_add([], 1);\nexport function f() {\n  return value;\n}\n",
      ),
      free: [a2],
    },
    {
      name: "three free names at once",
      code: text_frozen(
        "export function f() {\n  return list_add(list_map([], property_get), 1);\n}\n",
      ),
      free: [a3, b, c],
    },
    {
      name: "the repo's own one-name-per-line relative import",
      code: text_frozen(
        'import { list_add } from "./list_add.mjs";\nexport function f() {\n  return list_add([], 1);\n}\n',
      ),
      free: [],
    },
    {
      name: "the whole module bound under one name",
      code: text_frozen(
        'import * as list_add from "./list_add.mjs";\nexport function f() {\n  return list_add.name;\n}\n',
      ),
      free: [],
    },
    {
      name: "the default binding of another file",
      code: text_frozen(
        'import list_add from "./list_add.mjs";\nexport function f() {\n  return list_add([], 1);\n}\n',
      ),
      free: [],
    },
    {
      name: "the file's own function calling itself",
      code: text_frozen("export function f() {\n  return f();\n}\n"),
      free: [],
    },
    {
      name: "a name the file declares for itself",
      code: text_frozen(
        "export function f() {\n  let total = 1;\n  return total;\n}\n",
      ),
      free: [],
    },
    {
      name: "a function written inside another, and its parameter",
      code: text_frozen(
        "export function f() {\n  function inner(total) {\n    return total;\n  }\n  return inner;\n}\n",
      ),
      free: [],
    },
    {
      name: "names the language itself supplies",
      code: text_frozen(
        "export function f() {\n  return JSON.stringify(Math.PI);\n}\n",
      ),
      free: [],
    },
    {
      name: "a word standing on the right of a dot",
      code: text_frozen(
        "export function f(record) {\n  return record.list_add;\n}\n",
      ),
      free: [],
    },
    {
      name: "a word used as a key in an object",
      code: text_frozen(
        "export function f() {\n  return { list_add: 1 };\n}\n",
      ),
      free: [],
    },
    {
      name: "the error a catch clause names, read inside the clause",
      code: text_frozen(
        "export function f(lambda) {\n  try {\n    return lambda();\n  } catch (e) {\n    return e;\n  }\n}\n",
      ),
      free: [],
    },
    {
      name: "a name unpacked out of an object",
      code: text_frozen(
        "export function f(o) {\n  let { part } = o;\n  return part;\n}\n",
      ),
      free: [],
    },
    {
      name: "a name unpacked out of a list",
      code: text_frozen(
        "export function f(o) {\n  let [first] = o;\n  return first;\n}\n",
      ),
      free: [],
    },
    {
      name: "a class this file declares",
      code: text_frozen(
        "class Thing {}\nexport function f() {\n  return Thing;\n}\n",
      ),
      free: [],
    },
    {
      name: "a caught error named after a repo function is bound here, so no import is wanted",
      code: text_frozen(
        "export function f(lambda) {\n  try {\n    return lambda();\n  } catch (list_add) {\n    return list_add;\n  }\n}\n",
      ),
      free: [],
    },
  ];
  return cases;
}
