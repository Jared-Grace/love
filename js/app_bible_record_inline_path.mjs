import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_bible_record_inline_path_camera } from "./app_bible_record_inline_path_camera.mjs";
import { app_bible_record_inline_path_transfer } from "./app_bible_record_inline_path_transfer.mjs";
import { bible_reference_unbroken } from "./bible_reference_unbroken.mjs";
import { list_add } from "./list_add.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { app_bible_record_inline_path_refresh } from "./app_bible_record_inline_path_refresh.mjs";
import { app_bible_record_inline_path_changed } from "./app_bible_record_inline_path_changed.mjs";
import { app_bible_record_inline_path_sent_show } from "./app_bible_record_inline_path_sent_show.mjs";
import { promise_start_unawait } from "./promise_start_unawait.mjs";
import { app_shared_confirm_over_red } from "./app_shared_confirm_over_red.mjs";
import { app_bible_record_inline_path_take_delete_confirmed } from "./app_bible_record_inline_path_take_delete_confirmed.mjs";
export function app_bible_record_inline_path(
  buttons,
  chapter,
  entry,
  count_line,
  verse_numbers,
  chapter_code,
  playback,
  playback_element,
  problem,
  project_ensure,
  camera_element,
  canvas,
  canvas_element,
  sign_in,
) {
  arguments_assert(arguments, 14);
  ("ONE RECORD HOLDS WHAT THE RECORDER'S PIECES SHARE - whether the camera is on, how to stop a take, the camera's stream, the take, and whether it was sent. Every piece reads and writes the same record at the moment it runs, exactly as when each was a name of its own here, so a piece can live in a file of its own and still see a press of Stop made while it waits.");
  let held = {
    camera_on: false,
    stop: null,
    stream: null,
    blob: null,
    sent: false,
  };
  let entries = property_get(chapter, "entries");
  let refreshes = property_get(chapter, "refreshes");
  let camera_buttons = app_bible_record_inline_path_camera(
    buttons,
    held,
    playback_element,
    playback,
    entry,
    refreshes,
    chapter_code,
    verse_numbers,
    problem,
    project_ensure,
    camera_element,
    canvas,
    canvas_element,
  );
  let camera_button = property_get(camera_buttons, "camera_button");
  let record_button = property_get(camera_buttons, "record_button");
  let stop_button = property_get(camera_buttons, "stop_button");
  let transfer_buttons = app_bible_record_inline_path_transfer(
    buttons,
    held,
    sign_in,
    chapter_code,
    verse_numbers,
    entries,
    entry,
    refreshes,
    refresh,
  );
  let send_button = property_get(transfer_buttons, "send_button");
  let download_button = property_get(transfer_buttons, "download_button");
  let chapter_button = property_get(transfer_buttons, "chapter_button");
  let backup_button = property_get(transfer_buttons, "backup_button");
  ("THE CHAPTER'S NAME NEVER BREAKS ACROSS TWO LINES (human 2026-11-24: book{nbsp}chapter): its spaces are the kind a line may not end on, so Psalm and 2 stay together on the count and the download buttons. Made so here, where it is only shown, and not where the name is worked out, which other pages read too.");
  let t = property_get(chapter, "reference");
  let chapter_reference = bible_reference_unbroken(t);
  list_add(refreshes, refresh);
  ("DELETE ASKS FIRST, in the box every app here draws over the page before something that cannot be taken back (human 2026-11-24: a dialog to confirm, and DRY), then deletes the take on the page, the one kept on the phone and the one sent to storage, so coming back to the passage finds nothing. REJECTED: the browser's own confirm - inside the Android app it may never appear; two taps on the button (what this replaced) - a second way of asking that no other app shares.");
  let delete_button = app_shared_button_wide(
    buttons,
    "🗑️ Delete video",
    take_delete,
  );
  function refresh() {
    let stop2 = property_get(held, "stop");
    let blob2 = property_get(held, "blob");
    let camera_on2 = property_get(held, "camera_on");
    let sent2 = property_get(held, "sent");
    let r = app_bible_record_inline_path_refresh(
      entries,
      chapter_reference,
      chapter_button,
      count_line,
      backup_button,
      verse_numbers,
      download_button,
      stop2,
      blob2,
      camera_button,
      camera_on2,
      record_button,
      stop_button,
      send_button,
      sent2,
      delete_button,
    );
    return r;
  }
  let blob3 = property_get(held, "blob");
  app_bible_record_inline_path_changed(entry, blob3, refreshes);
  ("A TAKE ALREADY SENT IS SHOWN AGAIN (human 2026-11-23: a sent take was gone on coming back to its passage): it is looked for in storage, and shown ready to play back and marked Sent. A take recorded meanwhile wins, since it is newer than anything sent.");
  ("A TAKE NOT SENT YET COMES BACK TOO (human 2026-11-24: restarting the app made the video disappear): each finished take is kept on the phone until it is sent or deleted, and is looked for first, since it is newer than anything sent for the passage.");
  ("THE LOOK FOR A TAKE ALREADY MADE IS NOT WAITED FOR: it asks storage, and every passage on the page asks at once, so the passages are all drawn straight away and each fills in its take when the answer comes. Waiting here would draw them one at a time, each behind a lookup.");
  async function sent_show() {
    await app_bible_record_inline_path_sent_show(
      chapter_code,
      verse_numbers,
      held,
      playback,
      entry,
      refreshes,
    );
  }
  promise_start_unawait(sent_show);
  function take_delete() {
    app_shared_confirm_over_red(
      "Delete this video? It cannot be brought back.",
      "🗑️ Delete video",
      "Keep video",
      take_delete_confirmed,
    );
  }
  async function take_delete_confirmed() {
    let r9 = await app_bible_record_inline_path_take_delete_confirmed(
      sign_in,
      chapter_code,
      verse_numbers,
      held,
      playback_element,
      playback,
      entry,
      refreshes,
    );
    return r9;
  }
}
