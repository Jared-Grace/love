import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_api_named } from "./app_shared_api_named.mjs";
export async function app_g_arc_approve_worded(
  nickname,
  status_working,
  chapter_code,
  status_set,
  render,
) {
  arguments_assert(arguments, 5);
  let working = text_combine_multiple(["approving ", nickname, " as worded"]);
  status_working(working);
  try {
    let f_name = fn_name("g_arc_approved_write");
    await app_shared_api_named(f_name, [chapter_code, nickname]);
    let done = text_combine_multiple([nickname, " is approved as worded now"]);
    status_set(done);
    await render();
  } catch (failed) {
    let missed = text_combine_multiple(["could not approve ", nickname]);
    status_set(missed);
  }
}
