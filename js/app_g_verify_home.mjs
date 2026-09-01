import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear_context } from "./html_clear_context.mjs";
import { app_g_verify_home_storage_key } from "./app_g_verify_home_storage_key.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_verify_home_loading_load } from "./app_g_verify_home_loading_load.mjs";
import { app_g_verify_home_document } from "./app_g_verify_home_document.mjs";
import { app_g_verify_home_render } from "./app_g_verify_home_render.mjs";
import { app_g_verify_home_refresh } from "./app_g_verify_home_refresh.mjs";
export async function app_g_verify_home(context) {
  "The page a reviewer works on: it fetches the chapter being written, draws it, and keeps looking again every few seconds so a verse appears as soon as it is written.";
  "THE RECORD THE PAGE STARTS FROM IS ALSO THE KEEPER OF EVERYTHING THAT CHANGES — what is on screen, which verse is chosen, which one it already jumped to, where the reading pane is. Every draw and every button reads and writes that one record at the moment it runs, which is what a plain name could not do once the drawing moved out of here.";
  "THE PASSAGE IS ASKED FOR RATHER THAN HANDED OVER, because it does not exist yet — the draw this starts is what makes it, and a value read here would be the nothing that was standing in for it.";
  "DO NOT DRAW AGAIN WHILE THE REVIEWER IS TYPING in the suggest box — a look-again landing mid-edit would rebuild the box and wipe their draft. What is on screen is left stale instead, so the next look-again after they click away draws the fresh lines.";
  arguments_assert(arguments, 1);
  let root = html_clear_context(context);
  let held = app_g_verify_home_storage_key();
  let storage_key = property_get(held, "storage_key");
  let r = property_get(held, "r6");
  let chapter_code = property_get(r, "chapter_code2");
  let poll_timer = property_get(r, "poll_timer");
  let loaded = await app_g_verify_home_loading_load(chapter_code);
  let chapter = property_get(loaded, "chapter");
  let status = property_get(loaded, "status");
  let chapter_state = property_get(loaded, "chapter_state");
  let chapter_codes = property_get(loaded, "chapter_codes");
  function view_get() {
    let view = property_get(held, "view");
    return view;
  }
  await app_g_verify_home_document({
    render,
    chapter,
    status,
    chapter_state,
    view_get,
    poll,
    refresh,
  });
  function render(chapter_shown, status_shown, chapter_state_shown) {
    app_g_verify_home_render({
      chapter_shown,
      status_shown,
      chapter_state_shown,
      held,
      root,
      chapter_codes,
      chapter_code,
      storage_key,
      refresh,
    });
  }
  function poll() {
    clearTimeout(poll_timer);
    poll_timer = setTimeout(refresh, 4000);
  }
  async function refresh() {
    let chapter_advance_armed = property_get(held, "chapter_advance_armed");
    let shown_json = property_get(held, "shown_json");
    let r2 = await app_g_verify_home_refresh(
      poll,
      chapter_code,
      chapter_advance_armed,
      shown_json,
      render,
    );
    return r2;
  }
}
