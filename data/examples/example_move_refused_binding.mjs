import { js_statements_move_binding_assert } from "../../js/js_statements_move_binding_assert.mjs";
export const example = {
  kind: "rejection",
  title: "Refuse to move a line past the lines that read it",
  note: [
    "The judgement inside the move, asked on its own. ",
    { fn: js_statements_move_binding_assert.name },
    " is handed the line being moved and the lines it would travel past, and ",
    "refuses because the second reads what the first makes — moving it down ",
    "would leave that read pointing at nothing. The direction decides which of ",
    "two questions to ask, and only two exist: going down, what the moved line ",
    { code: "makes" },
    "; going up, what it ",
    { code: "reads" },
    ". Checked directly rather than through the whole transform, so a failure ",
    "here names the judgement and not the arithmetic around it.",
  ],
  call: `${js_statements_move_binding_assert.name}([let first = list_first(ast)], [let sized = list_size(first)], true)`,
  expectText: `throws — the line it would move past is reading what it makes`,
  fn: js_statements_move_binding_assert.name,
  args: [
    { parse: "statements", code: ["let first = list_first(ast);"] },
    { parse: "statements", code: ["let sized = list_size(first);"] },
    { parse: "value", value: true },
  ],
  expect: "throw",
};
