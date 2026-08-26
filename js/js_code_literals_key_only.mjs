import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse } from "./js_parse.mjs";
import { property_get } from "./property_get.mjs";
import { js_literal_value_get } from "./js_literal_value_get.mjs";
import { text_is } from "./text_is.mjs";
import { not } from "./not.mjs";
import { js_stack_node_above } from "./js_stack_node_above.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { equal } from "./equal.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { property_set } from "./property_set.mjs";
import { add } from "./add.mjs";
import { js_string_site_key_is } from "./js_string_site_key_is.mjs";
import { js_visit_types } from "./js_visit_types.mjs";
import { object_property_names } from "./object_property_names.mjs";
export function js_code_literals_key_only(code) {
  arguments_assert(arguments, 1);
  ("Every written word in a file that names a field everywhere it is mentioned,");
  ("counting only the mentions outside the file's own account of itself.");
  ("The same judgment ",
    fn_name("js_code_literal_key_only"),
    " makes about one word, made about");
  ("all of them at once. That one reads the file in and walks every word in it to");
  ("answer about a single spelling, so a caller asking about twenty spellings of");
  ("one file reads that file twenty times over. One walk answers all twenty.");
  ("A word held as a number is passed over, because what comes back is looked up");
  ("by the writing itself and a lookup cannot tell the number five from the word");
  ("five - counting the two together would answer about one what was asked about");
  ("the other.");
  ("A word mentioned only where the file describes itself is absent rather than");
  ("present, which is the answer the one-word form gives too: a sentence is not a");
  ("site, and a file with no sites is not a file whose every site names a field.");
  let ast = js_parse(code);
  let sites = {};
  let keys = {};
  function lambda_site(site) {
    let node = property_get(site, "node");
    let held = js_literal_value_get(node);
    let written_is = text_is(held);
    if (not(written_is)) {
      return;
    }
    let stack = property_get(site, "stack");
    let above = js_stack_node_above(stack);
    let above_type = js_node_type(above);
    let said_is = equal(above_type, "ExpressionStatement");
    if (said_is) {
      return;
    }
    let seen = property_get_or(sites, held, 0);
    let value = add(seen, 1);
    property_set(sites, held, value);
    let key_is = js_string_site_key_is(stack);
    if (not(key_is)) {
      return;
    }
    let named = property_get_or(keys, held, 0);
    let value2 = add(named, 1);
    property_set(keys, held, value2);
  }
  js_visit_types(ast, ["Literal"], lambda_site);
  let key_only = {};
  for (let held of object_property_names(sites)) {
    let seen = property_get(sites, held);
    let named = property_get_or(keys, held, 0);
    let all_named = equal(seen, named);
    if (not(all_named)) {
      continue;
    }
    property_set(key_only, held, true);
  }
  return key_only;
}
