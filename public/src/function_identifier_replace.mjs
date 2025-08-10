import {js_identifiers_named} from './js_identifiers_named.mjs';
import {each} from "./each.mjs";
import {function_transform} from "./function_transform.mjs";
import {js_identifiers} from "./js_identifiers.mjs";
import {list_filter} from "./list_filter.mjs";
import {marker} from "./marker.mjs";
import {object_property_get} from "./object_property_get.mjs";
export async function function_identifier_replace(identifier_name) {
  await function_transform(f_name, ast => {
    let identifiers_named = js_identifiers_named(ast, identifier_name);
    marker();
    each(identifiers_named, i => object_replace(i));
  });
}
