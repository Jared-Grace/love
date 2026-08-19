import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_numbers_replace_generic } from "./js_numbers_replace_generic.mjs";
import { js_object_key_nodes } from "./js_object_key_nodes.mjs";
import { js_parse_expression_replace } from "./js_parse_expression_replace.mjs";
import { js_statement_expression_nodes } from "./js_statement_expression_nodes.mjs";
import { list_includes } from "./list_includes.mjs";
import { add } from "./add.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function js_number_calls_set(ast, number, f_name) {
  "Points every place in one file that writes out a number at the function that hands that number back, and answers how many places it was.";
  "Whether the number means the same thing here as it does there is not asked, and cannot be. Two files write 180 for reasons that have nothing to do with each other far more often than words collide, because there are only so many round numbers. So the reading is the caller's, made once when they name the file and the function, and what is done here is done on that reading.";
  "What keeps that safe is the same thing that keeps it safe for words: a value behind a name is never changed in place. The day one site wants a different number it gets a second function holding it, and the sites move over one at a time.";
  "The naming of a field is left alone. A number written before a colon is the name of a field spelled with digits, and a call put in its place would not be a call - it would rename the field to the letters of the call, silently, and the file would still parse.";
  "Prose is left alone for the same reason it is when words are routed: a value standing on its own as a statement is something the file says rather than something it uses.";
  arguments_assert(arguments, 3);
  let changed = 0;
  let skip = js_object_key_nodes(ast);
  let prose_nodes = js_statement_expression_nodes(ast);
  let call_code = js_code_call_args(f_name, []);
  function replace_try(value, node) {
    let same = equal(value, number);
    if (not(same)) {
      return false;
    }
    let prose = list_includes(prose_nodes, node);
    if (prose) {
      return false;
    }
    js_parse_expression_replace(call_code, node);
    changed = add(changed, 1);
    return true;
  }
  await js_numbers_replace_generic(ast, skip, replace_try);
  return changed;
}
