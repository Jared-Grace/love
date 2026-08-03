import { text_frozen } from "./text_frozen.mjs";
export function js_function_declaration_unused_remove_cases() {
  "Small written-out functions, each paired with what it should read as once a helper nothing calls has been taken out of it.";
  "This pass DELETES code, which is the one kind of pass where being slightly too eager is not a report somebody reads and shrugs at - it is work already gone from a file that was fine. So both directions are written down here: half the cases must lose their helper, and half must keep it, and a pass that removed everything fails as loudly as one that removed nothing.";
  "The whole safety argument is the counting - a name written down exactly once, and that once being the declaration itself. So the cases that must KEEP their helper are the two ways a name comes to be written twice: something calls it, or it calls itself. Neither can be told apart from the other by looking at the declaration alone, which is why the reading is of the whole function.";
  "The branch that never runs is the case this corpus was written for. A helper inside one was found standing in the repo after every other unread name had been cleared, and the pass had been asked to take it and had not. A helper is hoisted whatever block it is written in, so where it sits changes nothing about whether anything can reach it - and that is exactly the reasoning a case has to hold, because it is not visible in the code.";
  "Each piece of code is held as fixed text. The words inside look like names, and the pass that turns a mentioned name into a reference would rewrite them into something the case no longer says.";
  let cases = [
    {
      name: "a helper nothing calls is taken out",
      code: text_frozen(
        "export function f() {\n  function helper() {}\n  return 1;\n}\n",
      ),
      removed: text_frozen("export function f() {\n  return 1;\n}\n"),
    },
    {
      name: "a helper something calls stays, because its name is written twice",
      code: text_frozen(
        "export function f() {\n  function helper() {}\n  return helper();\n}\n",
      ),
      removed: text_frozen(
        "export function f() {\n  function helper() {}\n  return helper();\n}\n",
      ),
    },
    {
      name: "a helper that only calls itself stays, since nothing outside it can tell",
      code: text_frozen(
        "export function f() {\n  function helper() {\n    return helper();\n  }\n  return 1;\n}\n",
      ),
      removed: text_frozen(
        "export function f() {\n  function helper() {\n    return helper();\n  }\n  return 1;\n}\n",
      ),
    },
    {
      name: "a helper written inside a branch that never runs is taken out just the same",
      code: text_frozen(
        "export function f() {\n  if (false) {\n    function helper() {}\n  }\n  return 1;\n}\n",
      ),
      removed: text_frozen(
        "export function f() {\n  if (false) {}\n  return 1;\n}\n",
      ),
    },
    {
      name: "the function being read is left where it is, though nothing here calls it either",
      code: text_frozen("export function f() {\n  return 1;\n}\n"),
      removed: text_frozen("export function f() {\n  return 1;\n}\n"),
    },
  ];
  return cases;
}
