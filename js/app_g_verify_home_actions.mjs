import { storage_session_specify_set } from "./storage_session_specify_set.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_set } from "./property_set.mjs";
import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
import { app_g_verify_home_highlight_selected } from "./app_g_verify_home_highlight_selected.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_verify_view } from "./app_g_verify_view.mjs";
import { app_g_verify_home_open_pending } from "./app_g_verify_home_open_pending.mjs";
export function app_g_verify_home_actions(
  held,
  verse_buttons,
  storage_key,
  chapter_code,
  refresh,
) {
  "The two things a person can do to a verse on the verify page — open one that has been written, and open the one being worked on — handed back as a pair so the caller can wire both to the same buttons.";
  "WHICH VERSE IS CHOSEN AND WHERE THE READING PANE IS LIVE IN THE KEEPER, not in a name handed in, because both are set by one of these and read by the other long after this was called.";
  "THE CHOSEN VERSE IS ALSO PUT IN THE BROWSER'S OWN SHORT-TERM STORE, so coming back to the page lands on the same verse.";
  "APPROVING A VERSE ONLY ARMS THE MOVE TO THE NEXT CHAPTER; the look-again is what decides whether the chapter is really finished.";
  arguments_assert(arguments, 5);
  async function on_approved(v) {
    property_set(held, "chapter_advance_armed", true);
    refresh();
  }
  async function open_passage(passage) {
    let key = g_sermon_passage_verses_key(passage);
    property_set(held, "selected_key", key);
    storage_session_specify_set(storage_key, key);
    app_g_verify_home_highlight_selected(key, verse_buttons);
    let scripture = property_get(passage, "scripture");
    let lines = property_get(passage, "lines");
    let view = property_get(held, "view");
    await app_g_verify_view(
      view,
      scripture,
      lines,
      chapter_code,
      key,
      on_approved,
    );
  }
  function open_pending(verse) {
    let selected_key = property_get(held, "selected_key");
    let view = property_get(held, "view");
    let answer = app_g_verify_home_open_pending(
      verse,
      selected_key,
      storage_key,
      verse_buttons,
      view,
    );
    let key = property_get(answer, "selected_key");
    property_set(held, "selected_key", key);
  }
  let r = {
    open_passage,
    open_pending,
  };
  return r;
}
