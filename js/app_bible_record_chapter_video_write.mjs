import { property_get } from "./property_get.mjs";
import { app_bible_record_chapter_video_write_command_words } from "./app_bible_record_chapter_video_write_command_words.mjs";
import { app_bible_record_chapter_video_write_add } from "./app_bible_record_chapter_video_write_add.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { folder_private_storage_path } from "./folder_private_storage_path.mjs";
import { path_join } from "./path_join.mjs";
import { ffmpeg_words_run } from "./ffmpeg_words_run.mjs";
export async function app_bible_record_chapter_video_write(
  project,
  chapter_code,
) {
  "$plain project";
  "$plain chapter_code";
  ("Joins one recorded chapter into one video on this machine, the way the phone's Download does it (human 2026-11-25: videos for the reading channel, concat and trim the same way the app does): each passage's newest take in verse order, each cut down to its speaking by ",
    fn_name("video_speech_span_or_null"),
    ", the same rule the phone runs. Reads the takes ",
    fn_name("app_bible_record_takes_download"),
    " brought down, and answers {path, kept} - the video written and what was kept of each take, said the way the phone says it.");
  ("THE NEWEST TAKE IS THE ONE STILL KEPT ON THE PHONE, backed up as a draft, before the one sent - the same order ",
    fn_name("app_bible_record_take_or_null"),
    " picks in, because a take is only kept on the phone when it was made after anything sent.");
  ("The video goes in the private folder outside every repo, beside the takes and not among them, since a video of somebody reading has no business in a public repo and a joined chapter is not a take anything should mistake for one.");
  arguments_assert(arguments, 2);
  let path2 = path_join(["bible_record", project, chapter_code]);
  let folder = folder_private_storage_path(path2);
  let draft = path_join([folder, "draft"]);
  let by_passage = {};
  await app_bible_record_chapter_video_write_add(folder, by_passage);
  await app_bible_record_chapter_video_write_add(draft, by_passage);
  function first_verse(passage) {
    let r = Number.parseInt(passage.split(",")[0], 10);
    return r;
  }
  let r2 = await app_bible_record_chapter_video_write_command_words(
    first_verse,
    by_passage,
    project,
    chapter_code,
  );
  let command_words = property_get(r2, "command_words");
  let kept = property_get(r2, "kept");
  let output = property_get(r2, "output");
  await ffmpeg_words_run(command_words);
  let r = {
    path: output,
    kept,
  };
  return r;
}
