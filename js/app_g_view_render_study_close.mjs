import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_view_set } from "./app_g_view_set.mjs";
import { html_remove } from "./html_remove.mjs";
export async function app_g_view_render_study_close(persist_cancel, overlay) {
  arguments_assert(arguments, 2);
  persist_cancel();
  await app_g_view_set(null);
  html_remove(overlay);
}
