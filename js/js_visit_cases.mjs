import { text_frozen } from "./text_frozen.mjs";
export function js_visit_cases() {
  "Written-out files beside the exact run of things a walk over each one hands to its lambda, in the order it hands them over. Each thing is written as what it is - a node's kind, or a list and how long it is - and how deep the stack was when it was handed over.";
  "The order is the answer here, so these lists are NOT sorted. Every other corpus in this family sorts its answer so that gathering the same names another way stays a refactor; this one must not, because the order is the whole of what a walk promises. Two readings stand on it directly: the enclosing-scopes reading takes the stack as its argument, and the whole family's other corpora are written one-node-of-each-kind-per-file so that they never have to name a position. Change the order and those stay green while meaning something else.";
  "The depth counts the node itself, so a whole file is at one rather than at nothing. A reader taking the last thing on the stack expects to find what it was just handed; a stack that stopped at the parent would give it the parent instead, and every enclosing-scope answer would be off by one scope in a direction no case here would notice if the depth were left out.";
  "A node's children come before the node, so anything gathered on the way is complete by the time the thing holding it arrives. The lists a node holds are visited in their own right and after what is in them, an empty list included; a slot a node leaves empty is not visited at all, because there is nothing standing there to visit.";
  let cases = [
    {
      name: "the things a node holds are visited before the node itself",
      code: text_frozen("let a = 1;"),
      visited: [
        "Identifier at 6",
        "Literal at 6",
        "VariableDeclarator at 5",
        "list 1 at 4",
        "VariableDeclaration at 3",
        "list 1 at 2",
        "Program at 1",
      ],
    },
    {
      name: "statements are visited in the order they are written",
      code: text_frozen("a;\nb;"),
      visited: [
        "Identifier at 4",
        "ExpressionStatement at 3",
        "Identifier at 4",
        "ExpressionStatement at 3",
        "list 2 at 2",
        "Program at 1",
      ],
    },
    {
      name: "a list is visited in its own right, after everything in it",
      code: text_frozen("let a = [1];"),
      visited: [
        "Identifier at 6",
        "Literal at 8",
        "list 1 at 7",
        "ArrayExpression at 6",
        "VariableDeclarator at 5",
        "list 1 at 4",
        "VariableDeclaration at 3",
        "list 1 at 2",
        "Program at 1",
      ],
    },
    {
      name: "a list with nothing in it is still visited",
      code: text_frozen("function g() {}"),
      visited: [
        "Identifier at 4",
        "list 0 at 4",
        "list 0 at 5",
        "BlockStatement at 4",
        "FunctionDeclaration at 3",
        "list 1 at 2",
        "Program at 1",
      ],
    },
    {
      name: "a slot the node leaves empty is not visited",
      code: text_frozen("if (a) {\n  b;\n}"),
      visited: [
        "Identifier at 4",
        "Identifier at 7",
        "ExpressionStatement at 6",
        "list 1 at 5",
        "BlockStatement at 4",
        "IfStatement at 3",
        "list 1 at 2",
        "Program at 1",
      ],
    },
    {
      name: "a function's whole body is finished before the function arrives",
      code: text_frozen("function g() {\n  h();\n}"),
      visited: [
        "Identifier at 4",
        "list 0 at 4",
        "Identifier at 8",
        "list 0 at 8",
        "CallExpression at 7",
        "ExpressionStatement at 6",
        "list 1 at 5",
        "BlockStatement at 4",
        "FunctionDeclaration at 3",
        "list 1 at 2",
        "Program at 1",
      ],
    },
  ];
  return cases;
}
