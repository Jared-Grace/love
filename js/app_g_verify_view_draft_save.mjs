import { arguments_assert } from "./arguments_assert.mjs";
import { html_value_get } from "./html_value_get.mjs";
export function app_g_verify_view_draft_save(
  suggest_area,
  sessionStorage,
  draft_key,
  base_key,
  value,
) {
  arguments_assert(arguments, 5);
  let current = html_value_get(suggest_area);
  sessionStorage.setItem(draft_key, current);
  sessionStorage.setItem(base_key, value);
}
