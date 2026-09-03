import { arguments_assert } from "./arguments_assert.mjs";
import { function_exists } from "./function_exists.mjs";
import { property_get } from "./property_get.mjs";
import { false_is_assert_json } from "./false_is_assert_json.mjs";
import { function_parse } from "./function_parse.mjs";
import { js_imports_package_lines } from "./js_imports_package_lines.mjs";
import { function_select_apply_args_auto } from "./function_select_apply_args_auto.mjs";
import { function_import_line_add } from "./function_import_line_add.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { function_auto_multiple } from "./function_auto_multiple.mjs";
export async function function_nested_lift_generic(
  f_name,
  nested_name,
  f_name_new,
  select_fn_name,
  apply_fn_name,
) {
  arguments_assert(arguments, 5);
  ("Move a function written inside the named one out to stand under a name of its own, by whichever way of finding it and whichever way of moving it are handed in.");
  ("Two moves make this cut and they differ in exactly two names: one takes the name away with the body and rewrites every call, the other leaves the name behind on a line that calls the moved body. Everything around those two names was written twice - the same refusal of a name already spoken for, the same handing over to the shared select-and-apply, the same tidying of both files afterwards - and written twice it can be improved on one side only, which is the way a shared ending fails.");
  ("It refuses a name something already answers to, whichever move is being made, for the same reason every cut here does - two functions under one name is the failure with no error, because both files load and which one a caller reaches is decided by whichever import got written.");
  ("Both files are tidied rather than only the new one. The one left behind has just gained an import and, in one of the two moves, a whole new line, so a run that tidied only what it created would record a file that no longer loads.");
  ("THE IMPORTS OF THINGS THIS REPO DOES NOT HOLD ARE CARRIED ACROSS BY HAND, BECAUSE NOTHING ELSE CAN WORK THEM OUT. Every import written for the file that lands is worked back from a name this repo answers to, which finds every file here and nothing outside it. So a body reading a library and moved out to stand on its own used to land in a file that names that library and imports nothing, and the move answered success: the file parses, canonicalises and commits, and throws the first time it is run. Measured 2026-09-03 by moving a body reading express out on its own - the new file read express and no line brought it in.");
  ("They are read before the move and written to both files afterwards, and both halves of that matter. Before, because the file they are read from is about to be rewritten. Both files, because which of the two still needs the library is not known here - the tidying that follows takes out whichever of them turns out not to, so handing each file everything is what makes this total rather than a guess.");
  let search = await function_exists(f_name_new);
  let taken = property_get(search, "exists");
  false_is_assert_json(taken, {
    hint: "a function already answers to this name, so the one inside would be moved out under a name that is already spoken for - pick another, or fold onto the one that is there if it is really the same work",
    f_name_new,
  });
  let parsed = await function_parse(f_name);
  let ast = property_get(parsed, "ast");
  let import_lines = js_imports_package_lines(ast);
  let output = await function_select_apply_args_auto(
    f_name,
    select_fn_name,
    nested_name,
    apply_fn_name,
    f_name_new,
  );
  let names = [f_name, f_name_new];
  for (let name of names) {
    for (let line of import_lines) {
      await function_import_line_add(name, line);
    }
  }
  let names_comma = list_join_comma(names);
  await function_auto_multiple(names_comma);
  return output;
}
