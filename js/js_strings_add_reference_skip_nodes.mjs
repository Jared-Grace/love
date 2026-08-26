import { fn_name } from "./fn_name.mjs";
import { js_call_named_argument_nodes } from "./js_call_named_argument_nodes.mjs";
import { each } from "./each.mjs";
import { js_import_source_nodes } from "./js_import_source_nodes.mjs";
import { js_import_expression_source_nodes } from "./js_import_expression_source_nodes.mjs";
import { js_object_key_nodes } from "./js_object_key_nodes.mjs";
import { list_adder } from "./list_adder.mjs";
export function js_strings_add_reference_skip_nodes(ast) {
  let f_name2 = fn_name("property_get");
  let f_name3 = fn_name("property_set");
  let f_name4 = fn_name("property_exists");
  let f_name5 = fn_name("property_delete");
  let f_name6 = fn_name("global_function_property_get");
  let f_name7 = fn_name("global_function_property_set");
  let f_name8 = fn_name("global_function_property_exists");
  let f_name9 = fn_name("fn_name");
  let f_name10 = fn_name("text_frozen");
  let key_fns = [
    f_name2,
    f_name3,
    f_name4,
    f_name5,
    f_name6,
    f_name7,
    f_name8,
    f_name9,
    f_name10,
  ];
  function lambda2(la) {
    function lambda(f_name) {
      let nodes = js_call_named_argument_nodes(ast, f_name);
      each(nodes, la);
    }
    each(key_fns, lambda);
    let sources = js_import_source_nodes(ast);
    each(sources, la);
    ("a file named in the brackets of a fetch-it-while-running import is left alone for the same reason as one named after the word from, and it is the more important of the two: the builder reads that word to decide which file to set aside as a separately fetched piece, and a word put together while running is one it cannot read, so it takes in the whole folder instead. A preview page written to fetch one preview was measured being turned back into a page carrying all of them, and nothing went red");
    let expression_sources = js_import_expression_source_nodes(ast);
    each(expression_sources, la);
    ("a word standing before the colon of a written-out record is left alone as well, and this is the one skip here whose absence broke a file rather than changing its meaning. The three field-naming shapes are not alike: the word inside the brackets of a lookup and the word handed second to a field call both have room for a call, and both are repaired by the command that routes field names. A word before a colon has no room, because a call written there stops being a call and becomes a field named by the letters of the call - so the replacement is not wrong, it is unparseable. Measured 2026-08-26, routing a word that named an entry wrote a call where a key goes and the file would not load, and the count of places changed said the run had worked");
    let entry_keys = js_object_key_nodes(ast);
    each(entry_keys, la);
  }
  let skip = list_adder(lambda2);
  return skip;
}
