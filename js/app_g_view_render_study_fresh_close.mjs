import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_view_render_study_close } from "./app_g_view_render_study_close.mjs";
export function app_g_view_render_study_fresh_close(persist_cancel, overlay) {
  arguments_assert(arguments, 2);
  async function close() {
    let r = await app_g_view_render_study_close(persist_cancel, overlay);
    return r;
  }
  return close;
}
