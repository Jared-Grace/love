import { js_keyword_default } from "../../../love/public/src/js_keyword_default.mjs";
import { js_special_arguments } from "../../../love/public/src/js_special_arguments.mjs";
import { list_concat } from "../../../love/public/src/list_concat.mjs";
import { text_is_assert } from "../../../love/public/src/text_is_assert.mjs";
import { list_all } from "../../../love/public/src/list_all.mjs";
import { text_empty_not_is } from "../../../love/public/src/text_empty_not_is.mjs";
import { text_empty_is } from "../../../love/public/src/text_empty_is.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
export function js_identifier_unique(existing, name) {
  let v2 = js_special_arguments();
  let v = js_keyword_default();
  let used = list_concat(existing, [v2, v]);
  list_all(used, text_is_assert);
  let unique = null;
  let attempt = 1;
  do {
    const suffix = attempt === 1 && text_empty_not_is(name) ? "" : attempt;
    unique = name + suffix;
    attempt++;
  } while (text_empty_is(unique) || list_includes(used, unique));
  list_add(existing, unique);
  return unique;
}
