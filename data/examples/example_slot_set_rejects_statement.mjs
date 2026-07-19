import { js_statement_if_test_set } from "../../js/js_statement_if_test_set.mjs";
import { js_expression_node_is } from "../../js/js_expression_node_is.mjs";
export const example = {
  kind: "rejection",
  title: "A slot setter refuses a statement in an expression slot",
  note: [
    "The if-test slot holds an expression; a statement in it is refused by the two-sided guard (",
    { fn: js_expression_node_is.name },
    " fails on arg 1).",
  ],
  // human-readable form
  call: `${js_statement_if_test_set.name}( parse("if (a) {}"), parseStatement("b();") )`,
  expectText: `throws — arg 1 is not an expression node`,
  // machine-runnable form: import fn, build each arg by parsing, call, assert
  fn: js_statement_if_test_set.name,
  args: [
    { code: "if (a) {}", parse: "statement" },
    { code: "b();", parse: "statement" },
  ],
  expect: "throw",
};
