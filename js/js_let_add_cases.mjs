import { text_frozen } from "./text_frozen.mjs";
export function js_let_add_cases() {
  "Written-out code pinning which assignments are given the word let, and which are left exactly as they were.";
  "Adding the word makes a name of its own, held inside the nearest pair of brackets. Where something already binds that name, the new one hides it, and every line below reads the new one instead. So a case that leaves the code alone is the step declining to make a second name, and each of those names one way a name can already be bound.";
  let cases = [
    {
      name: "a name nothing has bound is given the word",
      code: text_frozen("x = 1;"),
      after: text_frozen("let x = 1;\n"),
    },
    {
      name: "a name already given the word above is left alone",
      code: text_frozen("let x = 0;\nx = 1;"),
      after: text_frozen("let x = 0;\nx = 1;\n"),
    },
    {
      name: "a property of something is not a name, so it is left alone",
      code: text_frozen("a.b = 1;"),
      after: text_frozen("a.b = 1;\n"),
    },
    {
      name: "an assignment handed over as an argument is left alone, because the word cannot go there",
      code: text_frozen("ok(x = 1);"),
      after: text_frozen("ok(x = 1);\n"),
    },
    {
      name: "a name the function was handed is already bound, so it is left alone",
      code: text_frozen("function f(x) {\n  x = 1;\n}"),
      after: text_frozen("function f(x) {\n  x = 1;\n}\n"),
    },
    {
      name: "a name a function of that name binds is left alone",
      code: text_frozen("function g() {}\ng = 1;"),
      after: text_frozen("function g() {}\ng = 1;\n"),
    },
    {
      name: "a name nothing binds is given the word inside the function that assigns it",
      code: text_frozen("function f() {\n  g = 1;\n}"),
      after: text_frozen("function f() {\n  let g = 1;\n}\n"),
    },
    {
      name: "a name bound at the top of the file is left alone inside a function",
      code: text_frozen("let cache = null;\nfunction f() {\n  cache = 1;\n}"),
      after: text_frozen("let cache = null;\nfunction f() {\n  cache = 1;\n}\n"),
    },
  ];
  return cases;
}
