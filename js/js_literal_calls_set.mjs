import { js_strings_add_reference_skip_nodes } from "./js_strings_add_reference_skip_nodes.mjs";
import { js_statement_expression_nodes } from "./js_statement_expression_nodes.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_parse_expression_replace } from "./js_parse_expression_replace.mjs";
import { js_strings_replace_generic } from "./js_strings_replace_generic.mjs";
import { list_includes } from "./list_includes.mjs";
import { add } from "./add.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function js_literal_calls_set(ast, literal, f_name) {
  arguments_assert(arguments, 3);
  ("Points every place in one file that spells a written word at the function that");
  ("hands that word back, and answers how many places it was.");
  ("Whether the word means the same thing here as it does there is not asked, and");
  ("that is the whole of the difference from the narrower one beside this. Asking it");
  ("would be guessing: two files spell a word alike for no reason at all about as");
  ("often as they spell it alike on purpose, and the two read identically until");
  ("something forces them apart. So the reading is the caller's, made once when they");
  ("name the file and the function, and what is done here is done on that reading.");
  ("What keeps that safe is not the guess this refuses to make - it is that a value");
  ("behind a name is never changed in place. The day one site wants a different word");
  ("it gets a second function holding it, and the sites move over one at a time, so");
  ("a word routed here on a reading that turns out wrong costs one move to undo and");
  ("nothing at all in the meantime.");
  ("Prose is left alone. A word standing on its own as a statement is something the");
  ("file says rather than something it uses, and a call put in its place would read");
  ("as a line that runs - which it would, doing nothing, forever.");
  ("The words a rename must not follow are left alone too, and not by anything");
  ("written here: the skip already used by the pass that promotes names covers the");
  ("argument of the frozen-word marker, the naming of a field, and the source of an");
  ("import. So a value already sitting in somebody's browser cannot be routed onto a");
  ("function by this, which is the one mistake it could make that no later edit here");
  ("could reach.");
  let changed = 0;
  let skip = js_strings_add_reference_skip_nodes(ast);
  let prose_nodes = js_statement_expression_nodes(ast);
  let call_code = js_code_call_args(f_name, []);
  function replace_try(value, node) {
    let same = equal(value, literal);
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
  await js_strings_replace_generic(ast, skip, replace_try);
  return changed;
}
