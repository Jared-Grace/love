import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_recording_video_notes } from "./lyric_video_recording_video_notes.mjs";
import { text_combine } from "./text_combine.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { list_includes } from "./list_includes.mjs";
export async function lyric_video_recording_video_notes_unsound() {
  arguments_assert(arguments, 0);
  ("The two ways the store of recording-to-video notes can be wrong about itself: a note whose file name is not the recording it names, and a video named by more than one note.");
  ("★ A NOTE WHOSE FILE NAME DISAGREES WITH ITS CONTENTS IS UNREACHABLE AND SAYS NOTHING ABOUT IT. The store is read by growing the file name from the recording being asked about, so a note filed under one name and saying another is never found by anybody: the recording it names reads as unrendered, and the name it is filed under reads as a recording that nothing on the disk answers to. Nothing throws, nothing is empty, and the video it was written to rescue quietly stays out of the giveaway.");
  ("★ TWO NOTES NAMING ONE VIDEO WOULD HAND THE SAME FILE OUT TWICE UNDER TWO DIFFERENT SONGS. A listener downloading both would get what look like two singings of a psalm and hear one, which is worse than a missing video because it reads as complete. One of the two notes is wrong and nothing here can say which - that is a person's job, with their ears - so this names the clash rather than choosing.");
  ("★ WHETHER THE FILES STILL EXIST IS NOT ASKED HERE AND IS NOT A FAULT OF THE STORE. A recording renamed after its video was rendered leaves a note under the old name, and the reader is written to treat a note naming a file that is not on the disk as no answer at all - so that case already fails safe, by design, and gating on it would fail every machine that does not hold the songs. Only what the notes say about each other is judged here, which is the part that is true on any machine.");
  let notes = await lyric_video_recording_video_notes();
  let misnamed = [];
  for (let one of notes) {
    let name_wanted = text_combine(one.recording, ".json");
    let named_is = equal(one.name_note, name_wanted);
    if (not(named_is)) {
      list_add(misnamed, {
        name_note: one.name_note,
        recording: one.recording,
        name_wanted: name_wanted,
      });
    }
  }
  let shared = [];
  let said = [];
  for (let one of notes) {
    let recordings = [];
    for (let other of notes) {
      let same_is = equal(other.video, one.video);
      if (same_is) {
        list_add(recordings, other.recording);
      }
    }
    let left = list_size(recordings);
    let alone_is = equal(left, 1);
    if (alone_is) {
      continue;
    }
    let told_is = list_includes(said, one.video);
    if (told_is) {
      continue;
    }
    list_add(said, one.video);
    list_add(shared, {
      video: one.video,
      recordings: recordings,
    });
  }
  let answer = {
    notes: list_size(notes),
    misnamed: misnamed,
    shared: shared,
  };
  return answer;
}
