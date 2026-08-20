import { js_statement_if_test_set } from "../../js/js_statement_if_test_set.mjs";
export const example = {
  fn: js_statement_if_test_set.name,
  args: ["b"],
  kind: "transform",
  title: "Set an if-test slot to a new expression",
  note: [
    { fn: js_statement_if_test_set.name },
    " sets an if-statement's test slot to a new expression — the condition ",
    { code: "a" },
    " becomes ",
    { code: "b" },
    ". The two-sided guard that refuses a statement (the paired rejection) accepts these: arg 1 is an if-statement, arg 2 an expression.",
  ],
  before: `if (a) {\n}`,
  after: `if (b) {\n}`,
};
