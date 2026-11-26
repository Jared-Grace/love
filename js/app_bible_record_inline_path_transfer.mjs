import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { app_bible_record_local_is } from "./app_bible_record_local_is.mjs";
import { each } from "./each.mjs";
import { html_display_none } from "./html_display_none.mjs";
import { not } from "./not.mjs";
import { app_bible_record_native_is } from "./app_bible_record_native_is.mjs";
import { app_bible_record_inline_path_busy } from "./app_bible_record_inline_path_busy.mjs";
import { app_bible_record_inline_path_backup } from "./app_bible_record_inline_path_backup.mjs";
import { property_get } from "./property_get.mjs";
import { app_bible_record_inline_path_download } from "./app_bible_record_inline_path_download.mjs";
import { app_bible_record_inline_path_chapter_download } from "./app_bible_record_inline_path_chapter_download.mjs";
import { app_bible_record_inline_path_send } from "./app_bible_record_inline_path_send.mjs";
export function app_bible_record_inline_path_transfer(
  buttons,
  held,
  sign_in,
  chapter_code,
  verse_numbers,
  entries,
  entry,
  refreshes,
  refresh,
) {
  "The recorder's buttons that take a take somewhere - send, download, download the chapter, back up - each wired to its step, and handed back so the redraw can label and fade them. refresh is the recorder's redraw, run when a button stops being busy.";
  arguments_assert(arguments, 9);
  let send_button = app_shared_button_wide(buttons, "", send);
  ("NO PLAY BACK BUTTON (human 2026-11-24: already covered elsewhere?): a take is shown in a video with its own play control, so a second way to play it was one button too many.");
  ("DOWNLOAD SAVES THE TAKE CUT DOWN TO THE READING (human 2026-11-24): the near-silent stretch before the first word and after the last is taken off, so the video is just the reading. Only the Android app can cut a video, so the button is there only inside it; the take kept in storage is left whole.");
  let download_button = app_shared_button_wide(buttons, "", download);
  ("A SECOND DOWNLOAD JOINS THE CHAPTER (human 2026-11-24): when more than one passage of the chapter has a take, a second button saves them as one video, in verse order, each cut down to its reading - named by the verses it holds, or as the complete chapter once every passage has one. Every recorder in the chapter shares one list of takes, and each redraws its buttons whenever any take changes.");
  let chapter_button = app_shared_button_wide(buttons, "", chapter_download);
  ("BACK UP SENDS EVERY UNSENT TAKE ON THE PHONE TO STORAGE AS A DRAFT - every chapter and project, not only this one (human 2026-11-25: syncing, so the videos can be seen; a sync button for all videos, not just the current chapter). It is always shown, since takes elsewhere may wait even when this chapter has none: each take is backed up on its own when it finishes, but only while signed in and online, so this catches the rest. A draft is not sent - Send stays the approval, since a sent take becomes a video posted with nobody looking again.");
  let backup_button = app_shared_button_wide(buttons, "", backup);
  ("THE STORE BUILD HAS NO SEND AND NO BACK UP (human 2026-11-25: an app store app that stores only on the device - no send or sync): its takes stay on the phone, and Download is how they leave it.");
  if (app_bible_record_local_is()) {
    each([send_button, backup_button], html_display_none);
  }
  let b = app_bible_record_native_is();
  if (not(b)) {
    each([download_button, chapter_button], html_display_none);
  }
  ("A DOWNLOAD SAYS IT IS WORKING ON ITS OWN BUTTON (human 2026-11-24: a chapter took a while with nothing shown - a loading screen, or a toast so the reader can carry on): the button reads that the video is being got ready and is faded off until the video has been handed to the app, which then says on its own when it is trimming and when it is saved. The rest of the page stays usable meanwhile. REJECTED: a loading screen over the page - it would stop the reader doing anything else for the whole wait.");
  ("SENDING SAYS SO THE SAME WAY (human 2026-11-24: should sending just disable the button like the chapter download, or keep the loading screen?): the Send button reads that it is sending and is faded until the video is up, and the page stays usable. REJECTED: the loading screen the upload drew over the whole page - the one way of waiting that stopped the reader doing anything else, beside two buttons that already waited on their own face.");
  let ready_words = "⏳ Getting the video ready - this can take a minute...";
  let busy = app_bible_record_inline_path_busy(refresh);
  async function backup() {
    await app_bible_record_inline_path_backup(sign_in, busy, backup_button);
  }
  async function download() {
    let blob = property_get(held, "blob");
    await app_bible_record_inline_path_download(
      chapter_code,
      verse_numbers,
      blob,
      busy,
      download_button,
      ready_words,
    );
  }
  async function chapter_download() {
    await app_bible_record_inline_path_chapter_download(
      entries,
      chapter_code,
      busy,
      chapter_button,
      ready_words,
    );
  }
  async function send() {
    await app_bible_record_inline_path_send(
      sign_in,
      held,
      chapter_code,
      verse_numbers,
      busy,
      send_button,
      entry,
      refreshes,
    );
  }
  let r = {
    send_button,
    download_button,
    chapter_button,
    backup_button,
  };
  return r;
}
