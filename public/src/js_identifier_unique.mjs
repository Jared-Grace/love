import { js_keyword_arguments } from "../../../love/public/src/js_keyword_arguments.mjs";
import { list_concat } from "../../../love/public/src/list_concat.mjs";
import { string_is_assert } from "../../../love/public/src/string_is_assert.mjs";
import { list_all } from "../../../love/public/src/list_all.mjs";
import { string_empty_not_is } from "../../../love/public/src/string_empty_not_is.mjs";
import { string_empty_is } from "../../../love/public/src/string_empty_is.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
export function js_identifier_unique(existing, name) {
  let v2 = js_keyword_arguments();
  let used = list_concat(existing, [v2, "default"]);
  list_all(used, string_is_assert);
  let unique = null;
  let attempt = 1;
  do {
    const suffix = attempt === 1 && string_empty_not_is(name) ? "" : attempt;
    unique = name + suffix;
    attempt++;
  } while (string_empty_is(unique) || list_includes(used, unique));
  list_add(existing, unique);
  return unique;
}
