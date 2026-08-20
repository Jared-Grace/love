import { text_frozen } from "./text_frozen.mjs";
export function js_flo_body_cases() {
  "Small written-out modules beside the kinds of statement standing directly inside the one function each hands out, or the word for having stopped instead of answering.";
  "This is the reading almost every look at what a function does begins from, and it is two readings joined: find the one thing the module hands out, then take the statements standing directly inside it. The cases are here to say where the join is, because the two halves do not agree about what they will answer for.";
  "The finder above this one answers about whatever the export declares - a value or a class as readily as a function. This one cannot, because a value has no block of statements to take and a class body is not one. So three of the modules below are answered about and three are stopped on, and two of the three that stop are modules the half above would have answered about quite happily. Nothing else in the repo writes that down, and a caller reading only the names would reasonably expect the two to accept the same modules.";
  "The statements are named by kind rather than written out because what is being watched is that the right block was reached and that it was read shallowly - only what stands directly inside the function, never what is nested further down. An empty list is a real answer here and means an empty function, not a failure to find one.";
  "A stop is written down as a word rather than as a list, so that it cannot be read as a list of no statements. The two are different in kind on purpose.";
  "Each module is held as fixed text so the canonicalizing pass leaves the names inside it alone.";
  let cases = [
    {
      name: "a function with one statement in it",
      code: text_frozen("export function f() {\n  return 1;\n}"),
      statements: ["ReturnStatement"],
    },
    {
      name: "a function with nothing in it, which is answered about rather than stopped on",
      code: text_frozen("export function f() {}"),
      statements: [],
    },
    {
      name: "a function with two statements, in the order they stand",
      code: text_frozen("export function f() {\n  let a = 1;\n  return a;\n}"),
      statements: ["VariableDeclaration", "ReturnStatement"],
    },
    {
      name: "a module handing out a value, which the finder above answers about and this one stops on",
      code: text_frozen("export const x = 1;"),
      statements: "refused",
    },
    {
      name: "a module handing out a class, which the finder above answers about and this one stops on",
      code: text_frozen("export class C {}"),
      statements: "refused",
    },
    {
      name: "a module handing out nothing, which stops in the half above this one",
      code: text_frozen("function f() {\n  return 1;\n}"),
      statements: "refused",
    },
  ];
  return cases;
}
