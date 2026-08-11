import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_filter_text_includes_not } from "./list_filter_text_includes_not.mjs";
import { list_swap_first } from "./list_swap_first.mjs";
export function app_verses_order_standalone_first(order) {
  arguments_assert(arguments, 1);
  ("asking for a single verse shows the first reference, so keep a standalone verse there, never a multi-verse range");
  let none = list_empty_is(order);
  if (none) {
    return;
  }
  let first_reference = list_first(order);
  let first_is_range = text_includes(first_reference, "-");
  if (first_is_range) {
    let singles = list_filter_text_includes_not(order, "-");
    let single = list_first(singles);
    list_swap_first(order, single);
  }
}
