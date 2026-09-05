import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_transcripts_path } from "./lyric_video_transcripts_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
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
  ("★ BOTH MOMENTS ARE MADE NUMBERS FIRST, AND LEAVING THAT OUT WIDENED THE FAR EDGE OF THE WINDOW INSTEAD OF FAILING. A command line hands every argument over as text, and one of the two ends of a window is worked out by adding: four and four came back as the forty fourth second rather than the eighth, so the answer held forty seconds of a song and looked entirely reasonable. Subtraction makes numbers of its own accord and so the near edge was right, which is what made the wrong edge hard to see.");
  ("It answers with nothing rather than refusing when the song has no transcript kept, because every song heard before the transcript was kept is in exactly that position and there is no fault in it - the reading simply predates the keeping.");
  let path_findings = lyric_video_transcripts_path();
  let there = await file_exists(path_findings);
  if (not(there)) {
    let none = [];
    return none;
  }
  let record = await file_read_json(path_findings);
  let transcript = record[name_document];
  let unkept = equal(transcript, undefined);
  if (unkept) {
    let none2 = [];
    return none2;
  }
  let at = Number(second);
  let around = Number(seconds_around);
  let from = subtract(at, around);
  let to = add(at, around);
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
