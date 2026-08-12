import { js_function_declaration_params_ast_get } from "./js_function_declaration_params_ast_get.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_declaration_param_named_assert } from "./js_function_declaration_param_named_assert.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_file_dir_path } from "./js_file_dir_path.mjs";
import { function_identifier_replace_lambda } from "./function_identifier_replace_lambda.mjs";
import { permission_plain_marker } from "./permission_plain_marker.mjs";
import { text_combine } from "./text_combine.mjs";
import { js_strings_text_replace } from "./js_strings_text_replace.mjs";
import { file_js_transform } from "./file_js_transform.mjs";
export async function js_identifier_param_rename_dir(
  dir,
  f_name,
  name,
  name_after,
) {
  arguments_assert(arguments, 4);
  ("Give one of a function's parameters a different name across a flat folder of modules, one file per function. Only the file holding the function is opened, because a parameter's name is spelled nowhere else: a call hands its arguments over in order and never says what the far end calls them.");
  ("The hermetic heart of the repo-wide parameter rename, so the corpus can run it inside a temporary folder rather than against every file there is.");
  ("It refuses a word that is not a parameter, and asks that question with the same line the whole-repo command asks it with. A twin that carries the mechanism without the guard is proving something weaker than what really runs: the pass underneath treats a name it cannot find as nothing to do, so a mistyped parameter would leave the file untouched and report a clean run.");
  ("The declaration that a parameter carries ordinary data moves with it. That declaration is written out as text rather than as a mention of the parameter, so the pass that moves every mention of a name walks straight past it - and what is left behind names a parameter the function no longer has, which the place reading these declarations sees as nothing said rather than as a mistake. Both halves are done in one opening of the file so neither can be run without the other.");
  let def_path = js_file_dir_path(dir, f_name);
  let replace = function_identifier_replace_lambda(name, name_after);
  let plain_prefix = permission_plain_marker();
  let marker_before = text_combine(plain_prefix, name);
  let marker_after = text_combine(plain_prefix, name_after);
  function edit(ast) {
    let got = js_function_declaration_params_ast_get(ast);
    let declaration = property_get(got, "declaration");
    js_function_declaration_param_named_assert(declaration, f_name, name);
    replace(ast);
    js_strings_text_replace(ast, marker_before, marker_after);
  }
  await file_js_transform(def_path, edit);
}
