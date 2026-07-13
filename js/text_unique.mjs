import { text_is_assert_multiple } from "../../love/js/text_is_assert_multiple.mjs";
import { equal } from "../../love/js/equal.mjs";
import { list_includes } from "../../love/js/list_includes.mjs";
import { text_empty_is } from "../../love/js/text_empty_is.mjs";
import { text_empty_not_is } from "../../love/js/text_empty_not_is.mjs";
import { text_combine } from "../../love/js/text_combine.mjs";
export function text_unique(used, name, prefix) {
  text_is_assert_multiple(used);
  let unique = null;
  let attempt = 1;
  do {
    let suffix =
      equal(attempt, 1) && text_empty_not_is(name)
        ? ""
        : text_combine(prefix, attempt);
    unique = text_combine(name, suffix);
    attempt++;
  } while (text_empty_is(unique) || list_includes(used, unique));
  return unique;
}
