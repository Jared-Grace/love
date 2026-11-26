import { list_size_greater_than } from "./list_size_greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_element } from "./html_element.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { html_display_none } from "./html_display_none.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { property_get } from "./property_get.mjs";
import { bible_reference_unbroken } from "./bible_reference_unbroken.mjs";
import { list_add } from "./list_add.mjs";
import { property_set } from "./property_set.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_bible_record_local_is } from "./app_bible_record_local_is.mjs";
import { each } from "./each.mjs";
import { app_bible_record_native_is } from "./app_bible_record_native_is.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { ebible_verse_numbers_runs_text } from "./ebible_verse_numbers_runs_text.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_display_block } from "./html_display_block.mjs";
import { not } from "./not.mjs";
import { app_shared_button_disabled_set } from "./app_shared_button_disabled_set.mjs";
import { app_bible_record_take_kept_or_null } from "./app_bible_record_take_kept_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { app_bible_record_take_sent_or_null } from "./app_bible_record_take_sent_or_null.mjs";
import { html_media_source_file_set } from "./html_media_source_file_set.mjs";
import { app_bible_record_passage } from "./app_bible_record_passage.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { app_bible_record_take_keep } from "./app_bible_record_take_keep.mjs";
import { app_bible_record_native_open } from "./app_bible_record_native_open.mjs";
import { html_camera_microphone_stream } from "./html_camera_microphone_stream.mjs";
import { app_bible_record_frame_size } from "./app_bible_record_frame_size.mjs";
import { html_request_animation_frame } from "./html_request_animation_frame.mjs";
import { html_canvas_draw_cover } from "./html_canvas_draw_cover.mjs";
import { html_canvas_draw_contain_top } from "./html_canvas_draw_contain_top.mjs";
import { app_bible_record_text_draw_below } from "./app_bible_record_text_draw_below.mjs";
import { html_media_recorder_start } from "./html_media_recorder_start.mjs";
import { app_shared_confirm_over_red } from "./app_shared_confirm_over_red.mjs";
import { firebase_auth_ensure } from "./firebase_auth_ensure.mjs";
import { app_bible_record_take_delete } from "./app_bible_record_take_delete.mjs";
import { app_bible_record_take_kept_delete } from "./app_bible_record_take_kept_delete.mjs";
import { app_bible_record_drafts_upload_all } from "./app_bible_record_drafts_upload_all.mjs";
import { app_bible_record_download_name } from "./app_bible_record_download_name.mjs";
import { app_bible_record_native_download } from "./app_bible_record_native_download.mjs";
import { app_bible_record_native_download_multiple } from "./app_bible_record_native_download_multiple.mjs";
import { app_bible_record_clip_path } from "./app_bible_record_clip_path.mjs";
import { firebase_upload_blob_browser_quiet } from "./firebase_upload_blob_browser_quiet.mjs";
import { app_bible_record_draft_path_of } from "./app_bible_record_draft_path_of.mjs";
import { firebase_delete_browser_if_exists } from "./firebase_delete_browser_if_exists.mjs";
import { app_bible_record_take_sent_keep } from "./app_bible_record_take_sent_keep.mjs";
export function app_bible_record_inline(
  parent,
  chapter_code,
  verse_numbers,
  project_ensure,
  chapter,
  entry,
) {
  "$plain chapter_code";
  "chapter is shared by every recorder in the chapter - {reference, entries, refreshes}: the chapter's name as read (Psalm 1), one entry per passage in verse order, and each recorder's redraw; entry is this passage's own {verse_numbers, blob}.";
  "The recorder for one passage, drawn right under it rather than on a screen of its own (asked for by the human 2026-11-22): the camera picture appears in place, and buttons sit beneath - show camera, record, stop, send; the take plays from its own video.";
  "A BUTTON THAT CANNOT BE PRESSED NOW IS FADED, NOT TAKEN AWAY, using the one disabled look every app here shares, so the buttons never move and a finger already over Stop finds it where it was. Show camera is faded while the camera is on; Record is faded until the camera is on, and while recording; Stop is faded unless recording; Send is faded until there is a take and nothing is recording.";
  "RECORDING AGAIN REPLACES THE TAKE: the old one is thrown away the moment a new one starts, so there is only ever one take per passage to play back or send, and the button says Record again once there is one.";
  "Recording can only start once the preview is showing, so the video does not open on black frames from before the camera woke. Stopping turns the camera and microphone off, so the phone's recording light goes off with it.";
  "What is recorded is the canvas, not the camera: each frame is the camera's picture with the passage drawn over it, so the saved video carries the words exactly as they were shown. The microphone's sound is added to it.";
  "project_ensure is handed what to do once a project is chosen, because nothing is recorded until there is one to put it in.";
  "Sending asks for signing in first, the first time only, because only the owner may add recordings - a recording sent up becomes a video posted to YouTube with nobody looking at it again, so a stranger must not be able to send one.";
  arguments_assert(arguments, 6);
  let area = html_div(parent);
  let camera_video = html_element(area, "video");
  let camera_element = html_component_element_get(camera_video);
  camera_element.muted = true;
  camera_element.playsInline = true;
  html_display_none(camera_video);
  let canvas = html_element(area, "canvas");
  let canvas_element = html_component_element_get(canvas);
  ("the preview is drawn at the upright shape the video really has, centred, rather than stretched across the full width - a full-width box capped in height left the upright frame floating between thick black bars, so it did not look like what it records (human 2026-11-23)");
  html_style_assign(canvas, {
    height: "60vh",
    width: "auto",
    "max-width": "100%",
    margin: "0 auto",
  });
  html_display_none(canvas);
  let playback = html_element(area, "video");
  let playback_element = html_component_element_get(playback);
  playback_element.controls = true;
  playback_element.playsInline = true;
  html_style_assign(playback, {
    height: "60vh",
    width: "auto",
    "max-width": "100%",
    margin: "0 auto",
  });
  html_display_none(playback);
  ("HOW MANY PASSAGES OF THE CHAPTER HAVE A VIDEO is said right under the video, in the page, scrolling away with it (human 2026-11-24: x of x passages have a video for Psalm 1, underneath the video and not fixed). It is the same count the chapter download is offered by, so a count that is wrong can be seen rather than guessed at. REJECTED: the top bar, where it stood first - it stays on screen while the reader scrolls, and it was away from the video it counts.");
  let count_line = html_p_text(parent, "");
  let buttons = html_div(parent);
  let problem = html_p_text(parent, "");
  ("SIGNING IN GETS A PLACE OF ITS OWN: the sign-in empties the place it is shown in, both before and after, so shown where the buttons are it took them away for good (human 2026-11-23: after sending, the buttons were gone until another passage was opened).");
  let sign_in = html_div(parent);
  let camera_on = false;
  let stop = null;
  let stream = null;
  let blob = null;
  let sent = false;
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
  function changed() {
    property_set(entry, "blob", blob);
    for (let each_refresh of refreshes) {
      each_refresh();
    }
  }
  function entries_taken() {
    function lambda(e) {
      let value = property_get(e, "blob");
      let nn = null_not_is(value);
      return nn;
    }
    let taken = list_filter(entries, lambda);
    return taken;
  }
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
    let taken = entries_taken();
    let several = list_size_greater_than(taken, 1);
    let left = list_size(taken);
    let right = list_size(entries);
    let complete = equal(left, right);
    let lists = list_map_property(taken, "verse_numbers");
    let verses_taken = list_concat_multiple(lists);
    let text3 = ebible_verse_numbers_runs_text(verses_taken);
    let chapter_label = complete
      ? text_combine(
          "⬇️ Download video for complete chapter ",
          chapter_reference,
        )
      : text_combine_multiple([
          "⬇️ Download video for ",
          chapter_reference,
          ":",
          text3,
        ]);
    html_text_set(chapter_button, chapter_label);
    let v = String(left);
    let v2 = String(right);
    let text6 = text_combine_multiple([
      v,
      " of ",
      v2,
      " passages have a video for ",
      chapter_reference,
    ]);
    html_text_set(count_line, text6);
    html_text_set(backup_button, "🔄 Back up all unsent videos");
    if (app_bible_record_native_is()) {
      if (several) {
        html_display_block(chapter_button);
      } else {
        html_display_none(chapter_button);
      }
    }
    let text4 = ebible_verse_numbers_runs_text(verse_numbers);
    let text5 = text_combine_multiple([
      "⬇️ Download video for ",
      chapter_reference,
      ":",
      text4,
    ]);
    html_text_set(download_button, text5);
    let recording = null_not_is(stop);
    let have = null_not_is(blob);
    let ready = have && not(recording);
    app_shared_button_disabled_set(camera_button, camera_on);
    app_shared_button_disabled_set(record_button, not(camera_on) || recording);
    let disabled = not(recording);
    app_shared_button_disabled_set(stop_button, disabled);
    app_shared_button_disabled_set(send_button, not(ready) || sent);
    let disabled2 = not(ready);
    app_shared_button_disabled_set(download_button, disabled2);
    app_shared_button_disabled_set(delete_button, disabled2);
    html_text_set(
      record_button,
      have ? "🔴 Record again" : "🔴 Record this passage",
    );
    html_text_set(send_button, sent ? "✅ Sent" : "📤 Send this recording");
  }
  changed();
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
    if (null_is(found) || null_not_is(blob) || camera_on) {
      return;
    }
    blob = found;
    sent = null_is(kept);
    html_media_source_file_set(playback, blob);
    html_display_block(playback);
    changed();
  }
  sent_show();
  async function camera_show() {
    if (camera_on) {
      return;
    }
    camera_on = true;
    playback_element.pause();
    html_display_none(playback);
    changed();
    let passage = await app_bible_record_passage(chapter_code, verse_numbers);
    let reference = property_get(passage, "reference");
    let text = property_get(passage, "text");
    ("INSIDE THE ANDROID APP, THE APP FILMS (human 2026-11-23): a phone's browser only gave a wide, zoomed picture, and the app (android/record) opens the camera upright and whole. The app shows its own camera screen with these same words over it; this page gets the take back and plays and sends it as it would its own. A project is chosen first, because a take sent without one has nowhere to go.");
    if (app_bible_record_native_is()) {
      camera_on = false;
      changed();
      async function native_done(taken, why) {
        if (text_empty_not_is(why)) {
          let text2 = text_combine("Not recorded: ", why);
          html_text_set(problem, text2);
          return;
        }
        blob = taken;
        sent = false;
        html_media_source_file_set(playback, blob);
        html_display_block(playback);
        changed();
        await app_bible_record_take_keep(chapter_code, verse_numbers, blob);
      }
      function native_open() {
        app_bible_record_native_open(reference, text, native_done);
      }
      project_ensure(native_open);
      return;
    }
    ("A CAMERA THAT WILL NOT OPEN SAYS WHY, under the buttons, and Show camera comes back so it can be tried again (human 2026-11-23: the camera isn't working on computer - and nothing on the page said why). The usual reasons are all outside this page - an address that is not https, permission refused, no camera, or another program holding it - so the browser's own words are shown as they are.");
    html_text_set(problem, "");
    try {
      stream = await html_camera_microphone_stream();
    } catch (e) {
      camera_on = false;
      let said = text_combine("The camera did not open: ", e.message);
      html_text_set(problem, said);
      changed();
      return;
    }
    camera_element.srcObject = stream;
    camera_element.play();
    html_display_block(canvas);
    ("every take is upright 9:16 whatever shape the camera sends, so it can go up as a YouTube Short");
    ("THE WHOLE CAMERA PICTURE IS SHOWN, never cropped (human 2026-11-23: camera is very zoomed in on my face). Filling the upright frame from a wide camera picture keeps only its middle third, which is a close-up of a face. So the picture is fitted inside the frame and the rest left black - the text band then sits on the black below it rather than across the face.");
    ("REJECTED: cropping to fill (what this replaced) - the zoom it causes is the complaint. Asking the camera for an upright picture instead - a browser treats the request as a wish, and a phone that still sends a wide picture would be cropped again.");
    let size = app_bible_record_frame_size();
    let width = property_get(size, "width");
    let height = property_get(size, "height");
    canvas_element.width = width;
    canvas_element.height = height;
    let ctx = canvas_element.getContext("2d");
    while (camera_on) {
      await html_request_animation_frame();
      let camera_width = camera_element.videoWidth;
      let camera_height = camera_element.videoHeight;
      if (greater_than(camera_width, 0)) {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, width, height);
        ("an upright camera picture fills the frame, losing only a little at its sides; a wide one is fitted whole, because filling with it is the heavy zoom on a face");
        let upright = greater_than(camera_height, camera_width);
        ("a wide one sits against the top, so the black left over is all beneath it and the words fill that (human 2026-11-23) rather than leaving an empty strip above the face");
        let below = height;
        ("THE PICTURE IS MIRRORED, like a mirror or a phone's selfie camera (human 2026-11-23: can it be mirrored?), so moving left moves left on the screen and the face is the one its owner knows. Only the picture is turned, never the words, and the recording keeps it mirrored too, because what is recorded is this canvas. REJECTED: mirroring only the screen and saving the camera's true view - the take would not match what was set up in the preview.");
        ctx.save();
        ctx.translate(width, 0);
        ctx.scale(-1, 1);
        if (upright) {
          html_canvas_draw_cover(
            ctx,
            camera_element,
            camera_width,
            camera_height,
            width,
            height,
          );
        } else {
          ("THE WHOLE WIDTH OF THE CAMERA PICTURE IS SHOWN, at the top, and the words grow to fill what is left beneath it (human 2026-11-23: camera zoomed in). REJECTED: the picture filling all the room above the words (what this replaced) - it trimmed the wide picture's sides, which is a zoom on the face, the complaint made twice now. The cost: a wide picture in an upright frame can only be a little under half its height, and the bigger words take the rest.");
          below = html_canvas_draw_contain_top(
            ctx,
            camera_element,
            camera_width,
            camera_height,
            width,
            height,
          );
        }
        ctx.restore();
        app_bible_record_text_draw_below(
          ctx,
          width,
          height,
          reference,
          text,
          below,
        );
      }
    }
  }
  function record() {
    project_ensure(start);
  }
  function start() {
    if (not(camera_on) || null_not_is(stop)) {
      return;
    }
    blob = null;
    sent = false;
    let canvas_stream = canvas_element.captureStream(30);
    for (let track of stream.getAudioTracks()) {
      canvas_stream.addTrack(track);
    }
    stop = html_media_recorder_start(canvas_stream);
    changed();
  }
  async function finish() {
    if (null_is(stop)) {
      return;
    }
    let stopping = stop;
    stop = null;
    blob = await stopping();
    camera_on = false;
    for (let track of stream.getTracks()) {
      track.stop();
    }
    html_display_none(canvas);
    html_media_source_file_set(playback, blob);
    html_display_block(playback);
    changed();
    await app_bible_record_take_keep(chapter_code, verse_numbers, blob);
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
    blob = null;
    sent = false;
    playback_element.pause();
    html_display_none(playback);
    changed();
  }
  ("A DOWNLOAD SAYS IT IS WORKING ON ITS OWN BUTTON (human 2026-11-24: a chapter took a while with nothing shown - a loading screen, or a toast so the reader can carry on): the button reads that the video is being got ready and is faded off until the video has been handed to the app, which then says on its own when it is trimming and when it is saved. The rest of the page stays usable meanwhile. REJECTED: a loading screen over the page - it would stop the reader doing anything else for the whole wait.");
  ("SENDING SAYS SO THE SAME WAY (human 2026-11-24: should sending just disable the button like the chapter download, or keep the loading screen?): the Send button reads that it is sending and is faded until the video is up, and the page stays usable. REJECTED: the loading screen the upload drew over the whole page - the one way of waiting that stopped the reader doing anything else, beside two buttons that already waited on their own face.");
  let ready_words = "⏳ Getting the video ready - this can take a minute...";
  async function busy(button, words, work) {
    html_text_set(button, words);
    app_shared_button_disabled_set(button, true);
    try {
      await work();
    } finally {
      app_shared_button_disabled_set(button, false);
      refresh();
    }
  }
  async function backup() {
    await firebase_auth_ensure(sign_in);
    let counts = null;
    async function work() {
      counts = await app_bible_record_drafts_upload_all();
    }
    await busy(backup_button, "⏳ Backing up the videos...", work);
    let backed_up = property_get(counts, "backed_up");
    let failed = property_get(counts, "failed");
    let v3 = String(backed_up);
    let said = text_combine_multiple(["✅ ", v3, " backed up"]);
    if (greater_than(failed, 0)) {
      let v4 = String(failed);
      said = text_combine_multiple([said, ", ", v4, " failed - try again"]);
    }
    html_text_set(backup_button, said);
  }
  async function download() {
    async function work() {
      let name = app_bible_record_download_name(chapter_code, verse_numbers);
      await app_bible_record_native_download(blob, name);
    }
    await busy(download_button, ready_words, work);
  }
  async function chapter_download() {
    async function work() {
      let taken = entries_taken();
      let blobs = list_map_property(taken, "blob");
      let lists2 = list_map_property(taken, "verse_numbers");
      let verses_taken = list_concat_multiple(lists2);
      let name = app_bible_record_download_name(chapter_code, verses_taken);
      await app_bible_record_native_download_multiple(blobs, name);
    }
    await busy(chapter_button, ready_words, work);
  }
  async function send() {
    await firebase_auth_ensure(sign_in);
    async function work() {
      let path = app_bible_record_clip_path(chapter_code, verse_numbers, blob);
      await firebase_upload_blob_browser_quiet(path, blob);
      sent = true;
      ("Once sent, its draft backup is not needed.");
      let draft = app_bible_record_draft_path_of(path);
      await firebase_delete_browser_if_exists(draft);
    }
    await busy(send_button, "⏳ Sending the video...", work);
    changed();
    ("The sent take stays on the phone as sent, so coming back plays it at once (human 2026-11-24).");
    await app_bible_record_take_sent_keep(chapter_code, verse_numbers, blob);
    await app_bible_record_take_kept_delete(chapter_code, verse_numbers);
  }
}
