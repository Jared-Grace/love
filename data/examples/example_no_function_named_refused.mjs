import { function_name_full_assert } from "../../js/function_name_full_assert.mjs";
import { ai_log_entries } from "../../js/ai_log_entries.mjs";
import { js_code_call_args } from "../../js/js_code_call_args.mjs";
import { json_to } from "../../js/json_to.mjs";
export const example = {
  kind: "rejection",
  title: "The seam refuses a command that names no function",
  note: [
    { fn: function_name_full_assert.name },
    " guards the one seam every command passes through, and its own comparison cannot catch an empty name: unaliasing nothing gives nothing back, so the two agree. The seam then logged a line naming no command and complained about something else afterwards, and that single line among a hundred and seven thousand made ",
    { fn: ai_log_entries.name, call: true },
    " throw - killing both readings of the log, which are what say which commands to compose next. Refusing here happens before anything is written down.",
  ],
  call: js_code_call_args(function_name_full_assert.name, [json_to("")]),
  expectText: `throws — a command has to say which function to run`,
  fn: function_name_full_assert.name,
  args: [{ value: "", parse: "value" }],
  expect: "throw",
};
