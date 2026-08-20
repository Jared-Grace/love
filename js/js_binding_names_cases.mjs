import { text_frozen } from "./text_frozen.mjs";
export function js_binding_names_cases() {
  "Written-out modules, each beside the names it binds for itself, in alphabetical order.";
  "Every caller of this reading uses it to SUBTRACT - to drop the names that are the file's own before treating what is left as the repo's. So a name missing from the answer is the direction that does harm: it leaves a local looking like the repo function of that name, and a step acts on what the repo said about a function that is not the one the line calls. A name wrongly present only costs a rewrite that does not happen. That is why there is a case for every kind of binding rather than for the two obvious ones.";
  "Two of these kinds were absent from the reading until the day this corpus was written, and neither is a declaration or a parameter: a caught name is written like a parameter but belongs to no function, and a function expression's own name is readable only inside itself, so nothing around it declares it. Both are here so that dropping them again turns a gate red instead of turning a filter quietly blind.";
  "Unpacking is written down at length because it is the one place where the name a line binds is not the name a reader's eye lands on. Taking a property out under a different name binds the NEW name and not the property; reaching through a property to a name inside binds only what was reached; a name given something to fall back on is a binding all the same, and so is the one that gathers whatever is left over. Read any of those the obvious way and the reading answers with a word the file never bound while missing the word it did, which is both directions of wrong at once.";
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
    {
      name: "unpacking a list binds each name taken out of it",
      code: text_frozen("let [a, b] = xs;"),
      bound: ["a", "b"],
    },
    {
      name: "unpacking under a new name binds the new name and not the property",
      code: text_frozen("let { p: renamed } = o;"),
      bound: ["renamed"],
    },
    {
      name: "unpacking that reaches through a property binds only what it reaches",
      code: text_frozen("let { p: { q } } = o;"),
      bound: ["q"],
    },
    {
      name: "a name given a value to fall back on is still a binding",
      code: text_frozen("let [a = 1] = xs;\nlet { p = 2 } = o;"),
      bound: ["a", "p"],
    },
    {
      name: "a name gathering everything left over is a binding",
      code: text_frozen("let [a, ...rest] = xs;\nlet { p, ...other } = o;"),
      bound: ["a", "other", "p", "rest"],
    },
    {
      name: "a slot the unpacking steps over binds nothing",
      code: text_frozen("let [, b] = xs;"),
      bound: ["b"],
    },
    {
      name: "names a loop unpacks for each turn are bindings",
      code: text_frozen("for (let [k, v] of pairs) {}"),
      bound: ["k", "v"],
    },
  ];
  return cases;
}
