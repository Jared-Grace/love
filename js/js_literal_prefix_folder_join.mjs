import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { add } from "./add.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_join_comma_space } from "./js_code_join_comma_space.mjs";
import { js_code_wrap_brackets } from "./js_code_wrap_brackets.mjs";
import { js_parse_expression_replace } from "./js_parse_expression_replace.mjs";
import { js_statement_expression_nodes } from "./js_statement_expression_nodes.mjs";
import { js_strings_add_reference_skip_nodes } from "./js_strings_add_reference_skip_nodes.mjs";
import { js_strings_replace_generic } from "./js_strings_replace_generic.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { text_quote_double } from "./text_quote_double.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { assert_json } from "./assert_json.mjs";
export async function js_literal_prefix_folder_join(
  ast,
  folder,
  folder_f_name,
) {
  "$plain folder";
  "$plain folder_f_name";
  arguments_assert(arguments, 3);
  ("Takes every address in one file that begins with a named folder and writes it as that folder's function with the rest joined on, and answers how many places it was.");
  ("The sibling beside this routes a word that is the whole of what a function hands back. An address is not that shape: what the function hands back is the folder, and what the file spells is the folder with a file name after it, so the two are never equal and the sibling passes over every one of them. That is why a room can move and fifty spellings of it go on naming where it used to be - none of them was ever a word any function returned.");
  ("The folder is required to end in a separator, and that is what makes this provable rather than likely. Joining the rest onto the folder puts exactly one separator between them; the address as spelled has exactly one there too, being the folder including its separator followed by the rest. So the two are the same piece of writing for every address this touches, whatever the rest happens to contain, and the check afterwards is only a check.");
  ("Prose is left alone, and so are the places a rename must never follow - the argument of the frozen-word marker, the naming of a field, the source of an import. Neither judgement is made here: both come from the skip the pass that promotes names already uses, so a word already sitting in somebody's browser cannot be routed onto a function by this.");
  let separated = text_ends_with(folder, "/");
  assert_json(separated, {
    hint: "the folder handed in does not end in a separator, so joining the rest of an address onto it would either lose the separator or double it - hand in the folder as it is spelled at the start of the addresses being replaced",
    folder,
  });
  let changed = 0;
  let skip = js_strings_add_reference_skip_nodes(ast);
  let prose_nodes = js_statement_expression_nodes(ast);
  let getter_code = js_code_call_args(folder_f_name, []);
  function replace_prefixed_try(value, node) {
    let begins = text_starts_with(value, folder);
    if (not(begins)) {
      return false;
    }
    let rest = text_prefix_without(value, folder);
    if (not(rest)) {
      return false;
    }
    let prose = list_includes(prose_nodes, node);
    if (prose) {
      return false;
    }
    let quoted = text_quote_double(rest);
    let joined = js_code_join_comma_space([getter_code, quoted]);
    let listed = js_code_wrap_brackets(joined);
    let code = js_code_call_args(fn_name("path_join"), [listed]);
    js_parse_expression_replace(code, node);
    changed = add(changed, 1);
    return true;
  }
  await js_strings_replace_generic(ast, skip, replace_prefixed_try);
  return changed;
}
