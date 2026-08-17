import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_verify_home_on_visible } from "./app_g_verify_home_on_visible.mjs";
export async function app_g_verify_home_document(
  render,
  chapter,
  status,
  chapter_state,
  view,
  poll,
  refresh,
) {
  arguments_assert(arguments, 7);
  let on_visible = await app_g_verify_home_on_visible(
    render,
    chapter,
    status,
    chapter_state,
    view,
    poll,
    refresh,
  );
  document.addEventListener("visibilitychange", on_visible);
}
