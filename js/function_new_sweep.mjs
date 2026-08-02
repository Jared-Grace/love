import { js_function_declaration_property_params_names } from "./js_function_declaration_property_params_names.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_parse_declaration_unaliased } from "./function_parse_declaration_unaliased.mjs";
import { list_skip_1 } from "./list_skip_1.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_map } from "./list_map.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { function_new_transform } from "./function_new_transform.mjs";
import { js_find_body_block } from "./js_find_body_block.mjs";
import { js_block_body_add_code } from "./js_block_body_add_code.mjs";
import { function_params_new } from "./function_params_new.mjs";
import { function_auto } from "./function_auto.mjs";
export async function function_new_sweep(f_name_single, f_name_new) {
  "Writes the whole command that asks one question of several names - the file, the parameters, the taking apart of the joined word, the call to the single form, and the answer under each name - and leaves only the prose to add";
  "The log reads a sweep as the commonest missing command there is, and every one written so far was written by hand the same way: the singular is called once per name and what it answers is kept under the name that asked. Writing that out cost a session each time, and three of them had already drifted apart before they were collapsed onto one shared body";
  "The single form is named first and the new one second, the same order every other command that builds one function out of another takes";
  "Everything after the first parameter is carried straight through, because a question asked of several names is still asked with the same everything else - what is swept is the name, never the rest";
  let r = await function_parse_declaration_unaliased(f_name_single);
  let param_names = js_function_declaration_property_params_names(
    r,
    "declaration",
  );
  let params_sweep = list_skip_1(param_names);
  list_add_first(params_sweep, "names_comma");
  let params_comma = list_join_comma(params_sweep);
  function empty_of(param_name) {
    let r2 = "";
    return r2;
  }
  let defaults = list_map(params_sweep, empty_of);
  let defaults_comma = list_join_comma(defaults);
  let args = list_skip_1(param_names);
  list_add_first(args, "name_one");
  let args_comma = list_join_comma(args);
  let one_text = text_combine_multiple([
    "function answer_one(name_one) { let answer_found = ",
    f_name_single,
    "(",
    args_comma,
    "); return answer_found; }",
  ]);
  async function lambda(ast) {
    let block = js_find_body_block(ast);
    let f_name = fn_name("text_split_comma_dot_trim");
    let code = text_combine_multiple([
      "let names = ",
      f_name,
      "(names_comma);",
    ]);
    js_block_body_add_code(ast, [block], code);
    js_block_body_add_code(ast, [block], one_text);
    let f_name2 = fn_name("list_map_async_record_try");
    let code2 = text_combine_multiple([
      "let found = ",
      f_name2,
      "(names, answer_one);",
    ]);
    js_block_body_add_code(ast, [block], code2);
    js_block_body_add_code(ast, [block], "return found;");
  }
  await function_new_transform(f_name_new, lambda);
  await function_params_new(f_name_new, params_comma, defaults_comma);
  await function_auto(f_name_new);
  return f_name_new;
}
