import { text_frozen } from "./text_frozen.mjs";
export function js_scopes_binding_cases() {
  "Written-out files, each naming a node to start from and a name to look for, beside the scopes under that node which bind the name themselves. A scope is written down as its kind and the names it binds, because a scope has no name of its own to be called by.";
  "The node handed in counts as one of the answers, and that is the case worth having rather than an obvious one: a function asked about a word it takes as a parameter must answer with ITSELF, since the parameter is bound by the function and by nothing inside it. A walk written to look only at what is under the node would answer nothing there while answering every other case here correctly, and the caller would be told a name it can plainly see is bound nowhere.";
  "Nothing here asks whether the name is hidden. This is the reading for a caller that already knows it is and wants the binding at one named place, so a file where the same name is bound twice gives both bindings without either being called the wrong one.";
  "Each file holds exactly one node of the kind its case starts from. The answers are alphabetical rather than in the order the walk reaches them, so walking the file another way stays a refactor.";
  let cases = [
    {
      name: "a function asked about its own parameter answers with itself",
      code: text_frozen(
        "function g(param) {\n  let inner = 1;\n  return inner;\n}",
      ),
      node_type: "FunctionDeclaration",
      asked: "param",
      scopes: ["FunctionDeclaration binds param"],
    },
    {
      name: "a function asked about a name its body declares answers with the body",
      code: text_frozen(
        "function g(param) {\n  let inner = 1;\n  return inner;\n}",
      ),
      node_type: "FunctionDeclaration",
      asked: "inner",
      scopes: ["BlockStatement binds inner"],
    },
    {
      name: "a name bound twice gives both bindings and calls neither of them wrong",
      code: text_frozen(
        "let name = 1;\nfunction g() {\n  let name = 2;\n  let one = 1;\n}",
      ),
      node_type: "Program",
      asked: "name",
      scopes: ["BlockStatement binds name, one", "Program binds g, name"],
    },
    {
      name: "a name nothing binds gives no scopes",
      code: text_frozen("let a = 1;\nlet b = 2;"),
      node_type: "Program",
      asked: "missing",
      scopes: [],
    },
  ];
  return cases;
}
