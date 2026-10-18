import { arguments_assert } from "./arguments_assert.mjs";
import { path_join } from "./path_join.mjs";
import { lyric_video_recording_video_notes_folder } from "./lyric_video_recording_video_notes_folder.mjs";
export function lyric_video_recording_video_note_path(name_audio) {
  arguments_assert(arguments, 1);
  ("$plain name_audio");
  ("Where the note saying which video was rendered from one named recording is kept.");
  ("★ THE NOTE IS NAMED AFTER THE RECORDING EXACTLY AS THE RECORDING IS NAMED, WITH NOTHING WORKED OUT FROM IT. The whole fault this store was built for was a name being grown from parts and arriving at a file that is not there, so growing a second name the same way would reproduce it one folder along. The recording's own file name is handed over whole and an ending is put after it, which is the one change that cannot be wrong.");
  ("★ IT IS KEYED BY THE RECORDING AND NOT BY THE VIDEO, BECAUSE THE ONLY THING THAT ASKS IS HOLDING A RECORDING. The walk that hands out a song and its video goes over the folder of recordings and wants, for each one, the video of it - so keyed this way it is one lookup, and keyed by the video it would have to read every note on the disk to turn them round first. Keyed by the video would serve a walk that starts from the videos and asks what each one is of, which is a real question and has nothing asking it today.");
  ("A recording is renamed from time to time, and when it is, the note is left behind under the old name and a fresh render writes a new one. That is why the reader is written to treat a note naming a video that is not on the disk as no answer rather than as an answer.");
  let name_note = name_audio + ".json";
  let path2 = lyric_video_recording_video_notes_folder();
  let path = path_join([path2, name_note]);
  return path;
}
