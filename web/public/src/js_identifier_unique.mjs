import { js_keyword_arguments } from "./js_keyword_arguments.mjs";
import { list_concat } from "./list_concat.mjs";
import { string_is_assert } from "./string_is_assert.mjs";
import { list_all } from "./list_all.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { string_empty_is } from "./string_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
export function js_identifier_unique(existing, name) {
  let v2 = js_keyword_arguments();
  existing = list_concat(existing, [v2]);
  list_all(existing, string_is_assert);
  let unique = null;
  let attempt = 1;
  do {
    const suffix = attempt === 1 && string_empty_not_is(name) ? "" : attempt;
    unique = name + suffix;
    attempt++;
  } while (string_empty_is(unique) || list_includes(existing, unique));
  list_add(existing, unique);
  return unique;
}
