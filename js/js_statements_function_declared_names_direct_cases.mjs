import { text_frozen } from "./text_frozen.mjs";
export function js_statements_function_declared_names_direct_cases() {
  "Written-out runs of lines, each beside the names the run declares as functions straight among those lines.";
  "THE WHOLE OF THIS READING IS ONE DISTINCTION, AND IT IS THE ONE NOBODY REMEMBERS: a function given a name is filled before the first line of the body runs, and a class given a name is not. Read the two the same way and every case still looks right, because both are written as a word after a keyword and both end up bound by the time anybody looks. The difference only shows on a line that stands ABOVE the declaration, and that line is exactly the line a cut writes.";
  "So the harm from widening this to classes is invisible in the ordinary way. A run that reads a class declared below it would be let through, the call written where the run used to stand would reach the name before its own line had run, and the page would stop with the name saying it cannot be reached before it is made - at whatever moment that button is pressed, not at the moment of the cut. Nothing here is red in between. That is why the class case is written down rather than left to be remembered.";
  "The other half of the claim is the word direct. A run of lines answers for what it declares itself and never for what a block or a function written inside it declares, because a name declared in there is not a name the lines around the run can reach at all. Counting one would hand a caller a name it must not subtract, and a subtraction that takes away too much is a refusal that never happens.";
  "The answers are compared as a set rather than in the order the walk gathers them, so gathering the same names another way stays a refactor.";
  let cases = [
    {
      name: "a declared function is counted",
      code: text_frozen("function f() {}"),
      declared: ["f"],
    },
    {
      name: "a declared class is not counted, because its name is empty until its own line runs",
      code: text_frozen("class C {}"),
      declared: [],
    },
    {
      name: "a function and a class side by side answer with the function alone",
      code: text_frozen("function f() {}\nclass C {}"),
      declared: ["f"],
    },
    {
      name: "a function held in a variable is not a declaration",
      code: text_frozen("let f = function () {};"),
      declared: [],
    },
    {
      name: "a function written as an arrow and held in a variable is not a declaration",
      code: text_frozen("let f = () => {};"),
      declared: [],
    },
    {
      name: "a declared function that waits is counted like any other",
      code: text_frozen("async function f() {}"),
      declared: ["f"],
    },
    {
      name: "a declared function that hands back one thing at a time is counted like any other",
      code: text_frozen("function* f() {}"),
      declared: ["f"],
    },
    {
      name: "a function declared inside a block is not declared among these lines",
      code: text_frozen("if (x) {\n  function f() {}\n}"),
      declared: [],
    },
    {
      name: "a function declared inside another function is not declared among these lines",
      code: text_frozen("function outer() {\n  function inner() {}\n}"),
      declared: ["outer"],
    },
    {
      name: "a plain variable is not counted",
      code: text_frozen("let x = 1;"),
      declared: [],
    },
    {
      name: "every declared function among the lines is counted, not just the first",
      code: text_frozen("function a() {}\nlet x = 1;\nfunction b() {}"),
      declared: ["a", "b"],
    },
  ];
  return cases;
}
