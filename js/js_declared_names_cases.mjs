import { text_frozen } from "./text_frozen.mjs";
export function js_declared_names_cases() {
  "Small written-out files, each saying which names the file declares for itself.";
  "This reading is one of the four the free-name question is built from, and since the";
  "free-name question decides which imports the canonicalizing pass adds to every edited";
  "file, a name this one stops reporting becomes a name that looks unbound and an import";
  "that gets added for it. It answers with a list and it is asked about files that mostly";
  "declare something, so a reading that had gone half-silent would still look busy.";
  "The last four cases are the shapes it does not cover, written down with the short";
  "answer it actually gives rather than the one the language would give. They are here";
  "because an uncovered shape that nobody has written down reads exactly like a covered";
  "one, and because the day any of them starts being covered this gate is what says so.";
  "Each file is held as fixed text, since the names inside are ordinary repo names and the";
  "canonicalizing pass would otherwise rewrite them into references and change what the";
  "case says.";
  let cases = [
    {
      name: "the module's own exported function",
      code: text_frozen("export function f() {\n  return 1;\n}\n"),
      declared: ["f"],
    },
    {
      name: "a variable declared at the top of the file",
      code: text_frozen(
        "let value = 1;\nexport function f() {\n  return value;\n}\n",
      ),
      declared: ["f", "value"],
    },
    {
      name: "a function declared inside another one, deeper scope and all",
      code: text_frozen(
        "export function f() {\n  function inner() {\n    return 1;\n  }\n  return inner();\n}\n",
      ),
      declared: ["inner", "f"],
    },
    {
      name: "the item name a for-of header declares",
      code: text_frozen(
        "export function f(list) {\n  for (let item of list) {\n    return item;\n  }\n}\n",
      ),
      declared: ["f", "item"],
    },
    {
      name: "a function expression held under a name, which is the name it gives",
      code: text_frozen(
        "export function f(list) {\n  let lambda = function named(item) {\n    return named;\n  };\n  return lambda(list);\n}\n",
      ),
      declared: ["f", "lambda"],
    },
    {
      name: "an imported name is not declared here, so it is not on this list",
      code: text_frozen(
        'import { list_add } from "./list_add.mjs";\nexport function f() {\n  return list_add([], 1);\n}\n',
      ),
      declared: ["f"],
    },
    {
      name: "a name unpacked out of an object",
      code: text_frozen(
        "export function f(o) {\n  let { part } = o;\n  return part;\n}\n",
      ),
      declared: ["f", "part"],
    },
    {
      name: "a name unpacked out of a list",
      code: text_frozen(
        "export function f(o) {\n  let [first] = o;\n  return first;\n}\n",
      ),
      declared: ["f", "first"],
    },
    {
      name: "unpacking under a different name, keeping the one on the left",
      code: text_frozen(
        "export function f(o) {\n  let { part: piece } = o;\n  return piece;\n}\n",
      ),
      declared: ["f", "piece"],
    },
    {
      name: "a skipped slot names nothing, and the rest of the list is one name",
      code: text_frozen(
        "export function f(o) {\n  let [, second, ...remaining] = o;\n  return [second, remaining];\n}\n",
      ),
      declared: ["f", "second", "remaining"],
    },
    {
      name: "a value standing to the right of a name binds nothing itself",
      code: text_frozen(
        "export function f(o) {\n  let { part = 1 } = o;\n  return part;\n}\n",
      ),
      declared: ["f", "part"],
    },
    {
      name: "a declared class",
      code: text_frozen(
        "class Thing {}\nexport function f() {\n  return Thing;\n}\n",
      ),
      declared: ["f", "Thing"],
    },
    {
      name: "the error a catch clause names is bound, but it is not declared - the all-clauses reading is what supplies it",
      code: text_frozen(
        "export function f(lambda) {\n  try {\n    return lambda();\n  } catch (e) {\n    return e;\n  }\n}\n",
      ),
      declared: ["f"],
    },
  ];
  return cases;
}
