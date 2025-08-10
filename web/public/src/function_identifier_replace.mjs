import {list_empty_is} from './list_empty_is.mjs';
import {assert_not} from './assert_not.mjs';
import {data_function_current_get} from './data_function_current_get.mjs';
import {object_replace} from './object_replace.mjs';
import {js_parse_expression} from './js_parse_expression.mjs';
import {js_identifiers_named} from './js_identifiers_named.mjs';
import {each} from "./each.mjs";
import {function_transform} from "./function_transform.mjs";
import {js_identifiers} from "./js_identifiers.mjs";
import {list_filter} from "./list_filter.mjs";
import {marker} from "./marker.mjs";
import {object_property_get} from "./object_property_get.mjs";
export async function function_identifier_replace(identifier_name, replacement) {
  let f_name = data_function_current_get();
  await function_transform(f_name, ast => {
    let identifiers_named = js_identifiers_named(ast, identifier_name);
    assert_not(list_empty_is(identifiers_named));
    marker();
    each(identifiers_named, i => object_replace(i, js_parse_expression(replacement)));
  });
}
