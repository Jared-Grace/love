import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { js_property_key_name_try } from "./js_property_key_name_try.mjs";
import { js_object_expression_properties } from "./js_object_expression_properties.mjs";
import { list_find_or_null } from "./list_find_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { js_property_value_get } from "./js_property_value_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_object_expression_property_named_or_null } from "./js_object_expression_property_named_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_map } from "./list_map.mjs";
import { assert_json } from "./assert_json.mjs";
import { property_set } from "./property_set.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function song_image_kept_ast_set(ast, key, attempt) {
  "writes down, inside the parsed glosses file, which attempt at one couplet's drawing is the one being kept";
  "it finds the entry by its own key and then the kept field inside that entry, rather than counting kept fields in order, because the entries are written by hand and an entry added in the middle would otherwise silently move every later couplet's answer onto its neighbour";
  "the number already in the file is changed where it stands instead of a fresh number being put in its place, and both the value and the raw text of it are written, because the printer prints raw when raw is there - writing only the value leaves the file byte for byte what it was and the command reports that it worked";
  let records = js_list_type_nodes(ast, "ObjectExpression");
  let text_key = String(key);
  function kept_of(record) {
    function named_is(p) {
      let name = js_property_key_name_try(p);
      let left = String(name);
      let eq = equal(left, text_key);
      return eq;
    }
    let properties = js_object_expression_properties(record);
    let found = list_find_or_null(properties, named_is);
    if (null_is(found)) {
      return null;
    }
    let value = js_property_value_get(found);
    let b = js_node_type_is(value, "ObjectExpression");
    if (not(b)) {
      return null;
    }
    let kept_property = js_object_expression_property_named_or_null(
      value,
      "kept",
    );
    return kept_property;
  }
  function found_is(x) {
    let nn = null_not_is(x);
    return nn;
  }
  let hits = list_map(records, kept_of);
  let kept = list_find_or_null(hits, found_is);
  assert_json(kept, {
    hint: "no couplet is written down under that key with a kept attempt beside it - would checking the key against the glosses help?",
    key,
  });
  let number = js_property_value_get(kept);
  property_set(number, "value", attempt);
  let value2 = String(attempt);
  property_set(number, "raw", value2);
}
