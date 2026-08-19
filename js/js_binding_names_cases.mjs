import { text_frozen } from "./text_frozen.mjs";
export function js_binding_names_cases() {
  "Written-out modules, each beside the names it binds for itself, in alphabetical order.";
  "Every caller of this reading uses it to SUBTRACT - to drop the names that are the file's own before treating what is left as the repo's. So a name missing from the answer is the direction that does harm: it leaves a local looking like the repo function of that name, and a step acts on what the repo said about a function that is not the one the line calls. A name wrongly present only costs a rewrite that does not happen. That is why there is a case for every kind of binding rather than for the two obvious ones.";
  "Two of these kinds were absent from the reading until the day this corpus was written, and neither is a declaration or a parameter: a caught name is written like a parameter but belongs to no function, and a function expression's own name is readable only inside itself, so nothing around it declares it. Both are here so that dropping them again turns a gate red instead of turning a filter quietly blind.";
  "The answers are alphabetical rather than in the order the reading gathers them, so that gathering the same names in another order stays a refactor. Repeats are kept, because a name bound twice is the signal a shadowing check is built on.";
  let cases = [
    {
      name: "a declared function and a declared variable are both bound",
      code: text_frozen("function f() {}\nlet x = 1;"),
      bound: ["f", "x"],
    },
    {
      name: "every parameter is bound, unpacked ones included",
      code: text_frozen("function f(a, { b, c }) {}"),
      bound: ["a", "b", "c", "f"],
    },
    {
      name: "a caught name is bound",
      code: text_frozen("try {\n  g();\n} catch (oops) {}"),
      bound: ["oops"],
    },
    {
      name: "a catch written without a name binds nothing",
      code: text_frozen("try {\n  g();\n} catch {}"),
      bound: [],
    },
    {
      name: "a function expression's own name is bound",
      code: text_frozen("let h = function inner() {};"),
      bound: ["h", "inner"],
    },
    {
      name: "a function expression written without a name binds nothing of its own",
      code: text_frozen("let h = function () {};"),
      bound: ["h"],
    },
    {
      name: "an imported name is not a binding of the file's own",
      code: text_frozen('import { each } from "./each.mjs";\nlet x = 1;'),
      bound: ["x"],
    },
    {
      name: "a name bound twice is listed twice",
      code: text_frozen("function f() {}\nfunction g(f) {}"),
      bound: ["f", "f", "g"],
    },
  ];
  return cases;
}
