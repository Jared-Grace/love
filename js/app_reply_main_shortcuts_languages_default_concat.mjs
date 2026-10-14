import { arguments_assert } from "./arguments_assert.mjs";
import { list_take_less_1 } from "./list_take_less_1.mjs";
import { list_last } from "./list_last.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function app_reply_main_shortcuts_languages_default_concat(
  right,
  languages_chosen_default,
) {
  "The added languages go in before the last of the defaults rather than after them all, so the original, which the defaults end on, stays last in the reply.";
  arguments_assert(arguments, 2);
  let before = list_take_less_1(languages_chosen_default);
  let last = list_last(languages_chosen_default);
  let concated = list_concat_multiple([before, right, [last]]);
  return concated;
}
