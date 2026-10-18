import { arguments_assert } from "./arguments_assert.mjs";
import { path_join } from "./path_join.mjs";
import { data_given_folder } from "./data_given_folder.mjs";
export function lyric_video_recording_video_notes_folder() {
  arguments_assert(arguments, 0);
  ("Where the notes saying which video was rendered from which recording are kept, one note per recording.");
  ("★ THIS EXISTS BECAUSE THE JOIN BETWEEN A RECORDING AND ITS VIDEO WAS BEING WORKED OUT AFTERWARDS FROM A NAME, AND A NAME IS NOT WHERE THAT FACT LIVES. A video's name is grown from the passage, the translation and a mark that says which singing of the passage this is - and that mark is worked out over the whole set of recordings, so it changes when the set changes. Somebody edits a recording, the set it belongs to is a different set, the mark it would be given now is not the mark its video was rendered under, and the grown name names a file that is not there. Measured on 2026-10-16 that silently lost eighteen recordings, Psalm 131's only two among them, and their finished videos sat on the disk claimed by nothing.");
  ("★ THE RENDER IS THE ONLY MOMENT THE FACT IS KNOWN FOR CERTAIN, SO IT IS WRITTEN DOWN THERE. Whatever renders a video is holding the recording it opened and the file it wrote in the same breath, and it was throwing both away. Recovered later the same join costs a reading of the sound of every candidate - fifteen hundred comparisons for eighteen recordings on 2026-10-18 - and comes back as a likelihood rather than as a fact.");
  ("★ IT IS A NOTE PER RECORDING AND NOT ONE FILE HOLDING ALL OF THEM, BECAUSE SEVERAL AGENTS AND A PERSON WORK IN THIS FOLDER AT ONCE AND A RENDER IS LONG. Two renders finishing around each other would both read one shared file, both add their row to what they read, and the second to write would put back a file missing the first one's row. Nothing would be red and nothing would say which row went. A note named after its own recording is written by exactly one render and cannot be stepped on.");
  ("It sits in the given half of the data folder rather than the found half, because it is read to decide what happens next - which video gets given away beside which song - and not kept as a record of what some run once answered.");
  let path2 = data_given_folder();
  let path = path_join([path2, "lyric_video_recording_video"]);
  return path;
}
