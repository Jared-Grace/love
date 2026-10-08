import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { equal } from "./equal.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_document_youtube_id_add(path_document, id) {
  arguments_assert(arguments, 2);
  ("$plain path_document");
  ("$plain id");
  ("Records on disk the youtube id a lyric video was published under, adding it to the timing document the video was made from - a psalm's or a song's alike.");
  ("★ AN ID ON SOMEONE ELSE'S SERVER IS THE ONE FACT NOTHING HERE WRITES DOWN. The bytes of a published video live on youtube and the repo holds no trace of them, so the id survives only in whoever remembers it. Carried in a conversation it reads like a fact rather than like a measurement, because an identifier has no verb in it, and a measurement nobody wrote down decays into hearsay. On 2026-09-19 an id carried that way named a video youtube says does not exist, and was twice offered as something to delete.");
  ("★ IT KEEPS A LIST AND NEVER ONE VALUE, BECAUSE A VIDEO IS PUBLISHED MORE THAN ONCE. A re-upload replaces the video people watch but not the video that existed, and a field holding one id loses the earlier one at exactly the moment the earlier one starts mattering, which is when someone has to go and take it down. The list is in the order they were published, so the last one is the current one.");
  ("★ IT TAKES THE DOCUMENT'S PATH RATHER THAN A NAME, because psalm documents and song documents live in different folders and a recording of a psalm is addressed by a mark the caller already worked out. The song form names its folder and hands the path here.");
  ("Adding an id already in the list changes nothing and says so, so it is safe to run again when nobody remembers whether it was run.");
  let document = await file_read_json(path_document);
  let ids = document.youtube_ids;
  if (equal(ids, undefined)) {
    ids = [];
  }
  let held = ids.includes(id);
  if (held) {
    let r2 = {
      path_document,
      id,
      added: false,
      youtube_ids: ids,
    };
    return r2;
  }
  ids.push(id);
  document.youtube_ids = ids;
  await file_overwrite_json(path_document, document);
  let r = {
    path_document,
    id,
    added: true,
    youtube_ids: ids,
  };
  return r;
}
