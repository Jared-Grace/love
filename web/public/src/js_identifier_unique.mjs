import { text_unique } from "../../../love/public/src/text_unique.mjs";
import { js_keyword_default } from "../../../love/public/src/js_keyword_default.mjs";
import { js_special_arguments } from "../../../love/public/src/js_special_arguments.mjs";
import { list_concat } from "../../../love/public/src/list_concat.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function js_identifier_unique(existing, name) {
  let v2 = js_special_arguments();
  let v = js_keyword_default();
  let used = list_concat(existing, [v2, v]);
  let unique = text_unique(used, name, "");
  list_add(existing, unique);
  return unique;
}
