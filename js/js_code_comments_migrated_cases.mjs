import { fn_name } from "./fn_name.mjs";
import { text_frozen } from "./text_frozen.mjs";
export function js_code_comments_migrated_cases() {
  "Written-out modules carrying a comment, each with the function names the sweep is willing to reference and the code the comment becomes.";
  "The name offered is one the repo really answers to, because that is the only kind this step ever substitutes: a comment naming nothing known stays a plain string, and a comment naming a function becomes a template with a live reference in place of the word. Both shapes are here, so a change that stops substituting and a change that starts substituting everything each turn a case red.";
  "The last case is the one that costs something to get wrong. The file catches a name that a repo function also answers to, so inside that clause the word means the caught value and not the function at all. The comment must stay a plain string, and it only does because the reading of what the file binds for itself sees a caught name. When that reading missed them, this comment turned into a live reference to a function the line never calls, and nothing anywhere went red.";
  let f_name = fn_name("list_add");
  let f_name2 = fn_name("list_add");
  let f_name3 = fn_name("list_add");
  let cases = [
    {
      name: "a comment naming nothing known becomes a plain string",
      code: text_frozen(
        "function f() {\n  // it holds what went wrong\n  h();\n}",
      ),
      f_names: [f_name],
      migrated: text_frozen(
        'function f() {\n  "it holds what went wrong";\n  h();\n}',
      ),
    },
    {
      name: "a comment naming a function becomes a live reference to it",
      code: text_frozen(
        "function f() {\n  // list_add holds what went wrong\n  h(list_add);\n}",
      ),
      f_names: [f_name2],
      migrated: text_frozen(
        'function f() {\n  `${fn_name("list_add")} holds what went wrong`;\n  h(list_add);\n}',
      ),
    },
    {
      name: "a comment naming a word the file caught for itself stays a plain string",
      code: text_frozen(
        "function f() {\n  try {\n    g();\n  } catch (list_add) {\n    // list_add holds what went wrong\n    h(list_add);\n  }\n}",
      ),
      f_names: [f_name3],
      migrated: text_frozen(
        'function f() {\n  try {\n    g();\n  } catch (list_add) {\n    "list_add holds what went wrong";\n    h(list_add);\n  }\n}',
      ),
    },
  ];
  return cases;
}
