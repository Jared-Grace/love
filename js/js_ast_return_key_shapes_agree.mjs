import { js_ast_return_key_shapes_agree_function_visit } from "./js_ast_return_key_shapes_agree_function_visit.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_visit_function_nodes } from "./js_visit_function_nodes.mjs";
export function js_ast_return_key_shapes_agree(ast) {
  "$plain ast";
  arguments_assert(arguments, 1);
  ("Makes every way out of every function written in this file offer the caller the same words, by naming in each record the keys its siblings carry and it does not, each holding nothing.");
  ("The mend for what the return-shape gate names, and the reason it is one command rather than a run of hand edits: which keys are missing from which record is read off the file itself, so it cannot be got wrong and cannot go stale. A record widened by hand is one more place a later path can be written from memory.");
  ("Nothing already written is touched. A key a record already names keeps whatever it holds, so a run over a file that already agrees changes nothing at all, and running it twice is the same as running it once.");
  ("WHAT IT CANNOT DECIDE IS WHETHER THE DISAGREEMENT WAS MEANT. A function answering with one word or another on purpose - a value or a refusal, and never both - would be made to answer with both words and one of them empty, which is not what its author wrote. So it is asked for one function at a time by somebody who has read it, and never of the whole repo at once.");
  ("A record handed back from two ways out is widened once, because the same record is the same record however many returns reach it.");
  function function_visit(visited) {
    let r = js_ast_return_key_shapes_agree_function_visit(visited);
    return r;
  }
  js_visit_function_nodes(ast, function_visit);
}
