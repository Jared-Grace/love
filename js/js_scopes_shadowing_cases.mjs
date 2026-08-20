import { text_frozen } from "./text_frozen.mjs";
export function js_scopes_shadowing_cases() {
  "Written-out files, each beside one name to ask about and the scopes in that file which bind the name while a scope around them binds it too. A scope is written down as its kind and the names it binds, because a scope has no name of its own to be called by.";
  "This is the reading a rename is aimed at: it hands back the INNER half of each hiding, which is the half that may be moved. The outer binding is the one the rest of the code was written against, so a reading that handed that one back instead would make the repair the breakage. Every case here therefore checks not only that a hiding was found but that the scope handed back is the inner one.";
  "The kind matters as much as the count. A name declared with let inside a function is bound by the function's BODY and not by the function, so that is the scope a rename must move; a caught name is bound by the catch clause, a loop counter by the loop header, an arrow's parameter by the arrow. Those four are different nodes, and a reading that collapsed them onto the nearest function would still find every hiding while pointing the rename at the wrong place.";
  "Two of the cases exist to pin how many come back. Sibling functions each hiding the same name must give two scopes rather than one, and a hiding inside a hiding must give both rather than the outermost - so each is written to bind a second name the other does not, which is what lets the two entries be told apart at all. The answers are alphabetical rather than in the order the reading walks the file, so walking it in another order stays a refactor.";
  let cases = [
    {
      name: "the scope handed back for a let inside a function is the function's body",
      code: text_frozen(
        "let name = 1;\nfunction g() {\n  let name = 2;\n  return name;\n}",
      ),
      asked: "name",
      scopes: ["BlockStatement binds name"],
    },
    {
      name: "a block hiding a parameter of the function around it is handed back",
      code: text_frozen(
        "function g(item) {\n  {\n    let item = 2;\n    return item;\n  }\n}",
      ),
      asked: "item",
      scopes: ["BlockStatement binds item"],
    },
    {
      name: "a catch clause hiding a parameter is handed back as the catch clause",
      code: text_frozen(
        "function g(value) {\n  try {\n    f();\n  } catch (value) {\n    return value;\n  }\n}",
      ),
      asked: "value",
      scopes: ["CatchClause binds value"],
    },
    {
      name: "an arrow hiding a name the file declares is handed back as the arrow",
      code: text_frozen("let total = 1;\nlet f = (total) => total;"),
      asked: "total",
      scopes: ["ArrowFunctionExpression binds total"],
    },
    {
      name: "a loop counter hiding a name is handed back as the loop header",
      code: text_frozen(
        "function g() {\n  let i = 1;\n  for (let i = 0; i < 3; i++) {\n    h(i);\n  }\n}",
      ),
      asked: "i",
      scopes: ["ForStatement binds i"],
    },
    {
      name: "a function body redeclaring the function's own name hides it",
      code: text_frozen("function g() {\n  let g = 1;\n  return g;\n}"),
      asked: "g",
      scopes: ["BlockStatement binds g"],
    },
    {
      name: "sibling scopes each hiding the name give one entry each",
      code: text_frozen(
        "let name = 1;\nfunction g() {\n  let name = 2;\n  let one = 1;\n}\nfunction h() {\n  let name = 3;\n  let two = 2;\n}",
      ),
      asked: "name",
      scopes: ["BlockStatement binds name, one", "BlockStatement binds name, two"],
    },
    {
      name: "a hiding inside a hiding gives both scopes and not only the outer one",
      code: text_frozen(
        "let name = 1;\nfunction g() {\n  let name = 2;\n  {\n    let name = 3;\n    let deeper = 4;\n  }\n}",
      ),
      asked: "name",
      scopes: ["BlockStatement binds deeper, name", "BlockStatement binds name"],
    },
    {
      name: "two scopes side by side reusing a name hide nothing",
      code: text_frozen(
        "function g() {\n  let a = 1;\n}\nfunction h() {\n  let a = 2;\n}",
      ),
      asked: "a",
      scopes: [],
    },
    {
      name: "a name the file never binds twice hides nothing",
      code: text_frozen("let a = 1;\nlet b = 2;"),
      asked: "missing",
      scopes: [],
    },
  ];
  return cases;
}
