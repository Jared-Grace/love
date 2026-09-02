import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_arc_approve_worded } from "./app_g_arc_approve_worded.mjs";
export function app_g_arcs_read_row_on_approve(
  nickname,
  status_working,
  chapter_code,
  status_set,
  render,
) {
  arguments_assert(arguments, 5);
  async function on_approve() {
    let r = await app_g_arc_approve_worded(
      nickname,
      status_working,
      chapter_code,
      status_set,
      render,
    );
    return r;
  }
  return on_approve;
}
