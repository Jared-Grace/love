import { add } from "./add.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_function_declaration_to_block_body } from "./js_function_declaration_to_block_body.mjs";
import { js_parse_statement_module } from "./js_parse_statement_module.mjs";
import { js_statements_span_cuttable_is } from "./js_statements_span_cuttable_is.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_slice_include } from "./list_slice_include.mjs";
export function js_code_span_cuttable_is(code, from, to) {
  arguments_assert(arguments, 3);
  (
    "Whether a run of lines could be pulled out of a written-out function without any of the silent wrongs, asked of the words themselves rather than of a tree somebody has already built."
  );
  (
    "Written for a corpus to ask. A case is a small function spelled out in full and two line numbers, and the whole of the turning of that into a run and the lines behind it lives here rather than in the gate - so the gate says only which cases there are and what each one should answer."
  );
  (
    "The lines are counted from the top of the body, every line, prose and all, which is the same counting the proposer walks by. Nothing is written and the words are read once and thrown away."
  );
  let declaration = js_parse_statement_module(code);
  let statements = js_function_declaration_to_block_body(declaration);
  let span = list_slice_include(statements, from, to);
  let after = add(to, 1);
  let tail = list_skip(statements, after);
  let cuttable = js_statements_span_cuttable_is(span, tail);
  return cuttable;
}
