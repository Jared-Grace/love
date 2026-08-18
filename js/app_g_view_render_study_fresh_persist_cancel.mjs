import { arguments_assert } from "./arguments_assert.mjs";
import { not_equal } from "./not_equal.mjs";
export function app_g_view_render_study_fresh_persist_cancel(save_pending) {
  arguments_assert(arguments, 1);
  if (not_equal(save_pending, null)) {
    clearTimeout(save_pending);
    save_pending = null;
  }
  let r = {
    save_pending,
  };
  return r;
}
