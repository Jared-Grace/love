import { not } from "./not.mjs";
import { js_files_texts } from "./js_files_texts.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_native_callback_imported } from "./js_native_callback_imported.mjs";
import { catch_null } from "./catch_null.mjs";
import { property_get } from "./property_get.mjs";
import { text_suffix_without } from "./text_suffix_without.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { not_equal } from "./not_equal.mjs";
export async function functions_native_callback_imported() {
  "audit: every place in the js folder that hands an imported name straight to a native array method as its callback";
  "the judgement itself is next door, asked of one file at a time; this only walks the folder, so the same question can be asked of a single file without a sweep";
  "a file that will not parse is skipped rather than reported - a broken file is a different complaint with its own gate, and letting it fail here would report the same breakage twice under a name that explains nothing";
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
    let sites = js_native_callback_imported(ast);
    let file = property_get(record, "file");
    let f_name = text_suffix_without(file, ".mjs");
    function site_each(site) {
      let method = property_get(site, "method");
      let passed = property_get(site, "passed");
      let offender = {
        name: f_name,
        method,
        passed,
      };
      list_add(offenders, offender);
    }
    each(sites, site_each);
  }
  each(records, record_each);
  return offenders;
}
