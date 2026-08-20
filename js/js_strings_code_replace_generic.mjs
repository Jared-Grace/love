import { add } from "./add.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse_expression_replace } from "./js_parse_expression_replace.mjs";
import { js_statement_expression_nodes } from "./js_statement_expression_nodes.mjs";
import { js_strings_add_reference_skip_nodes } from "./js_strings_add_reference_skip_nodes.mjs";
import { js_strings_replace_generic } from "./js_strings_replace_generic.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
export async function js_strings_code_replace_generic(ast, code_or_null) {
  "Offers every written-out word in one file to a reader that answers with the code to put in its place, or with nothing to leave it alone, and says how many were replaced.";
  "What the reader decides is the whole of what changes between the commands built on this. One asks whether the word is the same word a function hands back; another asks whether it begins with a folder and joins the rest onto that folder's function. Everything either of them does around that question is the same, and it was written out twice before this existed - which is how the duplicate ratchet found them, having been given no reason to think they were siblings.";
  "Prose is left alone, and that judgement is here rather than in the reader. A word standing on its own as a statement is something the file says rather than something it uses, and a call put in its place would read as a line that runs - which it would, doing nothing, forever. A reader is asked what a word should become and would have to be told, again and again, that some words are not being used at all.";
  "The places a rename must never follow are left alone too, and not by anything written here: the skip already used by the pass that promotes names covers the argument of the frozen-word marker, the naming of a field, and the source of an import. So a value already sitting in somebody's browser cannot be routed onto a function by anything built on this.";
  "The count is kept here for the same reason. Every caller wanted it, none of them wanted to keep it themselves, and a tally a caller keeps is one a caller can forget to add to.";
  arguments_assert(arguments, 2);
  let changed = 0;
  let skip = js_strings_add_reference_skip_nodes(ast);
  let prose_nodes = js_statement_expression_nodes(ast);
  function replace_try(value, node) {
    let prose = list_includes(prose_nodes, node);
    if (prose) {
      return false;
    }
    let code = code_or_null(value);
    if (not(code)) {
      return false;
    }
    js_parse_expression_replace(code, node);
    changed = add(changed, 1);
    return true;
  }
  await js_strings_replace_generic(ast, skip, replace_try);
  return changed;
}
