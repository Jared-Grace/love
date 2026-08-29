import { arguments_assert } from "./arguments_assert.mjs";
import { js_function_declaration_params_ast_get } from "./js_function_declaration_params_ast_get.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { property_set } from "./property_set.mjs";
export function js_function_declaration_params_record(ast) {
  arguments_assert(arguments, 1);
  ("$plain ast");
  ("Turn the row of parameters on the function this file exports into one record it unpacks, keeping the same names in the same order.");
  ("THE NAMES DO NOT CHANGE, and that is the whole reason this is safe to run without reading the body. Every line inside goes on reading the same word it read before; what changes is only how those words arrive - as one thing handed over rather than fifteen things in a row that a caller has to keep in the right order.");
  ("THE NEW LIST IS PUT ON THE DECLARATION ITSELF AND NOT ON THE READING THAT FOUND IT. The reading beside this one hands back a record holding the declaration and its parameters, which is a fresh thing made to answer a question - writing to that changes nothing anybody will ever unparse, and the first run of this wrote every caller and left the function untouched, which is the one shape of half-done this move must never leave.");
  ("A parameter that is not a plain name is left for whoever calls this to refuse. A reading that quietly skipped one would hand back a record short of a name the body still reads, and the function would then be looking for something no caller was ever asked to send.");
  let v = js_function_declaration_params_ast_get(ast);
  let declaration = property_get(v, "declaration");
  let params = property_get(v, "params");
  let properties = [];
  for (let param of params) {
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
  let one = [pattern];
  property_set(declaration, "params", one);
  return properties;
}
