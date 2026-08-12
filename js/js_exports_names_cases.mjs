import { text_frozen } from "./text_frozen.mjs";
export function js_exports_names_cases() {
  "Written-out files pinning which names a file gives out for others to import and which it merely writes down";
  "The sweep this reader feeds finds nothing once the repo is clean, and a reader that had stopped looking would also find nothing. So the cases must fail both ways: one calling every declared name exported breaks the inner-function case and the unexported one, and one calling none exported breaks the rest.";
  "The files are frozen text, because the pass that turns a mentioned name into a reference would otherwise rewrite the names inside them and the case would stop testing what it was written for.";
  let cases = [
    {
      name: "a function written with export in front of it",
      code: text_frozen("export function f() {\n  return 1;\n}\n"),
      names: ["f"],
    },
    {
      name: "a function written inside an exported one is not given out",
      code: text_frozen(
        "export function f() {\n  function g() {\n    return 1;\n  }\n  return g();\n}\n",
      ),
      names: ["f"],
    },
    {
      name: "a function with no export word in front of it gives out nothing",
      code: text_frozen("function f() {\n  return 1;\n}\n"),
      names: [],
    },
    {
      name: "names listed in an export block",
      code: text_frozen(
        "function a() {\n  return 1;\n}\nfunction b() {\n  return 2;\n}\nexport { a, b };\n",
      ),
      names: ["a", "b"],
    },
    {
      name: "a name listed under another word is given out under that word",
      code: text_frozen("function a() {\n  return 1;\n}\nexport { a as b };\n"),
      names: ["b"],
    },
    {
      name: "two values bound by one export line",
      code: text_frozen("export const a = 1,\n  b = 2;\n"),
      names: ["a", "b"],
    },
  ];
  return cases;
}
