import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse } from "./js_parse.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { js_literal_value_get } from "./js_literal_value_get.mjs";
import { json_to } from "./json_to.mjs";
import { not } from "./not.mjs";
import { property_set } from "./property_set.mjs";
import { js_string_site_label } from "./js_string_site_label.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { js_visit_types } from "./js_visit_types.mjs";
export function js_code_literals_site_labels(code) {
  arguments_assert(arguments, 1);
  ("Every job every written value in a file is doing, a word each, kept under the");
  ("value it belongs to.");
  ("The same reading ",
    fn_name("js_string_site_labels"),
    " gives for one value, given for all of");
  ("them at once. That one walks every value in the file and throws away all but");
  ("the one it was asked about, so asking it about a file's words one after");
  ("another walks that file once per word - and its callers do exactly that, over");
  ("thousands of pairings where sixteen hundred files answer for four and a half");
  ("thousand askings.");
  ("A value is filed under its own writing rather than under itself, so that the");
  ("number five and the word five stay two questions. Written that way a value");
  ("can never spell one of the names a plain record answers to on its own");
  ("account, because every one of them arrives wrapped in quotation marks.");
  ("A written pattern is left out, and it is the one kind of value that has to");
  ("be. Writing does not tell two of them apart - every one of them writes out as");
  ("an empty shape - so filing them this way would run all the patterns in a file");
  ("together under one heading. Nothing is lost by leaving them out: the");
  ("one-value form matches a pattern by being handed the very object the reading");
  ("made, so a caller holding a pattern from anywhere else already gets nothing");
  ("back, and no caller can be holding this reading's own objects.");
  let ast = js_parse(code);
  let labels_by_literal = {};
  function lambda_site(site) {
    let node = property_get(site, "node");
    let pattern = property_get_or_null(node, "regex");
    if (pattern) {
      return;
    }
    let held = js_literal_value_get(node);
    let key = json_to(held);
    let labels = property_get_or_null(labels_by_literal, key);
    if (not(labels)) {
      labels = [];
      property_set(labels_by_literal, key, labels);
    }
    let stack = property_get(site, "stack");
    let label = js_string_site_label(stack);
    let already = list_includes(labels, label);
    if (already) {
      return;
    }
    list_add(labels, label);
  }
  js_visit_types(ast, ["Literal"], lambda_site);
  return labels_by_literal;
}
