import { text_frozen } from "./text_frozen.mjs";
export function js_parse_cases() {
  "Written-out files beside the kinds of statement standing at the top of each one, in the order they are written, and the word for having stopped where the text is not a file this repo could hold.";
  "Everything in the repo that reads code goes through here first, so what this reading accepts is the outer edge of what any transform can be handed. It reads text as a module rather than as a script, and at the version of the language of 2024. Neither of those is written anywhere a caller looks, and both change what is legal.";
  "Being read as a module is what makes an import and an export legal, and it is also what makes an await at the top of a file legal - a module may wait, a script may not. A return at the top is refused, because a return needs a function round it and a file is not one.";
  "That last refusal is the sharp difference from the reading that takes a single statement: THAT one writes a function round the text before reading it, so it accepts a return and this does not. The two look like the same question asked at two sizes and they are not.";
  "A file holding nothing is a file, and answers with no statements. The same empty text handed to the single-statement reading is refused instead. An empty list and a refusal are the two answers most easily confused, and here they are pinned to opposite sides of the same text.";
  "A line naming the program to run the file with is allowed and is not a statement, so it does not show up in the answer at all. A transform counting what stands at the top of a file counts one thing fewer than the lines suggest.";
  "Each file is held as fixed text so the canonicalizing pass leaves the names inside it alone.";
  let cases = [
    {
      name: "one declaration",
      code: text_frozen("let a = 1;"),
      statements: ["VariableDeclaration"],
    },
    {
      name: "several statements, in the order they are written",
      code: text_frozen("1;\n2;"),
      statements: ["ExpressionStatement", "ExpressionStatement"],
    },
    {
      name: "a file holding nothing, which is a file and answers with no statements",
      code: text_frozen(""),
      statements: [],
    },
    {
      name: "an import, legal because the text is read as a module",
      code: text_frozen('import { x } from "y";'),
      statements: ["ImportDeclaration"],
    },
    {
      name: "an export, which stands as one thing with what it exports inside it",
      code: text_frozen("export function f() {}"),
      statements: ["ExportNamedDeclaration"],
    },
    {
      name: "an await at the top of a file, which a module may do and a script may not",
      code: text_frozen("await g();"),
      statements: ["ExpressionStatement"],
    },
    {
      name: "a line naming the program to run the file with, which is not a statement",
      code: text_frozen("#!/usr/bin/env node\n1;"),
      statements: ["ExpressionStatement"],
    },
    {
      name: "a return at the top of a file, which needs a function round it",
      code: text_frozen("return 1;"),
      statements: "refused",
    },
    {
      name: "text that is not code at all",
      code: text_frozen("a b"),
      statements: "refused",
    },
  ];
  return cases;
}
