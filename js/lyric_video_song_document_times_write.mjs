import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { lyric_video_document_times_measure } from "./lyric_video_document_times_measure.mjs";
import { equal } from "./equal.mjs";
import { error } from "./error.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { lyric_timing_lines_timed } from "./lyric_timing_lines_timed.mjs";
import { lyric_video_times_machine_word } from "./lyric_video_times_machine_word.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_song_document_times_write(
  path_audio,
  path_document,
) {
  arguments_assert(arguments, 2);
  ("$plain path_audio");
  ("$plain path_document");
  ("Listens to one song and writes where each of its lines begins into its timing document, handing back how much of it was heard and which lines the two readings disagreed on.");
  ("★ NOTHING HEARD IS FILED IN THE FINDINGS FOLDER, WHICH IS THE ONE DIFFERENCE FROM THE PSALMS' STEP. A psalm's words are already public, so keeping its transcript beside the repo costs nothing; a song's words are its writer's, and a transcript committed to a public repo would publish them before anybody decided to. What a person needs to judge the timing - the rate and the flagged lines - comes back in the answer instead.");
  ("A song that neither reading could hear is refused loudly, because a document silently left holding its even spread renders a video that looks finished and is not.");
  let document = await file_read_json(path_document);
  let measured = await lyric_video_document_times_measure(
    path_audio,
    path_document,
  );
  if (equal(measured, null)) {
    error("one of the two readings could not read this recording");
  }
  let texts = list_map_property(document.lines, "text");
  let lines = lyric_timing_lines_timed(
    measured.starts,
    texts,
    document.duration,
  );
  document.lines = lines;
  document.times_from = lyric_video_times_machine_word();
  await file_overwrite_json(path_document, document);
  let r = {
    path_document,
    lines: lines.length,
    match_rate: measured.match_rate,
    confidence: measured.confidence,
    flagged: measured.flagged,
  };
  return r;
}
