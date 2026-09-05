import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_hand_times_read } from "./lyric_video_hand_times_read.mjs";
import { lyric_video_documents_hand_named } from "./lyric_video_documents_hand_named.mjs";
import { equal } from "./equal.mjs";
import { json_equal } from "./json_equal.mjs";
import { not } from "./not.mjs";
export async function lyric_video_documents_hand_times_unkept() {
  arguments_assert(arguments, 0);
  ("The documents holding a person's timings for which no copy of those timings has been kept, and the ones whose copy is of an older evening's work than the document now holds.");
  ("★ A COPY THAT IS MERELY PRESENT IS NOT A BACKUP, WHICH IS WHY THE MOMENTS THEMSELVES ARE COMPARED. Somebody who comes back and moves six lines has made the kept copy wrong, and a check that asked only whether a copy exists would go on saying that work is safe for as long as it sits there. Standing over an out-of-date copy is the failure this is worth having at all, so the comparison is the whole of the answer and the presence of a file is none of it.");
  ("It is asked as its own question so that the keeping can ask it twice - once to find its work and once to show there is none left - and so that a gate can later ask it without keeping anything.");
  let kept = await lyric_video_hand_times_read();
  let hand = await lyric_video_documents_hand_named();
  let unkept = [];
  for (let one of hand) {
    let was = kept[one.name];
    let absent = equal(was, undefined);
    if (absent) {
      unkept.push(one);
      continue;
    }
    let same = json_equal(was.lines, one.document.lines);
    if (not(same)) {
      unkept.push(one);
    }
  }
  return unkept;
}
