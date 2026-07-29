import { text_frozen } from "./text_frozen.mjs";
export function js_while_frozen_cases() {
  "Written-out loops pinning which ones count as never able to stop";
  "The sweep this reader feeds answers nothing at all while the repo is well, and a";
  "reader that had quietly stopped looking would answer exactly the same. So the";
  "cases carry the loops that must be named as firmly as the ones that must be left";
  "alone, and the second kind is the larger half: every way a loop has of ending is a";
  "way this can wrongly call working code broken.";
  "Each loop is frozen text, because the words inside are ordinary repo names and the";
  "pass that turns a mentioned name into a reference would rewrite them into";
  "something the case no longer tests.";
  let cases = [
    {
      name: "the condition was taken before the loop and nothing takes it again",
      code: text_frozen(
        "let b = null_is(result);\nwhile (not(b)) {\n  result = js_fold(x, f);\n}\n",
      ),
      stuck: 1,
    },
    {
      name: "the condition is taken again at the end of the body",
      code: text_frozen(
        "let b = null_is(result);\nwhile (not(b)) {\n  result = js_fold(x, f);\n  b = null_is(result);\n}\n",
      ),
      stuck: 0,
    },
    {
      name: "the condition asks its question each time round",
      code: text_frozen(
        "while (not(null_is(result))) {\n  result = js_fold(x, f);\n}\n",
      ),
      stuck: 0,
    },
    {
      name: "going round forever on purpose, with a way out",
      code: text_frozen("while (true) {\n  step();\n  break;\n}\n"),
      stuck: 0,
    },
    {
      name: "going round forever on purpose, waiting on nothing",
      code: text_frozen("while (true) {\n  step();\n}\n"),
      stuck: 0,
    },
    {
      name: "the name is stepped up in the body",
      code: text_frozen(
        "let i = 0;\nwhile (less_than(i, 10)) {\n  step(i);\n  i++;\n}\n",
      ),
      stuck: 0,
    },
    {
      name: "the body returns out of the function",
      code: text_frozen(
        "function f() {\n  let b = ready_is();\n  while (not(b)) {\n    if (done_is()) {\n      return 1;\n    }\n  }\n}\n",
      ),
      stuck: 0,
    },
    {
      name: "the body throws",
      code: text_frozen(
        "let b = ready_is();\nwhile (not(b)) {\n  throw new Error(x);\n}\n",
      ),
      stuck: 0,
    },
    {
      name: "the condition reaches through a dot, so nothing is proved",
      code: text_frozen("while (not(o.done)) {\n  step();\n}\n"),
      stuck: 0,
    },
    {
      name: "a name written by a function written inside the body",
      code: text_frozen(
        "let b = ready_is();\nwhile (not(b)) {\n  each(xs, function lambda(x) {\n    b = true;\n  });\n}\n",
      ),
      stuck: 0,
    },
    {
      name: "two names asked about and one of them written",
      code: text_frozen(
        "let b = ready_is();\nlet c = done_is();\nwhile (not(b && c)) {\n  c = done_is();\n}\n",
      ),
      stuck: 0,
    },
    {
      name: "two names asked about and neither written",
      code: text_frozen(
        "let b = ready_is();\nlet c = done_is();\nwhile (not(b && c)) {\n  step();\n}\n",
      ),
      stuck: 1,
    },
    {
      name: "the same fault written the other way round",
      code: text_frozen(
        "let b = ready_is();\ndo {\n  step();\n} while (not(b));\n",
      ),
      stuck: 1,
    },
    {
      name: "a comparison the repo writes as a call, with neither side written",
      code: text_frozen(
        "let seen = count_get();\nwhile (less_than(seen, total)) {\n  step();\n}\n",
      ),
      stuck: 1,
    },
    {
      name: "a call that is not one of the operators, so nothing is proved",
      code: text_frozen("while (ready_not_is(b)) {\n  step();\n}\n"),
      stuck: 0,
    },
    {
      name: "no loop at all",
      code: text_frozen("let b = ready_is();\nstep(b);\n"),
      stuck: 0,
    },
  ];
  return cases;
}
