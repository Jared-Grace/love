import { app_sandbox_previews_code_review_load } from "./app_sandbox_previews_code_review_load.mjs";
import { property_get } from "./property_get.mjs";
import { app_sandbox_previews_lyric_timing_load } from "./app_sandbox_previews_lyric_timing_load.mjs";
import { app_sandbox_previews_message_private_load } from "./app_sandbox_previews_message_private_load.mjs";
export function app_sandbox_previews() {
  "registry of sandbox previews keyed by URL-hash name: add your own file plus one entry here, then open the sandbox app with #<name> — several people can each preview a different thing on the one sandbox app at once";
  "WHAT IS KEPT HERE IS A WAY TO FETCH EACH PREVIEW RATHER THAN THE PREVIEW ITSELF, so a visit downloads the one preview the address names instead of all of them. The page has only ever shown one at a time, and until now every registration was paid for by everybody: seven previews had grown it to a hundred and forty five KiB, of which two thirds could be reached by exactly one of the seven.";
  "That also stops the ratchet the byte ceiling was climbing. An eighth preview now costs a visitor who does not open it nothing at all, so the ceiling stops being raised once per registration and goes back to meaning what it says.";
  "Each entry is its own small function naming its file outright, and neither half of that is decoration. The builder has to be able to READ which file is wanted before it can set that file aside as a piece of its own to fetch; a path put together while running is a path it cannot read, and what it does with one of those is pack the whole folder in, which is the opposite of what this is for.";
  "★ THE PATH IN EACH FETCH IS SPELLED AS A SIBLING OF THIS FILE, AND A DRAFT WRITTEN ANYWHERE ELSE MUST STILL SPELL IT THAT WAY. The import lines at the top of a draft are rewritten when it is promoted; a path sitting inside a fetch is a piece of text and is not, so a draft that spelled its own folder correctly lands here spelling a folder that is not there. Nothing goes red - it is a fetch that happens when somebody opens that preview, and only then.";
  "★ A RENAME DOES NOT FOLLOW THESE PATHS EITHER, FOR THE SAME REASON. Measured 2026-09-06: renaming a preview into its app's prefix moved the file and left the fetch below spelling the old name, which points at nothing. Every gate that reads import lines stays green, because this is not an import line; the one reading that does see it is the torn-commit check, which scans a commit for any sibling path it has not got, so the fault surfaces as a refused deploy rather than as anything on the machine you renamed it on. After renaming a preview, read this file and mend its entry by hand.";
  async function spinner_load() {
    let m = await import("./app_sandbox_spinner_preview.mjs");
    let r = m.app_sandbox_spinner_preview;
    return r;
  }
  let r2 = app_sandbox_previews_code_review_load();
  let code_review_load = property_get(r2, "code_review_load");
  let song_image_review_load = property_get(r2, "song_image_review_load");
  let typing_box_load = property_get(r2, "typing_box_load");
  let week_calendar_load = property_get(r2, "week_calendar_load");
  let availability_editor_load = property_get(r2, "availability_editor_load");
  let song_image_choose_load = property_get(r2, "song_image_choose_load");
  let song_image_audit_load = property_get(r2, "song_image_audit_load");
  let second_takes_load = property_get(r2, "second_takes_load");
  let dream_trace_load = property_get(r2, "dream_trace_load");
  let dream_prison_load = property_get(r2, "dream_prison_load");
  async function lyric_timing_load() {
    let r13 = await app_sandbox_previews_lyric_timing_load();
    return r13;
  }
  async function word_sound_load() {
    let m = await import("./app_sandbox_word_sound_preview.mjs");
    let r14 = m.app_sandbox_word_sound_preview;
    return r14;
  }
  async function lyric_video_review_load() {
    let m = await import("./lyric_video_review_preview.mjs");
    let r15 = m.lyric_video_review_preview;
    return r15;
  }
  async function reply_rules_load() {
    let m = await import("./app_reply_rules_preview.mjs");
    let r16 = m.app_reply_rules_preview;
    return r16;
  }
  let previews = {
    code_review: code_review_load,
    spinner_preview: spinner_load,
    week_calendar: week_calendar_load,
    availability_editor: availability_editor_load,
    song_image_choose: song_image_choose_load,
    song_image_audit: song_image_audit_load,
    song_image_review: song_image_review_load,
    second_takes: second_takes_load,
    dream_trace: dream_trace_load,
    dream_prison: dream_prison_load,
    typing_box: typing_box_load,
    lyric_timing: lyric_timing_load,
    lyric_video_review: lyric_video_review_load,
    word_sound: word_sound_load,
    message_private: app_sandbox_previews_message_private_load,
    reply_rules: reply_rules_load,
  };
  return previews;
}
