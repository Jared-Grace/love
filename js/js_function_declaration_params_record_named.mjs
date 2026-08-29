import { arguments_assert } from "./arguments_assert.mjs";
import { js_function_declaration_params_ast_get } from "./js_function_declaration_params_ast_get.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_declaration_params_names_plain } from "./js_function_declaration_params_names_plain.mjs";
import { js_names_chosen_indices } from "./js_names_chosen_indices.mjs";
import { list_indices_to_items } from "./list_indices_to_items.mjs";
import { list_add } from "./list_add.mjs";
import { js_list_indices_record_gather } from "./js_list_indices_record_gather.mjs";
import { property_set } from "./property_set.mjs";
export function js_function_declaration_params_record_named(ast, chosen) {
  arguments_assert(arguments, 2);
  ("$plain ast");
  ("Gather just these parameters of the function this file exports into one record it unpacks, leaving every other parameter standing where it was.");
  ("THE NAMES DO NOT CHANGE, so the body goes on reading the same words and does not have to be looked at. What changes is only which of them arrive on their own and which arrive together inside one thing.");
  ("The record stands where the first of the gathered ones stood, so a parameter that was not gathered keeps the place it had. That is what lets this be used on a function whose row has one or two things worth keeping apart - a page to draw on, say - while the dozen settings behind them travel as one.");
  let v = js_function_declaration_params_ast_get(ast);
  let declaration = property_get(v, "declaration");
  let params = property_get(v, "params");
  let names = js_function_declaration_params_names_plain(declaration);
  let indices = js_names_chosen_indices(names, chosen);
  let taken = list_indices_to_items(params, indices);
  let properties = [];
  for (let param of taken) {
    let property = {
      type: "Property",
      key: param,
      value: param,
      kind: "init",
      method: false,
      shorthand: true,
      computed: false,
    };
    list_add(properties, property);
  }
  let pattern = {
    type: "ObjectPattern",
    properties: properties,
  };
  let kept = js_list_indices_record_gather(params, indices, pattern);
  property_set(declaration, "params", kept);
  return properties;
}
