import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { list_size_greater_than } from "./list_size_greater_than.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_declaration_params_get } from "./js_function_declaration_params_get.mjs";
import { list_size } from "./list_size.mjs";
import { js_function_declaration_params_names_plain } from "./js_function_declaration_params_names_plain.mjs";
import { equal } from "./equal.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { data_identifiers_search_names } from "./data_identifiers_search_names.mjs";
import { functions_name_value_use_names } from "./functions_name_value_use_names.mjs";
import { functions_call_named_arity_other_names } from "./functions_call_named_arity_other_names.mjs";
import { js_call_named_arguments_record_named_curried_right } from "./js_call_named_arguments_record_named_curried_right.mjs";
import { functions_transform_list } from "./functions_transform_list.mjs";
import { js_function_declaration_params_record_named_curried_right } from "./js_function_declaration_params_record_named_curried_right.mjs";
import { function_transform } from "./function_transform.mjs";
import { function_arguments_assert_count_repair } from "./function_arguments_assert_count_repair.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { function_auto_multiple } from "./function_auto_multiple.mjs";
export async function function_parameters_record_named(f_name, chosen_words) {
  arguments_assert(arguments, 2);
  ("Gather just the named parameters of a function into one record it takes, leave its other parameters standing where they are, and rewrite every call in the repo to match, in a single move.");
  ("THE ONE BESIDE THIS GATHERS EVERYTHING AND THIS GATHERS A CHOSEN FEW, and the few are what a function usually wants. A drawing function's page and the thing it is drawing are worth their own places, because every call gives them something different; the dozen settings behind them are the same words at every call site and are what the row of arguments got long carrying.");
  ("THE NAMES INSIDE THE FUNCTION DO NOT CHANGE, so this is behaviour-preserving by reasoning and not by trying it. The body reads the same words afterwards as before. The record stands where the first chosen parameter stood, so everything not chosen keeps its place, and a caller reading the line finds the same things in the same order.");
  ("WHICH FEW TO CHOOSE IS A JUDGMENT AND IS WHY THIS TAKES THEM RATHER THAN FINDING THEM. A reading could work out which arguments never vary between call sites, and that would be a guess about what a person means to vary later. So the choice is asked for, and the move only checks that it can be carried out.");
  ("Running it a second time is refused rather than done twice, because a function already holding a record among its parameters no longer has the plain row this reads, and the refusal says so.");
  let chosen = text_split_comma(chosen_words);
  let enough = list_size_greater_than(chosen, 1);
  true_is_assert_json(enough, {
    f_name,
    chosen,
    hint: "gathering one parameter into a record on its own would wrap a single thing and take nothing away - name at least two",
  });
  let parsed = await function_parse_declaration(f_name);
  let declaration = property_get(parsed, "declaration");
  let params = js_function_declaration_params_get(declaration);
  let size = list_size(params);
  let names = js_function_declaration_params_names_plain(declaration);
  let plain_size = list_size(names);
  let all_plain = equal(size, plain_size);
  true_is_assert_json(all_plain, {
    f_name,
    size,
    names,
    hint: "one of these parameters is not a plain name - either it is unpacked already, which is what this function leaves behind and so means the move has been made, or it needs a name of its own before it can be gathered",
  });
  let missing = [];
  for (let name of chosen) {
    let held = list_includes(names, name);
    if (not(held)) {
      list_add(missing, name);
    }
  }
  list_empty_is_assert_json(missing, {
    f_name,
    names,
    missing,
    hint: "these are not parameters of this function, so there is nothing to gather under them",
  });
  let f_names = await data_identifiers_search_names(f_name);
  let handing = await functions_name_value_use_names(f_names, f_name);
  list_empty_is_assert_json(handing, {
    f_name,
    handing,
    hint: "this function is handed over as a value, so whoever it was handed to decides how it is called and that call is nowhere in sight - the shape of its arguments belongs to that caller and cannot be changed from here",
  });
  let other = await functions_call_named_arity_other_names(
    f_names,
    f_name,
    names,
  );
  list_empty_is_assert_json(other, {
    f_name,
    names,
    other,
    hint: "these files call it handing over some other number of things, so there is no way to say which name each thing was meant for - put those calls right first",
  });
  let arguments_record = js_call_named_arguments_record_named_curried_right(
    f_name,
    names,
    chosen,
  );
  await functions_transform_list(f_names, arguments_record);
  let params_record =
    js_function_declaration_params_record_named_curried_right(chosen);
  await function_transform(f_name, params_record);
  ("The line at the head saying how many things arrive was written when the function was made to stand on its own, and gathering some of the row into a record does not go back to it.");
  await function_arguments_assert_count_repair(f_name);
  let names_comma = list_join_comma(f_names);
  await function_auto_multiple(names_comma);
  let r = {
    f_name,
    chosen,
    names,
    files: f_names,
  };
  return r;
}
