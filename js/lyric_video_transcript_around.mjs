import { subtract } from "./subtract.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_transcripts_path } from "./lyric_video_transcripts_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { equal } from "./equal.mjs";
export async function lyric_video_transcript_around(
  name_document,
  second,
  seconds_around,
) {
  arguments_assert(arguments, 3);
  ("$plain name_document");
  ("$plain second");
  ("$plain seconds_around");
  ("What one song sounded like it was saying near a given moment, to the listener that was shown no words.");
  ("★ THIS IS THE QUESTION THE WHOLE TRANSCRIPT IS KEPT FOR, AND IT IS ASKED OF A MOMENT RATHER THAN OF A LINE. A line that went unplaced has no moment of its own by definition, so a reader can only come at it sideways - through where the other reading put it - and ask what was heard around there. Asked of the line the answer would always be nothing, which is what was already known.");
  ("It answers with nothing rather than refusing when the song has no transcript kept, because every song heard before the transcript was kept is in exactly that position and there is no fault in it - the reading simply predates the keeping.");
  let path_findings = lyric_video_transcripts_path();
  let there = await file_exists(path_findings);
  if (not(there)) {
    let r = [];
    return r;
  }
  let record = await file_read_json(path_findings);
  let transcript = record[name_document];
  let unkept = equal(transcript, undefined);
  if (unkept) {
    let r2 = [];
    return r2;
  }
  let from = subtract(second, seconds_around);
  let to = second + seconds_around;
  let near = [];
  for (let word of transcript) {
    let after = greater_than_equal(word.start, from);
    let before = less_than_equal(word.start, to);
    if (after && before) {
      near.push(word);
    }
  }
  return near;
}
