import { text_frozen } from "./text_frozen.mjs";
export function js_scope_binding_names_cases() {
  "Written-out files, each naming one kind of scope inside it and the names that scope binds, in alphabetical order.";
  "This is the per-scope half of the binding question, and the shadowing readings are built on it: a scope is called hiding a name when what it binds meets what the scopes around it bind. So a kind of binding this reading forgets is a hiding nobody is told about, and a name it invents is a rename refused for no reason. There is a case for every branch the reading has, because each branch is a different way of getting hold of a name and they were written at different times.";
  "The one thing the reading must keep giving away is the boundary. A block is asked about the statements that are its own and not about the ones a block inside it holds; a declared function's own name belongs to the file around it and not to the function; a function expression's name belongs to the function and not to the file. Those three are the cases that would still pass if the reading simply gathered every name it could reach, so they are the ones worth having.";
  "Each file holds exactly one node of the kind its case names, so the case says which scope it means without having to count. The answers are alphabetical rather than in the order the reading gathers them, so gathering the same names another way stays a refactor.";
  let cases = [
    {
      name: "a catch clause binds the name it catches",
      code: text_frozen(
        "function f() {\n  try {\n    g();\n  } catch (oops) {\n    h(oops);\n  }\n}",
      ),
      node_type: "CatchClause",
      binds: ["oops"],
    },
    {
      name: "a counting loop binds the counter its header declares",
      code: text_frozen(
        "function f() {\n  for (let i = 0; i < 3; i++) {\n    g(i);\n  }\n}",
      ),
      node_type: "ForStatement",
      binds: ["i"],
    },
    {
      name: "a loop over items binds the item its header declares",
      code: text_frozen(
        "function f(items) {\n  for (let item of items) {\n    g(item);\n  }\n}",
      ),
      node_type: "ForOfStatement",
      binds: ["item"],
    },
    {
      name: "a declared function binds its parameters and not its own name",
      code: text_frozen("function f(a, b) {\n  let c = 1;\n  return c;\n}"),
      node_type: "FunctionDeclaration",
      binds: ["a", "b"],
    },
    {
      name: "a function expression binds its own name as well as its parameters",
      code: text_frozen("let f = function inner(a) {\n  return inner(a);\n};"),
      node_type: "FunctionExpression",
      binds: ["a", "inner"],
    },
    {
      name: "an arrow function binds its parameters only",
      code: text_frozen("let f = (a, b) => a + b;"),
      node_type: "ArrowFunctionExpression",
      binds: ["a", "b"],
    },
    {
      name: "a block binds what its own statements declare and not what a block inside it declares",
      code: text_frozen("let a = 1;\n{\n  let b = 2;\n}"),
      node_type: "BlockStatement",
      binds: ["b"],
    },
    {
      name: "a file binds a declared function's name and not what that function declares",
      code: text_frozen("let a = 1;\nfunction g() {\n  let b = 2;\n}"),
      node_type: "Program",
      binds: ["a", "g"],
    },
    {
      name: "a file does not bind a name it imports",
      code: text_frozen('import { g } from "./g.mjs";\nlet a = 1;'),
      node_type: "Program",
      binds: ["a"],
    },
  ];
  return cases;
}
