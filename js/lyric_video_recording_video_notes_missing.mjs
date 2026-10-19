import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_recording_video_notes } from "./lyric_video_recording_video_notes.mjs";
import { path_join } from "./path_join.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
export async function lyric_video_recording_video_notes_missing(folder_audio) {
  arguments_assert(arguments, 1);
  ("$plain folder_audio");
  ("Which of the notes joining a recording to its lyric video name a file that is not in a given folder of songs, told apart by which side of the join has gone - the recording or the video.");
  ("★ IT TAKES THE FOLDER BECAUSE A NOTE HOLDS FILE NAMES AND NEVER PATHS, AND THAT IS THE WHOLE REASON THE NOTES ARE WORTH KEEPING. The folder these songs live in has already moved once, and a note that spelled a path would have died with the move while the join it records stayed perfectly true. So the note says what the two files are called and the caller says where to look, which is the same split the reader next door makes when it answers a name rather than a path.");
  ("★ IT IS A REPORT AND NOT A GATE, BECAUSE EVERY ANSWER IT GIVES IS ABOUT ONE MACHINE. The repo-wide check runs anywhere, and anywhere is mostly a machine that has never held a single one of these recordings - so a gate asking this would fail for everybody who has done nothing wrong, and the only way to keep it quiet would be to make it pass when the folder is empty, at which point it cannot fail at all. What is machine-independent about the store is already gated next door: a note filed under a name that is not the recording it names, and one video claimed by two notes.");
  ("★ THE TWO SIDES ARE REPORTED APART BECAUSE THEY WANT OPPOSITE WORK. A missing video means the render has gone or been moved, and the giveaway will quietly hand that song out with no video at all. A missing recording means the note's own subject has been renamed or deleted - and if the video is still there, the note may now be the only surviving record of what that singing was called, so it is to be read before anything is tidied up rather than after.");
  ("A note with both sides missing appears in both lists on purpose. It reads as a folder that simply does not hold this song - a different machine, or a song moved off to an archive - and nothing about it is a fault to repair, so it is not worth a third list to say so.");
  ("Handing back how many notes were read is what tells a clean answer from a blind one: pointed at the wrong folder this says every note is missing, and pointed at an empty store it says nothing is, and the two look identical without the count.");
  let notes = await lyric_video_recording_video_notes();
  let recordings_missing = [];
  let videos_missing = [];
  for (let one of notes) {
    let path_audio = path_join([folder_audio, one.recording]);
    let held_is = await file_exists(path_audio);
    if (not(held_is)) {
      list_add(recordings_missing, {
        name_note: one.name_note,
        recording: one.recording,
        video: one.video,
      });
    }
    let path_video = path_join([folder_audio, one.video]);
    let rendered_is = await file_exists(path_video);
    if (not(rendered_is)) {
      list_add(videos_missing, {
        name_note: one.name_note,
        recording: one.recording,
        video: one.video,
      });
    }
  }
  let answer = {
    folder: folder_audio,
    notes: list_size(notes),
    recordings_missing: recordings_missing,
    videos_missing: videos_missing,
  };
  return answer;
}
