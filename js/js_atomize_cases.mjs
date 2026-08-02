import { fn_name } from "./fn_name.mjs";
import { text_frozen } from "./text_frozen.mjs";
export function js_atomize_cases() {
  "Written-out code pinning which calls the lifting pass takes out into a name of their own and which it leaves where they stand";
  "The pass holds back in three places, and holding back looks exactly like doing nothing. A pass that had stopped working would leave every one of these alone and be right about three of them, so the cases that must be lifted are carried as firmly as the ones that must not - they are the half that can tell the difference";
  ("The first case is not invented. It is the line ",
    fn_name("js_node_type_is"),
    " was written as, and the lifting of it above its own guard ran the lookup on nothing, threw, and stopped every canonicalize in the repo on 2026-08-03");
  ("Each piece of code is frozen text, because the words inside are ordinary repo names and the pass that turns a mentioned name into a reference would rewrite them into something the case no longer tests");
  let cases = [
    {
      name: "a comparison on the right of an and, one side a call - the line that broke the repo",
      code: text_frozen(
        "let type_is = js_node_is(node) && equal(js_node_type(node), type);\n",
      ),
      lifted: 0,
    },
    {
      name: "the same comparison on the left of an and, which always runs",
      code: text_frozen(
        "let type_is = equal(js_node_type(node), type) && js_node_is(node);\n",
      ),
      lifted: 1,
    },
    {
      name: "a comparison on the right of an or",
      code: text_frozen("let m = a_is(x) || equal(kind_get(x), y);\n"),
      lifted: 0,
    },
    {
      name: "a comparison on the right of a nullish, which runs only when the left side is nothing",
      code: text_frozen("let m = a_get(x) ?? equal(kind_get(x), y);\n"),
      lifted: 0,
    },
    {
      name: "no guard in front of it at all, so the call is given a name",
      code: text_frozen("let type_is = equal(js_node_type(node), type);\n"),
      lifted: 1,
    },
    {
      name: "two calls in one plain line, both given names",
      code: text_frozen("let v = equal(a_get(x), b_get(y));\n"),
      lifted: 2,
    },
    {
      name: "inside a function written in the right side, which has a block of its own to be named in",
      code: text_frozen(
        "let b = ok(x) && list_any(xs, function inner(v) {\n  return equal(kind_get(v), y);\n});\n",
      ),
      lifted: 1,
    },
    {
      name: "a loop header, which is asked again every time round",
      code: text_frozen("while (not(null_is(result))) {\n  step();\n}\n"),
      lifted: 0,
    },
    {
      name: "the pieces of a comma-joined comment, with no statement list to be named in",
      code: text_frozen('("a ", fn_name("x"), " b");\n'),
      lifted: 0,
    },
    {
      name: "a bare call on the right of an and, whose place is not a list",
      code: text_frozen("let both = js_node_is(node) && js_node_type(node);\n"),
      lifted: 0,
    },
  ];
  return cases;
}
