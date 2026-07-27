import { js_list_type } from "./js_list_type.mjs";
import { js_object_expression_properties } from "./js_object_expression_properties.mjs";
import { js_property_key_name_try } from "./js_property_key_name_try.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { property_get } from "./property_get.mjs";
export function js_duplicate_keys(ast) {
  "Every name a set of settings in this file gives twice. Saying a name twice is";
  "not an error to the language — the later one silently wins and the earlier one";
  "is thrown away — so a register holding two entries under one key loses one of";
  "them with nothing anywhere reporting it.";
  "It is always a mistake rather than a style: nobody means to write an entry";
  "that has no effect, and the one discarded is the one written first, which is";
  "usually the one somebody thought about.";
  let duplicates = [];
  let vs = js_list_type(ast, "ObjectExpression");
  for (let v of vs) {
    let node = property_get(v, "node");
    let properties = js_object_expression_properties(node);
    let seen = [];
    for (let property of properties) {
      let key_name = js_property_key_name_try(property);
      let named = null_not_is(key_name);
      if (named) {
        let twice = list_includes(seen, key_name);
        if (twice) {
          list_add_if_not_includes(duplicates, key_name);
        }
        list_add(seen, key_name);
      }
    }
  }
  return duplicates;
}
