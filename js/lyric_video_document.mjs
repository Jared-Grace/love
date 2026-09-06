import { lyric_video_frame_sizes } from "./lyric_video_frame_sizes.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function lyric_video_document(passage, credit, duration, lines) {
  "$plain passage";
  "$plain credit";
  "$plain duration";
  "$plain lines";
  "Gathers a passage, its translation's terms, how long the sound runs and the lines already timed into the one document a lyric video is rendered from.";
  "★ THE SIZES ARE CARRIED IN THE DOCUMENT BUT NO LONGER SPELLED HERE, because a document is read long after it was made and whoever reads one wants to see how big its lettering was without going anywhere else. What has gone is the second spelling of the numbers: where the words are cut into screens asks the sizes before a document exists, so the two halves once wrote them out separately and a change to one drew a video the other had not been told about. Changing a lettering size is still the commonest thing to want next, and it is now done in the one place both halves ask.";
  "★ WHERE THE TIMES CAME FROM IS DELIBERATELY NOT ASKED HERE, AND THAT IS WHAT LETS ONE RENDERER SERVE BOTH KINDS OF RECORDING. A song's lines are placed by two readings of the recording set against each other and corrected by ear only where those disagree; a spoken chapter's lines are measured exactly, because each one was recorded into its own file and its length is simply read off it. Those are opposite ways of arriving at a number and the same kind of number once arrived at, so the difference belongs in whoever works them out and nowhere past that.";
  arguments_assert(arguments, 4);
  let document = {
    passage,
    credit,
    duration,
    ...lyric_video_frame_sizes(),
    lines,
  };
  return document;
}
