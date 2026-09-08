import { arguments_assert } from "./arguments_assert.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_declaration_working_shape } from "./js_function_declaration_working_shape.mjs";
import { js_function_declaration_params_names } from "./js_function_declaration_params_names.mjs";
import { list_size } from "./list_size.mjs";
import { repo_love_functions_names } from "./repo_love_functions_names.mjs";
import { equal } from "./equal.mjs";
import { js_function_declaration_personal_names } from "./js_function_declaration_personal_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { js_functions_nested_declarations } from "./js_functions_nested_declarations.mjs";
import { not } from "./not.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { list_map } from "./list_map.mjs";
import { list_unique } from "./list_unique.mjs";
export async function functions_local_duplicate_named(f_name_shared) {
  "Every function in this repo that writes out, as a function inside itself, the very work the named shared function already does - each one named beside the private name it gave that copy.";
  "A shared run of work between two whole functions has three readings watching it, and a whole function written inside another one has none. That is the shape a helper takes before anybody names it: a reader wants the worst row first, so it writes three lines that lift one field off a row, and the next reader of the next reading writes the same three lines under a different name. Nothing goes red, because each copy sits inside a different function and the readings that group functions by their runs are looking one level up.";
  "What makes them comparable is the shape, which takes away the name the copy was given and the names it gave its own workings. So a copy called row_sightings with a local called sightings and a copy called sightings_of with a local called seen are seen to be the same three lines, which is what a reader comparing text never sees.";
  "The number of things handed in has to match as well as the shape. A body that only ever reads the first of its parameters would otherwise be found equal to a body taking one, and a call written against the shared name would then be handed one argument where two were written.";
  "★ A COPY THAT REACHES OUTSIDE ITSELF CANNOT MATCH, AND THAT IS THE SAFETY. Only the names a function chose for itself are blanked, so a copy reading a name from the function around it keeps that name in its shape and no shared function standing on its own can carry it. There is no separate test for capture because the shape already is one.";
  "A function that already binds the shared name for something of its own is passed over. Pointing its calls at the shared function would reach whatever it called that instead, which is the one way this collapse could quietly change what runs.";
  arguments_assert(arguments, 1);
  let parsed = await function_parse_declaration(f_name_shared);
  let declaration = property_get(parsed, "declaration");
  let shape_shared = js_function_declaration_working_shape(declaration);
  let params_shared = js_function_declaration_params_names(declaration);
  let arity = list_size(params_shared);
  let love = await repo_love_functions_names();
  let listed = [];
  for (let f_name of love) {
    let itself = equal(f_name, f_name_shared);
    if (itself) {
      continue;
    }
    let read = await function_parse_declaration(f_name);
    let holder = property_get(read, "declaration");
    let personal = js_function_declaration_personal_names(holder);
    let taken = list_includes(personal, f_name_shared);
    if (taken) {
      continue;
    }
    let ast = property_get(read, "ast");
    let nested = js_functions_nested_declarations(ast);
    for (let inner of nested) {
      let shape = js_function_declaration_working_shape(inner);
      let alike = equal(shape, shape_shared);
      if (not(alike)) {
        continue;
      }
      let params = js_function_declaration_params_names(inner);
      let count = list_size(params);
      let fits = equal(count, arity);
      if (not(fits)) {
        continue;
      }
      let local_name = js_function_declaration_name(inner);
      let row = {};
      property_set(row, "f_name", f_name);
      property_set(row, "local_name", local_name);
      list_add(listed, row);
    }
  }
  function holder_of(row) {
    let held = property_get(row, "f_name");
    return held;
  }
  let holders = list_map(listed, holder_of);
  let answer = {};
  property_set(answer, "shape", shape_shared);
  property_set(answer, "arity", arity);
  let list = list_unique(holders);
  let value = list_size(list);
  property_set(answer, "functions", value);
  let value2 = list_size(listed);
  property_set(answer, "sites", value2);
  property_set(answer, "listed", listed);
  return answer;
}
