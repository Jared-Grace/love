import { text_frozen } from "./text_frozen.mjs";
export function js_calls_to_each_cases() {
  "Written-out code, each piece with its own list of names that may be collapsed, pinning which runs of side by side calls become a single walk and which are left as they stand.";
  "A run and a walk over its arguments say the same thing only under several conditions at once: one and the same name, one argument each, all of them waited for or none of them, and nothing standing in between. Each condition has a case of its own, because a step that collapses a run failing any one of them changes what the code does and nothing says so.";
  "The lists of names are chosen by the case rather than worked out from the repo. Which names are safe is a reading of every function in the repo, and a case that had to hold that reading would go stale the moment somebody edited one of them.";
  let cases = [
    {
      name: "two calls on the same name become one walk",
      code: text_frozen("function f() {\n  log(1);\n  log(2);\n}"),
      names: ["log"],
      after: text_frozen("function f() {\n  each([1, 2], log);\n}\n"),
    },
    {
      name: "three calls on the same name become one walk",
      code: text_frozen("function f() {\n  log(1);\n  log(2);\n  log(3);\n}"),
      names: ["log"],
      after: text_frozen("function f() {\n  each([1, 2, 3], log);\n}\n"),
    },
    {
      name: "a single call on its own is left alone",
      code: text_frozen("function f() {\n  log(1);\n}"),
      names: ["log"],
      after: text_frozen("function f() {\n  log(1);\n}\n"),
    },
    {
      name: "a name that is not in the list is left alone",
      code: text_frozen("function f() {\n  log(1);\n  log(2);\n}"),
      names: [],
      after: text_frozen("function f() {\n  log(1);\n  log(2);\n}\n"),
    },
    {
      name: "two calls on different names are left alone",
      code: text_frozen("function f() {\n  log(1);\n  warn(2);\n}"),
      names: ["log", "warn"],
      after: text_frozen("function f() {\n  log(1);\n  warn(2);\n}\n"),
    },
    {
      name: "a call given two arguments is left alone",
      code: text_frozen("function f() {\n  log(1);\n  log(2, 3);\n}"),
      names: ["log"],
      after: text_frozen("function f() {\n  log(1);\n  log(2, 3);\n}\n"),
    },
    {
      name: "a statement standing in between breaks the run",
      code: text_frozen(
        "function f() {\n  log(1);\n  log(2);\n  warn(0);\n  log(3);\n}",
      ),
      names: ["log"],
      after: text_frozen(
        "function f() {\n  each([1, 2], log);\n  warn(0);\n  log(3);\n}\n",
      ),
    },
    {
      name: "two waited calls become one waited walk",
      code: text_frozen(
        "async function f() {\n  await log(1);\n  await log(2);\n}",
      ),
      names: ["log"],
      after: text_frozen(
        "async function f() {\n  await each_async([1, 2], log);\n}\n",
      ),
    },
    {
      name: "a waited call standing beside a plain one is left alone",
      code: text_frozen("async function f() {\n  await log(1);\n  log(2);\n}"),
      names: ["log"],
      after: text_frozen(
        "async function f() {\n  await log(1);\n  log(2);\n}\n",
      ),
    },
    {
      name: "a call reached through a property is left alone",
      code: text_frozen("function f() {\n  a.log(1);\n  a.log(2);\n}"),
      names: ["log"],
      after: text_frozen("function f() {\n  a.log(1);\n  a.log(2);\n}\n"),
    },
    {
      name: "calls standing at the top of the module become one walk",
      code: text_frozen("log(1);\nlog(2);"),
      names: ["log"],
      after: text_frozen("each([1, 2], log);\n"),
    },
    {
      name: "an argument that is itself a call is carried over whole",
      code: text_frozen("function f() {\n  log(g(1));\n  log(g(2));\n}"),
      names: ["log"],
      after: text_frozen("function f() {\n  each([g(1), g(2)], log);\n}\n"),
    },
  ];
  return cases;
}
