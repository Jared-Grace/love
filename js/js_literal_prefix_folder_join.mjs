import { arguments_assert } from "./arguments_assert.mjs";
import { assert_json } from "./assert_json.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_join_comma_space } from "./js_code_join_comma_space.mjs";
import { js_code_wrap_brackets } from "./js_code_wrap_brackets.mjs";
import { js_strings_code_replace_generic } from "./js_strings_code_replace_generic.mjs";
import { not } from "./not.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { text_quote_double } from "./text_quote_double.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
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
  ("Which words may be written over at all is not decided here. The sweep underneath leaves prose alone and leaves alone the places a rename must never follow, and it does so for both of the commands built on it, so what is left here is only the reading: does this word begin with the folder, and if it does, what should stand in its place.");
  let separated = text_ends_with(folder, "/");
  assert_json(separated, {
    hint: "the folder handed in does not end in a separator, so joining the rest of an address onto it would either lose the separator or double it - hand in the folder as it is spelled at the start of the addresses being replaced",
    folder,
  });
  let getter_code = js_code_call_args(folder_f_name, []);
  function join_code_or_null(value) {
    let begins = text_starts_with(value, folder);
    if (not(begins)) {
      return null;
    }
    let rest = text_prefix_without(value, folder);
    if (not(rest)) {
      return null;
    }
    let quoted = text_quote_double(rest);
    let joined = js_code_join_comma_space([getter_code, quoted]);
    let listed = js_code_wrap_brackets(joined);
    let code = js_code_call_args(fn_name("path_join"), [listed]);
    return code;
  }
  let changed = await js_strings_code_replace_generic(ast, join_code_or_null);
  return changed;
}
