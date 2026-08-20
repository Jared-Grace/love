import { text_frozen } from "./text_frozen.mjs";
export function js_function_expressions_own_names_cases() {
  "Small written-out files, each beside the names the functions written as values in them carry for themselves, in alphabetical order.";
  "This is one of the four readings the free-name question is built from, and that question decides which imports the canonicalizing pass adds to a file it has just edited. This name is the strangest of the four: it is readable only inside the function that wears it, so nothing around it declares it and nothing hands it in. It was missing from the question for as long as the question was built out of declarations and parameters, and three hundred and twenty-two names were bound that way across the repo when it was added.";
  "The direction that does harm is a name going missing. A name that stops being reported looks bound by nothing, so it looks like the repo function of that name, and the pass adds an import for the function that was standing right there naming itself.";
  "The last case is a shape this does not cover, written down with the short answer it actually gives rather than the one the language would give. A class written as a value carries a name for itself the same way, readable only inside the class, and nothing here reports it. It is written down because an uncovered shape that nobody has written down reads exactly like a covered one, and because the day it starts being covered this gate is what says so. Measured across all eleven thousand eight hundred and eighteen files there is not one named class written as a value, which is why the gap costs nothing today and why nobody should assume it always will.";
  "The answers are alphabetical rather than in the order the walk gathers them. No caller reads the order, since all of them subtract, so gathering the same names in another order stays a refactor rather than a red gate. What gathering actually gives is one of these inside another handing over the inner one first.";
  "Each file is held as fixed text, since the names inside are ordinary repo names and the canonicalizing pass would otherwise rewrite them into references and change what the case says.";
  let cases = [
    {
      name: "a function written as a value under a name of its own",
      code: text_frozen("let h = function inner() {};"),
      own: ["inner"],
    },
    {
      name: "a function written as a value with no name of its own",
      code: text_frozen("let k = function () {};"),
      own: [],
    },
    {
      name: "one of these inside another gives up both names",
      code: text_frozen(
        "let h = function first() {\n  let k = function second() {};\n};",
      ),
      own: ["first", "second"],
    },
    {
      name: "a function written as a value against a property of an object",
      code: text_frozen("let o = {\n  m: function named() {},\n};"),
      own: ["named"],
    },
    {
      name: "a declared function's name is not one of these - the declared-names reading is what supplies it",
      code: text_frozen("function f() {}"),
      own: [],
    },
    {
      name: "an arrow carries no name of its own, and neither does a method written the short way",
      code: text_frozen("let m = () => 1;\nlet o = {\n  q() {},\n};"),
      own: [],
    },
    {
      name: "a class written as a value under a name of its own is not covered, and answers with nothing",
      code: text_frozen("let C = class Inner {};"),
      own: [],
    },
  ];
  return cases;
}
