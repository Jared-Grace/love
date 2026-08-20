import { text_frozen } from "./text_frozen.mjs";
export function js_scope_binds_is_cases() {
  "Written-out files, each naming one kind of scope inside it and one name to ask that scope about, beside whether the scope binds the name itself.";
  "The whole of the question is the word ITSELF. A scope sits inside other scopes and has other scopes inside it, and almost every name in a file is visible from almost everywhere in it - so a reading that answered whether the name can be SEEN from here would answer true nearly always, and both walks built on this one would then hand back every scope in the file. Half the cases here therefore ask about a name that is plainly in view at the place asked and must still be answered false.";
  "The other thing worth holding is the direction the two failures cost. Answered true too often, the walks report scopes that bind nothing and a rename is offered work it must not do; answered false too often, they report nothing and a real hiding goes unmentioned. Neither is safe, so the corpus carries both answers rather than leaning on one.";
  "Each file holds exactly one node of the kind its case names, so a case says which scope it means without having to count.";
  let cases = [
    {
      name: "a function binds a name it takes as a parameter",
      code: text_frozen(
        "function g(param) {\n  let inner = 1;\n  return inner;\n}",
      ),
      node_type: "FunctionDeclaration",
      asked: "param",
      binds: true,
    },
    {
      name: "a function does not bind a name its own body declares",
      code: text_frozen(
        "function g(param) {\n  let inner = 1;\n  return inner;\n}",
      ),
      node_type: "FunctionDeclaration",
      asked: "inner",
      binds: false,
    },
    {
      name: "a catch clause binds the name it catches",
      code: text_frozen("try {\n  f();\n} catch (oops) {\n  g(oops);\n}"),
      node_type: "CatchClause",
      asked: "oops",
      binds: true,
    },
    {
      name: "a file binds a function it declares",
      code: text_frozen("let a = 1;\nfunction g() {\n  let inner = 2;\n}"),
      node_type: "Program",
      asked: "g",
      binds: true,
    },
    {
      name: "a file does not bind a name declared inside a function it holds",
      code: text_frozen("let a = 1;\nfunction g() {\n  let inner = 2;\n}"),
      node_type: "Program",
      asked: "inner",
      binds: false,
    },
    {
      name: "a file does not bind a name it imports",
      code: text_frozen('import { each } from "./each.mjs";\nlet own = 1;'),
      node_type: "Program",
      asked: "each",
      binds: false,
    },
    {
      name: "a file binds a name it declares itself",
      code: text_frozen('import { each } from "./each.mjs";\nlet own = 1;'),
      node_type: "Program",
      asked: "own",
      binds: true,
    },
  ];
  return cases;
}
