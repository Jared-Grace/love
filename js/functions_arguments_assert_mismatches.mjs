import { arguments_assert } from "./arguments_assert.mjs";
import { repo_functions_names } from "./repo_functions_names.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_arguments_assert_count_or_null } from "./js_function_arguments_assert_count_or_null.mjs";
import { js_function_arguments_assert_each_size_or_null } from "./js_function_arguments_assert_each_size_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { add } from "./add.mjs";
import { js_function_declaration_params_get } from "./js_function_declaration_params_get.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_arguments_assert_mismatches() {
  arguments_assert(arguments, 0);
  ("Every function whose own argument check disagrees with its own parameter list, and how many were held up against themselves to find them.");
  ("A function states the number of things it takes twice over - as its parameters, and as the check at the top of its body - and the two are written at different moments. Once they part, the function throws for every caller that was right, and it throws saying the caller passed the wrong count, which sends whoever reads it to the calling file where nothing is wrong at all.");
  ("Nothing else here asks this. The neighbour comparing calls against parameters is asking what callers do; a function disagreeing with itself is already wrong with no caller involved. There is a command that puts the two back together, but only one thing ever calls it - the command that changes a parameter list - so a parameter added any other way leaves the disagreement standing.");
  ("Both ways of counting are asked about, the bare number and the list of tests, because a function carries one or the other and either can be left behind. The list of tests is guarded once already, where it is written, but not afterwards.");
  ("Functions making no check at all are passed over rather than blamed. The check is added where it is wanted rather than everywhere, so its absence is a choice somebody made.");
  let names = await repo_functions_names("love");
  let offenders = [];
  let walked = 0;
  for (let f_name of names) {
    let parsed = await function_parse_declaration(f_name);
    let declaration = property_get(parsed, "declaration");
    let counted = js_function_arguments_assert_count_or_null(declaration);
    let listed = js_function_arguments_assert_each_size_or_null(declaration);
    let bare = null_is(counted);
    let asserted = bare ? listed : counted;
    let unchecked = null_is(asserted);
    if (unchecked) {
      continue;
    }
    walked = add(walked, 1);
    let params = js_function_declaration_params_get(declaration);
    let declared = list_size(params);
    let agrees = equal(declared, asserted);
    if (agrees) {
      continue;
    }
    let offence = text_combine_multiple([
      f_name,
      " takes ",
      declared,
      " but checks for ",
      asserted,
    ]);
    list_add(offenders, offence);
  }
  let r = {
    walked,
    offenders,
  };
  return r;
}
