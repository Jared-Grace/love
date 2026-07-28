import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_string_site_labels } from "./js_string_site_labels.mjs";
import { each } from "./each.mjs";
export function literal_duplicate_means(codes, files, literal) {
  arguments_assert(arguments, 3);
  ("What each file holding a repeated spelling is using it for, kept beside the");
  ("name of the file. A report of files alone says a spelling is repeated and");
  ("nothing about whether the repeats mean one thing, so every reader of it has");
  ("had to open all of them to find out - and twice now the answer was that almost");
  ("none of them agreed with the getter they were about to be routed through.");
  let means = {};
  function lambda(f_name) {
    let code = property_get(codes, f_name);
    let ast = js_parse(code);
    let labels = js_string_site_labels(ast, literal);
    means[f_name] = labels;
  }
  each(files, lambda);
  return means;
}
