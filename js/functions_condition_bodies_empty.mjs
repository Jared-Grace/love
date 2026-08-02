import { js_files_texts } from "./js_files_texts.mjs";
import { property_get } from "./property_get.mjs";
import { js_parse } from "./js_parse.mjs";
import { catch_null } from "./catch_null.mjs";
import { js_condition_bodies_empty } from "./js_condition_bodies_empty.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { text_suffix_without } from "./text_suffix_without.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
export async function functions_condition_bodies_empty() {
  "Audit: every function in the js folder that asks a question and opens an empty";
  "block for the answer.";
  "The judgment itself is next door, asked of one file at a time, so the same";
  "question can be asked of a single file without walking the folder.";
  "A file that will not parse is skipped rather than reported - a broken file is a";
  "different complaint with its own gate, and failing here would report the same";
  "breakage twice under a name that explains nothing.";
  let records = await js_files_texts();
  let offenders = [];
  function record_each(record) {
    let text = property_get(record, "text");
    function parse() {
      let tree = js_parse(text);
      return tree;
    }
    let ast = catch_null(parse);
    let readable = not_equal(ast, null);
    if (not(readable)) {
      return;
    }
    let kinds = js_condition_bodies_empty(ast);
    if (list_empty_is(kinds)) {
      return;
    }
    let file = property_get(record, "file");
    let f_name = text_suffix_without(file, ".mjs");
    let offender = {
      name: f_name,
      kinds,
    };
    list_add(offenders, offender);
  }
  each(records, record_each);
  return offenders;
}
