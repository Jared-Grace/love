import { app_bible_record_inline_path_camera_show } from "./app_bible_record_inline_path_camera_show.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { property_get } from "./property_get.mjs";
import { bible_reference_unbroken } from "./bible_reference_unbroken.mjs";
import { list_add } from "./list_add.mjs";
import { app_bible_record_local_is } from "./app_bible_record_local_is.mjs";
import { each } from "./each.mjs";
import { html_display_none } from "./html_display_none.mjs";
import { app_bible_record_native_is } from "./app_bible_record_native_is.mjs";
import { app_bible_record_inline_path_refresh } from "./app_bible_record_inline_path_refresh.mjs";
import { app_bible_record_inline_path_changed } from "./app_bible_record_inline_path_changed.mjs";
import { app_bible_record_take_kept_or_null } from "./app_bible_record_take_kept_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { app_bible_record_take_sent_or_null } from "./app_bible_record_take_sent_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { property_set } from "./property_set.mjs";
import { html_media_source_file_set } from "./html_media_source_file_set.mjs";
import { html_display_block } from "./html_display_block.mjs";
import { app_bible_record_take_keep } from "./app_bible_record_take_keep.mjs";
import { html_media_recorder_start } from "./html_media_recorder_start.mjs";
import { app_shared_confirm_over_red } from "./app_shared_confirm_over_red.mjs";
import { firebase_auth_ensure } from "./firebase_auth_ensure.mjs";
import { app_bible_record_take_delete } from "./app_bible_record_take_delete.mjs";
import { app_bible_record_take_kept_delete } from "./app_bible_record_take_kept_delete.mjs";
import { app_bible_record_inline_path_busy } from "./app_bible_record_inline_path_busy.mjs";
import { app_bible_record_inline_path_backup } from "./app_bible_record_inline_path_backup.mjs";
import { app_bible_record_inline_path_download } from "./app_bible_record_inline_path_download.mjs";
import { app_bible_record_inline_path_chapter_download } from "./app_bible_record_inline_path_chapter_download.mjs";
import { app_bible_record_clip_path } from "./app_bible_record_clip_path.mjs";
import { firebase_upload_blob_browser_quiet } from "./firebase_upload_blob_browser_quiet.mjs";
import { app_bible_record_draft_path_of } from "./app_bible_record_draft_path_of.mjs";
import { firebase_delete_browser_if_exists } from "./firebase_delete_browser_if_exists.mjs";
import { app_bible_record_take_sent_keep } from "./app_bible_record_take_sent_keep.mjs";
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
  ("A PREVIEW COMES FIRST (asked for by the human 2026-11-23): the camera opens on its own button and shows the very frame that will be recorded - picture, fit and text band - so the face and the light are set right before a take starts, rather than discovered on playback.");
  let camera_button = app_shared_button_wide(
    buttons,
    "📷 Show camera",
    camera_show,
  );
  let record_button = app_shared_button_wide(buttons, "", record);
  let stop_button = app_shared_button_wide(
    buttons,
    "⏹️ Stop recording",
    finish,
  );
  let send_button = app_shared_button_wide(buttons, "", send);
  ("NO PLAY BACK BUTTON, AND IN THE APP NO RECORD OR STOP (human 2026-11-24: already covered elsewhere?): a take is shown in a video with its own play control, so a second way to play it was one button too many; and the Android app records on its own camera screen, which has Record and Stop of its own, so here they could only ever be faded.");
  ("DOWNLOAD SAVES THE TAKE CUT DOWN TO THE READING (human 2026-11-24): the near-silent stretch before the first word and after the last is taken off, so the video is just the reading. Only the Android app can cut a video, so the button is there only inside it; the take kept in storage is left whole.");
  let download_button = app_shared_button_wide(buttons, "", download);
  ("A SECOND DOWNLOAD JOINS THE CHAPTER (human 2026-11-24): when more than one passage of the chapter has a take, a second button saves them as one video, in verse order, each cut down to its reading - named by the verses it holds, or as the complete chapter once every passage has one. Every recorder in the chapter shares one list of takes, and each redraws its buttons whenever any take changes.");
  let chapter_button = app_shared_button_wide(buttons, "", chapter_download);
  ("BACK UP SENDS EVERY UNSENT TAKE ON THE PHONE TO STORAGE AS A DRAFT - every chapter and project, not only this one (human 2026-11-25: syncing, so the videos can be seen; a sync button for all videos, not just the current chapter). It is always shown, since takes elsewhere may wait even when this chapter has none: each take is backed up on its own when it finishes, but only while signed in and online, so this catches the rest. A draft is not sent - Send stays the approval, since a sent take becomes a video posted with nobody looking again.");
  let backup_button = app_shared_button_wide(buttons, "", backup);
  let entries = property_get(chapter, "entries");
  let refreshes = property_get(chapter, "refreshes");
  ("THE CHAPTER'S NAME NEVER BREAKS ACROSS TWO LINES (human 2026-11-24: book{nbsp}chapter): its spaces are the kind a line may not end on, so Psalm and 2 stay together on the count and the download buttons. Made so here, where it is only shown, and not where the name is worked out, which other pages read too.");
  let t = property_get(chapter, "reference");
  let chapter_reference = bible_reference_unbroken(t);
  list_add(refreshes, refresh);
  ("THE STORE BUILD HAS NO SEND AND NO BACK UP (human 2026-11-25: an app store app that stores only on the device - no send or sync): its takes stay on the phone, and Download is how they leave it.");
  if (app_bible_record_local_is()) {
    each([send_button, backup_button], html_display_none);
  }
  ("DELETE ASKS FIRST, in the box every app here draws over the page before something that cannot be taken back (human 2026-11-24: a dialog to confirm, and DRY), then deletes the take on the page, the one kept on the phone and the one sent to storage, so coming back to the passage finds nothing. REJECTED: the browser's own confirm - inside the Android app it may never appear; two taps on the button (what this replaced) - a second way of asking that no other app shares.");
  let delete_button = app_shared_button_wide(
    buttons,
    "🗑️ Delete video",
    take_delete,
  );
  if (app_bible_record_native_is()) {
    each([record_button, stop_button], html_display_none);
  } else {
    each([download_button, chapter_button], html_display_none);
  }
  function refresh() {
    let stop2 = property_get(held, "stop");
    let blob2 = property_get(held, "blob");
    let camera_on2 = property_get(held, "camera_on");
    let sent2 = property_get(held, "sent");
    let r3 = app_bible_record_inline_path_refresh(
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
    return r3;
  }
  let blob3 = property_get(held, "blob");
  app_bible_record_inline_path_changed(entry, blob3, refreshes);
  ("A TAKE ALREADY SENT IS SHOWN AGAIN (human 2026-11-23: a sent take was gone on coming back to its passage): it is looked for in storage, and shown ready to play back and marked Sent. A take recorded meanwhile wins, since it is newer than anything sent.");
  ("A TAKE NOT SENT YET COMES BACK TOO (human 2026-11-24: restarting the app made the video disappear): each finished take is kept on the phone until it is sent or deleted, and is looked for first, since it is newer than anything sent for the passage.");
  async function sent_show() {
    let kept = await app_bible_record_take_kept_or_null(
      chapter_code,
      verse_numbers,
    );
    let found = kept;
    if (null_is(found) && not(app_bible_record_local_is())) {
      found = await app_bible_record_take_sent_or_null(
        chapter_code,
        verse_numbers,
      );
    }
    if (
      null_is(found) ||
      null_not_is(property_get(held, "blob")) ||
      property_get(held, "camera_on")
    ) {
      return;
    }
    property_set(held, "blob", found);
    let value = null_is(kept);
    property_set(held, "sent", value);
    html_media_source_file_set(playback, found);
    html_display_block(playback);
    let blob4 = property_get(held, "blob");
    app_bible_record_inline_path_changed(entry, blob4, refreshes);
  }
  sent_show();
  async function camera_show() {
    let r5 = await app_bible_record_inline_path_camera_show(
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
    return r5;
  }
  function record() {
    project_ensure(start);
  }
  function start() {
    let b2 = property_get(held, "camera_on");
    if (not(b2) || null_not_is(property_get(held, "stop"))) {
      return;
    }
    property_set(held, "blob", null);
    property_set(held, "sent", false);
    let canvas_stream = canvas_element.captureStream(30);
    for (let track of property_get(held, "stream").getAudioTracks()) {
      canvas_stream.addTrack(track);
    }
    let value3 = html_media_recorder_start(canvas_stream);
    property_set(held, "stop", value3);
    let blob9 = property_get(held, "blob");
    app_bible_record_inline_path_changed(entry, blob9, refreshes);
  }
  async function finish() {
    let stopping = property_get(held, "stop");
    if (null_is(stopping)) {
      return;
    }
    property_set(held, "stop", null);
    let value4 = await stopping();
    property_set(held, "blob", value4);
    property_set(held, "camera_on", false);
    for (let track of property_get(held, "stream").getTracks()) {
      track.stop();
    }
    html_display_none(canvas);
    let file = property_get(held, "blob");
    html_media_source_file_set(playback, file);
    html_display_block(playback);
    let blob10 = property_get(held, "blob");
    app_bible_record_inline_path_changed(entry, blob10, refreshes);
    let taken = property_get(held, "blob");
    await app_bible_record_take_keep(chapter_code, verse_numbers, taken);
  }
  function take_delete() {
    app_shared_confirm_over_red(
      "Delete this video? It cannot be brought back.",
      "🗑️ Delete video",
      "Keep video",
      take_delete_confirmed,
    );
  }
  async function take_delete_confirmed() {
    "the store build sent nothing, so there is nothing in storage to delete and nobody to sign in";
    let b = app_bible_record_local_is();
    if (not(b)) {
      await firebase_auth_ensure(sign_in);
      await app_bible_record_take_delete(chapter_code, verse_numbers);
    }
    await app_bible_record_take_kept_delete(chapter_code, verse_numbers);
    property_set(held, "blob", null);
    property_set(held, "sent", false);
    playback_element.pause();
    html_display_none(playback);
    let blob11 = property_get(held, "blob");
    app_bible_record_inline_path_changed(entry, blob11, refreshes);
  }
  ("A DOWNLOAD SAYS IT IS WORKING ON ITS OWN BUTTON (human 2026-11-24: a chapter took a while with nothing shown - a loading screen, or a toast so the reader can carry on): the button reads that the video is being got ready and is faded off until the video has been handed to the app, which then says on its own when it is trimming and when it is saved. The rest of the page stays usable meanwhile. REJECTED: a loading screen over the page - it would stop the reader doing anything else for the whole wait.");
  ("SENDING SAYS SO THE SAME WAY (human 2026-11-24: should sending just disable the button like the chapter download, or keep the loading screen?): the Send button reads that it is sending and is faded until the video is up, and the page stays usable. REJECTED: the loading screen the upload drew over the whole page - the one way of waiting that stopped the reader doing anything else, beside two buttons that already waited on their own face.");
  let ready_words = "⏳ Getting the video ready - this can take a minute...";
  let busy = app_bible_record_inline_path_busy(refresh);
  async function backup() {
    let r = await app_bible_record_inline_path_backup(
      sign_in,
      busy,
      backup_button,
    );
    return r;
  }
  async function download() {
    let blob12 = property_get(held, "blob");
    let r2 = await app_bible_record_inline_path_download(
      chapter_code,
      verse_numbers,
      blob12,
      busy,
      download_button,
      ready_words,
    );
    return r2;
  }
  async function chapter_download() {
    let r4 = await app_bible_record_inline_path_chapter_download(
      entries,
      chapter_code,
      busy,
      chapter_button,
      ready_words,
    );
    return r4;
  }
  async function send() {
    await firebase_auth_ensure(sign_in);
    async function work() {
      let blob13 = property_get(held, "blob");
      let path = app_bible_record_clip_path(
        chapter_code,
        verse_numbers,
        blob13,
      );
      let blob14 = property_get(held, "blob");
      await firebase_upload_blob_browser_quiet(path, blob14);
      property_set(held, "sent", true);
      ("Once sent, its draft backup is not needed.");
      let draft = app_bible_record_draft_path_of(path);
      await firebase_delete_browser_if_exists(draft);
    }
    await busy(send_button, "⏳ Sending the video...", work);
    let blob15 = property_get(held, "blob");
    app_bible_record_inline_path_changed(entry, blob15, refreshes);
    ("The sent take stays on the phone as sent, so coming back plays it at once (human 2026-11-24).");
    let taken4 = property_get(held, "blob");
    await app_bible_record_take_sent_keep(chapter_code, verse_numbers, taken4);
    await app_bible_record_take_kept_delete(chapter_code, verse_numbers);
  }
}
