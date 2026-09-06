import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function lyric_video_faults_path(path_output) {
  "$plain path_output";
  "Where the list of a video's drawing faults is kept - beside the video itself and named after it.";
  "★ IT SITS BESIDE THE VIDEO RATHER THAN IN A FOLDER OF ITS OWN SO THAT THE TWO CANNOT BE SEPARATED. A video and the verdict on it are one thing to move and one thing to delete; a list kept somewhere else outlives the video it describes and then reports faults in a file nobody has any more.";
  "★ ONE FUNCTION SPELLS IT BECAUSE TWO THINGS NEED IT AND THEY NEED THE SAME ANSWER. The render writes the file and the sweep reads it back. Spelled twice they would agree until one was changed - and the way that failure shows is the sweep finding nothing and reporting every chapter clean.";
  arguments_assert(arguments, 1);
  let path = text_combine_multiple([path_output, ".faults.json"]);
  return path;
}
