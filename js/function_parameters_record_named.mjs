import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { list_size_greater_than } from "./list_size_greater_than.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
import { function_parameters_declaration } from "./function_parameters_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_declaration_params_names_plain } from "./js_function_declaration_params_names_plain.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { function_parameters_record_callers } from "./function_parameters_record_callers.mjs";
import { js_call_named_arguments_record_named_curried_right } from "./js_call_named_arguments_record_named_curried_right.mjs";
import { js_function_declaration_params_record_named_curried_right } from "./js_function_declaration_params_record_named_curried_right.mjs";
import { function_parameters_record_apply } from "./function_parameters_record_apply.mjs";
export async function function_parameters_record_named(f_name, chosen_words) {
  arguments_assert(arguments, 2);
  ("Gather just the named parameters of a function into one record it takes, leave its other parameters standing where they are, and rewrite every call in the repo to match, in a single move.");
  ("THE ONE BESIDE THIS GATHERS EVERYTHING AND THIS GATHERS A CHOSEN FEW, and the few are what a function usually wants. A drawing function's page and the thing it is drawing are worth their own places, because every call gives them something different; the dozen settings behind them are the same words at every call site and are what the row of arguments got long carrying.");
  ("THE NAMES INSIDE THE FUNCTION DO NOT CHANGE, so this is behaviour-preserving by reasoning and not by trying it. The body reads the same words afterwards as before. The record stands where the first chosen parameter stood, so everything not chosen keeps its place, and a caller reading the line finds the same things in the same order.");
  ("WHICH FEW TO CHOOSE IS A JUDGMENT AND IS WHY THIS TAKES THEM RATHER THAN FINDING THEM. A reading could work out which arguments never vary between call sites, and that would be a guess about what a person means to vary later. So the choice is asked for, and the move only checks that it can be carried out.");
  ("Running it a second time is refused rather than done twice, because a function already holding a record among its parameters no longer has the plain row this reads, and the refusal says so.");
  ("WHAT IS SHARED WITH THE MOVE BESIDE THIS IS NAMED AND WHAT IS NOT IS SPELLED HERE. Reading the declaration, refusing the callers that are out of reach, and writing the whole change are the same work in both and are asked for by name. The two refusals left standing here are this move's own: that at least two parameters were named, and that every name given is really a parameter.");
  let chosen = text_split_comma(chosen_words);
  let enough = list_size_greater_than(chosen, 1);
  true_is_assert_json(enough, {
    f_name,
    chosen,
    hint: "gathering one parameter into a record on its own would wrap a single thing and take nothing away - name at least two",
  });
  let read = await function_parameters_declaration(f_name);
  let declaration = property_get(read, "declaration");
  let size = property_get(read, "size");
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
  let f_names = await function_parameters_record_callers(f_name, names);
  let arguments_record = js_call_named_arguments_record_named_curried_right(
    f_name,
    names,
    chosen,
  );
  let params_record =
    js_function_declaration_params_record_named_curried_right(chosen);
  await function_parameters_record_apply(
    f_name,
    f_names,
    arguments_record,
    params_record,
  );
  let r = {
    f_name,
    chosen,
    names,
    files: f_names,
  };
  return r;
}
