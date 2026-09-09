import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { repo_love_functions_names } from "./repo_love_functions_names.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_declaration_working_shape } from "./js_function_declaration_working_shape.mjs";
import { js_function_declaration_params_names } from "./js_function_declaration_params_names.mjs";
import { list_size } from "./list_size.mjs";
import { list_join_colon } from "./list_join_colon.mjs";
import { property_set } from "./property_set.mjs";
import { js_functions_nested_declarations } from "./js_functions_nested_declarations.mjs";
import { js_function_declaration_free_names } from "./js_function_declaration_free_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
import { property_initialize_list } from "./property_initialize_list.mjs";
import { list_add } from "./list_add.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_map } from "./list_map.mjs";
import { list_unique } from "./list_unique.mjs";
import { less_than } from "./less_than.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export async function functions_local_duplicate_unnamed(least) {
  "$plain least";
  "Every run of work this repo writes out as a function inside another function, in more places than the number handed in, with no shared function anywhere that already does the same work - worst first.";
  ("It is the other half of the question ",
    fn_name("functions_local_duplicate_named"),
    " answers. That one is handed a shared name and finds the copies of it; this one is handed no name at all, because the copies it is looking for are the ones where nobody has written the shared function yet. A reader with only the first half can collapse what is already named and never learns what is missing, which is the more valuable of the two answers - a copy of a named function costs a line, and a run nobody has named costs a name.");
  ("Two copies are the same run when their working shape and the number of things they are handed both match. The shape takes away the name the copy was given and the names it gave its own workings, so a mapper called class_count and a mapper called count_of are seen to be one run.");
  ("★ A COPY THAT READS A NAME FROM THE FUNCTION AROUND IT IS PASSED OVER, BECAUSE IT CANNOT BE PROMOTED. Every name such a copy reaches for from outside itself has to be a function this repo answers to; a name that is anything else is a local of its holder, and a shared function standing on its own could never see it. The names are read rather than the shape guessed at, so a copy that captures nothing but happens to look like one that does is still reported.");
  ("A run that some shared function already does is left out, and that is deliberate rather than an omission: it is already the first half's answer, and reporting it here would send a reader to write a name that exists.");
  ("The count handed in is how many different holding functions a run has to appear in before it is worth a name. Two is the honest floor and is where a reader should start; a higher number is for when the answer is long and only the worst of it is wanted.");
  arguments_assert(arguments, 1);
  let love = await repo_love_functions_names();
  let shared_keys = {};
  let by_key = {};
  for (let f_name of love) {
    let read = await function_parse_declaration(f_name);
    let holder = property_get(read, "declaration");
    let shape_own = js_function_declaration_working_shape(holder);
    let params_own = js_function_declaration_params_names(holder);
    let arity_own = list_size(params_own);
    let key_own = list_join_colon([arity_own, shape_own]);
    property_set(shared_keys, key_own, f_name);
    let ast = property_get(read, "ast");
    let nested = js_functions_nested_declarations(ast);
    for (let inner of nested) {
      let free = js_function_declaration_free_names(inner);
      let captures = false;
      for (let reached of free) {
        let answered = list_includes(love, reached);
        if (not(answered)) {
          captures = true;
        }
      }
      if (captures) {
        continue;
      }
      let shape = js_function_declaration_working_shape(inner);
      let params = js_function_declaration_params_names(inner);
      let arity = list_size(params);
      let key = list_join_colon([arity, shape]);
      let local_name = js_function_declaration_name(inner);
      let row = {};
      property_set(row, "f_name", f_name);
      property_set(row, "local_name", local_name);
      let sites = property_initialize_list(by_key, key);
      list_add(sites, row);
    }
  }
  function site_holder(row) {
    let held = property_get(row, "f_name");
    return held;
  }
  function group_functions(group) {
    let held = property_get(group, "functions");
    return held;
  }
  let keys = object_property_names(by_key);
  let groups = [];
  for (let key of keys) {
    let answered = property_get_or_null(shared_keys, key);
    let named = null_not_is(answered);
    if (named) {
      continue;
    }
    let sites = property_get(by_key, key);
    let holders = list_map(sites, site_holder);
    let distinct = list_unique(holders);
    let functions = list_size(distinct);
    let few = less_than(functions, least);
    if (few) {
      continue;
    }
    let group = {};
    property_set(group, "functions", functions);
    let value = list_size(sites);
    property_set(group, "sites", value);
    property_set(group, "key", key);
    property_set(group, "listed", sites);
    list_add(groups, group);
  }
  let ranked = list_sort_number_mapper_reverse(groups, group_functions);
  return ranked;
}
