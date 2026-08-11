import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
export function app_verses_counts_refresh(count_updates, count_update_invoke) {
  arguments_assert(arguments, 2);
  each(count_updates, count_update_invoke);
}
