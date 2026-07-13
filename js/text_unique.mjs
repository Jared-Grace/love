import { list_includes } from "./list_includes.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { text_is_assert } from "./text_is_assert.mjs";
import { list_all } from "./list_all.mjs";
import { text_combine } from "./text_combine.mjs";
export function text_unique(used, name, prefix) {
  text_is_assert_multiple(used);
  let unique = null;
  let attempt = 1;
  do {
    let suffix =
      attempt === 1 && text_empty_not_is(name)
        ? ""
        : text_combine(prefix, attempt);
    unique = text_combine(name, suffix);
    attempt++;
  } while (text_empty_is(unique) || list_includes(used, unique));
  return unique;
}
