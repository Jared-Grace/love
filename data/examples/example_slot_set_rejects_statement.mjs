export const example = {
  tool: "js_statement_if_test_set",
  kind: "rejection",
  title: "A slot setter refuses a statement in an expression slot",
  note: "The if-test slot holds an expression; a statement in it is refused by the two-sided guard (js_expression_node_is fails on arg 1).",
  // human-readable form
  call: `js_statement_if_test_set( parse("if (a) {}"), parseStatement("b();") )`,
  expectText: `throws — arg 1 is not an expression node`,
  // machine-runnable form: import fn, build each arg by parsing, call, assert
  fn: "js_statement_if_test_set",
  args: [
    { code: "if (a) {}", parse: "statement" },
    { code: "b();", parse: "statement" },
  ],
  expect: "throw",
};
