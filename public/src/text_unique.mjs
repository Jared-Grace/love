import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { text_empty_is } from "../../../love/public/src/text_empty_is.mjs";
import { text_empty_not_is } from "../../../love/public/src/text_empty_not_is.mjs";
import { text_is_assert } from "../../../love/public/src/text_is_assert.mjs";
import { list_all } from "../../../love/public/src/list_all.mjs";
export function text_unique(used, name, prefix) {
  list_all(used, text_is_assert);
  let unique = null;
  let attempt = 1;
  do {
    const suffix =
      attempt === 1 && text_empty_not_is(name) ? "" : prefix + attempt;
    unique = name + suffix;
    attempt++;
  } while (text_empty_is(unique) || list_includes(used, unique));
  return unique;
}
