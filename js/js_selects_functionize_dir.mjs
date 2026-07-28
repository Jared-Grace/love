import { path_join } from "./path_join.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { list_map } from "./list_map.mjs";
import { file_read } from "./file_read.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_format } from "./js_format.mjs";
import { js_statement_find_call_named } from "./js_statement_find_call_named.mjs";
import { js_selects_functionize_local } from "./js_selects_functionize_local.mjs";
import { js_outside_move_dir } from "./js_outside_move_dir.mjs";
export async function js_selects_functionize_dir(
  dir,
  file_name,
  call_names,
  f_name_new,
) {
  "Pull a span out of one file in a flat folder into a function of its own and";
  "leave that function in a file of its own beside it. The hermetic core of the";
  "extracting verb, which is the shape a folder example can watch: two files go";
  "in and three come out.";
  "The span is named by the calls at its two ends, which is how the instructions";
  "spell this verb anyway - the ends are ordinary selections and nothing has to";
  "be written into the code first to mark them.";
  let f_file = text_combine_multiple([file_name, ".mjs"]);
  let f_path = path_join([dir, f_file]);
  let source = await file_read(f_path);
  let ast = js_parse(source);
  let names = text_split_comma(call_names);
  async function lambda_select(name) {
    let found = await js_statement_find_call_named(ast, name);
    return found;
  }
  ("The selector answers on a promise, so the mapping has to wait for each one.");
  ("Mapping without waiting hands the transform a list of promises, which reads");
  ("as two selections and is neither of them.");
  let selects = await list_map_async(names, lambda_select);
  await js_selects_functionize_local(ast, selects, f_name_new);
  await js_outside_move_dir(ast, dir);
  let unparsed = js_unparse(ast);
  let formatted = await js_format(unparsed);
  await file_overwrite(f_path, formatted);
}
