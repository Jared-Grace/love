import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_verify_home_prepared } from "./app_g_verify_home_prepared.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_verify_home_wrap } from "./app_g_verify_home_wrap.mjs";
import { property_set } from "./property_set.mjs";
import { app_g_verify_home_actions } from "./app_g_verify_home_actions.mjs";
import { app_g_verify_home_verse_bar } from "./app_g_verify_home_verse_bar.mjs";
import { html_div } from "./html_div.mjs";
import { equal } from "./equal.mjs";
import { app_g_verify_home_empty } from "./app_g_verify_home_empty.mjs";
import { app_g_verify_home_choose } from "./app_g_verify_home_choose.mjs";
export function app_g_verify_home_render(
  chapter_shown,
  status_shown,
  chapter_state_shown,
  held,
  root,
  chapter_codes,
  chapter_code,
  storage_key,
  refresh,
) {
  "One whole draw of the verify page: work out what there is to show, build the column, wire what a verse does when it is pressed, put the verses along the top, and open one.";
  "THE READING PANE IS EMPTIED IN THE KEEPER BEFORE THE VERSES ARE DRAWN AND FILLED IN AFTER, because a button pressed during the draw would otherwise write into the pane from the draw before.";
  "THE VERSE BUTTONS ARE HANDED TO THE WIRING BEFORE THEY EXIST, as an empty holder the drawing of the bar fills in; that is what lets pressing one of them light the right one.";
  arguments_assert(arguments, 9);
  let prepared = app_g_verify_home_prepared(
    chapter_shown,
    status_shown,
    chapter_state_shown,
    held,
    root,
  );
  let passages = property_get(prepared, "passages");
  let real_keys = property_get(prepared, "real_keys");
  let approved_key = property_get(prepared, "approved_key");
  let approved_index = property_get(prepared, "approved_index");
  let pending = property_get(prepared, "pending");
  let busy = property_get(prepared, "busy");
  let status_verse = property_get(prepared, "status_verse");
  let wrap = app_g_verify_home_wrap(
    root,
    chapter_codes,
    chapter_code,
    busy,
    status_shown,
    status_verse,
  );
  property_set(held, "view", null);
  let verse_buttons = {};
  let actions = app_g_verify_home_actions(
    held,
    verse_buttons,
    storage_key,
    chapter_code,
    refresh,
  );
  let open_passage = property_get(actions, "open_passage");
  let open_pending = property_get(actions, "open_pending");
  app_g_verify_home_verse_bar(
    wrap,
    real_keys,
    approved_index,
    open_passage,
    verse_buttons,
    passages,
    pending,
    open_pending,
  );
  let view = html_div(wrap);
  property_set(held, "view", view);
  let none = equal(passages.length, 0);
  if (none) {
    app_g_verify_home_empty(pending, open_pending, held);
    return;
  }
  app_g_verify_home_choose(
    chapter_state_shown,
    approved_key,
    held,
    storage_key,
    passages,
    pending,
    open_passage,
    open_pending,
  );
}
