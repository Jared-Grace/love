export function song_image_kept_ast_set(ast, key, attempt) {
  "writes down, inside the parsed glosses file, which attempt at one couplet's drawing is the one being kept";
  "it finds the entry by its own key and then the kept field inside that entry, rather than counting kept fields in order, because the entries are written by hand and an entry added in the middle would otherwise silently move every later couplet's answer onto its neighbour";
  "the number already in the file is changed where it stands instead of a fresh number being put in its place, and both the value and the raw text of it are written, because the printer prints raw when raw is there - writing only the value leaves the file byte for byte what it was and the command reports that it worked";
  let records = js_list_type_nodes(ast, "ObjectExpression");
  let text_key = String(key);
  function kept_of(record) {
    function named_is(p) {
      let name = js_property_key_name_try(p);
      return equal(String(name), text_key);
    }
    let properties = js_object_expression_properties(record);
    let found = list_find_or_null(properties, named_is);
    if (null_is(found)) {
      return null;
    }
    let value = js_property_value_get(found);
    if (not(js_node_type_is(value, "ObjectExpression"))) {
      return null;
    }
    let kept = js_object_expression_property_named_or_null(value, "kept");
    return kept;
  }
  function found_is(x) {
    return null_not_is(x);
  }
  let hits = list_map(records, kept_of);
  let kept = list_find_or_null(hits, found_is);
  assert_json(kept, {
    hint: "no couplet is written down under that key with a kept attempt beside it - would checking the key against the glosses help?",
    key,
  });
  let number = js_property_value_get(kept);
  property_set(number, "value", attempt);
  property_set(number, "raw", String(attempt));
}
