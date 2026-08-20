import { text_frozen } from "./text_frozen.mjs";
export function js_shadowing_names_cases() {
  "Written-out files, each beside the names in it that a scope binds while a scope around it binds the same name, in alphabetical order.";
  "This is the only place the per-scope reading and the enclosing-scopes reading are asked together, and asking them together is the point: neither one alone can say whether a name is hidden, because hiding is a relation between an inner answer and an outer one. A file where nothing is hidden is as much a case as one where something is, since the reading that reports every reused name is exactly as broken as the one that reports none - it just fails in the direction that looks busy rather than the direction that looks calm.";
  "Two scopes side by side reusing a name are the case that keeps the second kind of failure out. Neither can see the other, so nothing is hidden and nothing may be reported; a reading that gathered names by file rather than by chain of ancestors would answer this one wrongly while answering every other case here correctly.";
  "The last case marks a boundary rather than a behaviour. A local taking the name of an IMPORTED function is a real hazard - it is the one the file-wide reading exists to catch - but it is not this question, because an import is not a scope's own binding. So this reading is silent there on purpose, and the silence is written down so that making it speak is a decision somebody takes rather than a change nobody notices.";
  let cases = [
    {
      name: "a name declared inside a function while the file declares it too is hidden",
      code: text_frozen(
        "let name = 1;\nfunction g() {\n  let name = 2;\n  return name;\n}",
      ),
      shadowing: ["name"],
    },
    {
      name: "two scopes side by side reusing a name hide nothing",
      code: text_frozen(
        "function g() {\n  let a = 1;\n}\nfunction h() {\n  let a = 2;\n}",
      ),
      shadowing: [],
    },
    {
      name: "a caught name repeating a parameter of the function around it is hidden",
      code: text_frozen(
        "function g(value) {\n  try {\n    f();\n  } catch (value) {\n    return value;\n  }\n}",
      ),
      shadowing: ["value"],
    },
    {
      name: "a block redeclaring a parameter of the function around it hides it",
      code: text_frozen(
        "function g(item) {\n  {\n    let item = 2;\n    return item;\n  }\n}",
      ),
      shadowing: ["item"],
    },
    {
      name: "an arrow function's parameter repeating a name the file declares hides it",
      code: text_frozen("let total = 1;\nlet f = (total) => total;"),
      shadowing: ["total"],
    },
    {
      name: "a loop counter repeating a name the function around it declares hides it",
      code: text_frozen(
        "function g() {\n  let i = 1;\n  for (let i = 0; i < 3; i++) {\n    h(i);\n  }\n}",
      ),
      shadowing: ["i"],
    },
    {
      name: "a file where no name is reused hides nothing",
      code: text_frozen("let a = 1;\nlet b = 2;"),
      shadowing: [],
    },
    {
      name: "a local taking the name of an imported function is not this question",
      code: text_frozen(
        'import { each } from "./each.mjs";\nfunction g() {\n  let each = 1;\n  return each;\n}',
      ),
      shadowing: [],
    },
  ];
  return cases;
}
