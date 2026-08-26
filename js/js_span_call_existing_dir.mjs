import { arguments_assert } from "./arguments_assert.mjs";
import { js_file_dir_path } from "./js_file_dir_path.mjs";
import { file_read } from "./file_read.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_statement_find_name_body } from "./js_statement_find_name_body.mjs";
import { list_map } from "./list_map.mjs";
import { function_span_scratch_name } from "./function_span_scratch_name.mjs";
import { js_selects_functionize_local } from "./js_selects_functionize_local.mjs";
import { js_find_function_declaration_named } from "./js_find_function_declaration_named.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_codes_function_work_same_discarding_is } from "./js_codes_function_work_same_discarding_is.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
import { js_identifier_rename } from "./js_identifier_rename.mjs";
import { property_get } from "./property_get.mjs";
import { list_remove } from "./list_remove.mjs";
import { js_format } from "./js_format.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function js_span_call_existing_dir(
  dir,
  f_name,
  address_from,
  address_to,
  f_name_call,
) {
  arguments_assert(arguments, 5);
  ("Points a run of lines in one file of a flat folder at a function that already lives in the file next door, leaving the run as a call to it. The hermetic core of the verb that retires a run written out by hand in favour of a name that was already there.");
  ("Two files go in and one comes out changed, which is the shape a folder example can watch. The whole-repo command reaches the repo's own folder to find both functions and writes back into it, so an example of it would edit the source tree rather than a sandbox; here the folder is the first argument and nothing outside it is opened.");
  ("The two ends are addressed by a name written somewhere in them, exactly as the whole-repo command addresses them, so the arguments an example carries are the arguments that command really takes.");
  ("Nothing is written until the two have been held against each other, so the refusal needs no putting back: it throws with the piece that came out, and the folder is exactly as it was handed over. The whole-repo command has to restore the holder from its own text at that point, because it cuts into a real file before it can read the cut.");
  let f_path = js_file_dir_path(dir, f_name);
  let source = await file_read(f_path);
  let ast = js_parse(source);
  let addresses = [address_from, address_to];
  function lambda_select(address) {
    let found = js_statement_find_name_body(ast, address);
    return found;
  }
  let selects = list_map(addresses, lambda_select);
  let f_name_new = function_span_scratch_name(f_name);
  await js_selects_functionize_local(ast, selects, f_name_new);
  let declaration = js_find_function_declaration_named(ast, f_name_new);
  let cut = js_unparse(declaration);
  let path_call = js_file_dir_path(dir, f_name_call);
  let existing = await file_read(path_call);
  let same = js_codes_function_work_same_discarding_is(cut, existing);
  true_is_assert_json(same, {
    f_name,
    f_name_call,
    why: "the run came out as a function that does different work from the one it was to be pointed at, so nothing was changed",
    cut,
  });
  js_identifier_rename(ast, f_name_new, f_name_call);
  let body = property_get(ast, "body");
  list_remove(body, declaration);
  let unparsed = js_unparse(ast);
  let formatted = await js_format(unparsed);
  await file_overwrite(f_path, formatted);
}
