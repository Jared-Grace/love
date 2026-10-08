import { lyric_video_starts_heard_first } from "./lyric_video_starts_heard_first.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { lyric_video_document_times_hand_is } from "./lyric_video_document_times_hand_is.mjs";
import { lyric_video_hearings_path } from "./lyric_video_hearings_path.mjs";
import { property_get } from "./property_get.mjs";
import { lyric_timing_lines_timed } from "./lyric_timing_lines_timed.mjs";
import { lyric_video_times_machine_word } from "./lyric_video_times_machine_word.mjs";
import { lyric_video_document_pictures_times_derive } from "./lyric_video_document_pictures_times_derive.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_document_times_rechoose_write(
  path_document,
  name_document,
) {
  arguments_assert(arguments, 2);
  ("$plain path_document");
  ("$plain name_document");
  ("Re-times a song's lines from the two readings already kept for it, taking the hearing at every line it heard and the aligner elsewhere, without listening to the recording again.");
  ("★ BOTH READINGS WERE KEPT FOR EXACTLY THIS. Listening costs minutes per song; the moments each reading chose are filed under the document's name, so a better rule for choosing between them is applied to every song already heard in no time at all.");
  ("★ IT REFUSES A DOCUMENT A PERSON TIMED, for the same reason the listening does: a person's ear beats either reading everywhere.");
  let document = await file_read_json(path_document);
  if (lyric_video_document_times_hand_is(document)) {
    let r = {
      path_document,
      wrote: false,
      why: "a person timed this document",
    };
    return r;
  }
  let file_path = lyric_video_hearings_path();
  let hearings = await file_read_json(file_path);
  let hearing = property_get(hearings, name_document);
  let starts = lyric_video_starts_heard_first(
    hearing.starts,
    hearing.starts_heard,
  );
  function lambda(line) {
    let r2 = line.text;
    return r2;
  }
  let texts = document.lines.map(lambda);
  function lambda2(line) {
    let r3 = line.start;
    return r3;
  }
  let before = document.lines.map(lambda2);
  document.lines = lyric_timing_lines_timed(starts, texts, document.duration);
  document.times_from = lyric_video_times_machine_word();
  lyric_video_document_pictures_times_derive(document, 0);
  await file_overwrite_json(path_document, document);
  function lambda3(line) {
    let r4 = line.start;
    return r4;
  }
  let after = document.lines.map(lambda3);
  let r5 = {
    path_document,
    wrote: true,
    before,
    after,
  };
  return r5;
}
