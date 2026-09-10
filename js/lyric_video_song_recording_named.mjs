import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
export function lyric_video_song_recording_named(passage, take) {
  arguments_assert(arguments, 2);
  ("$plain passage");
  ("$plain take");
  ("How one singing of a passage is said in a report: the passage on its own for the first recording, and the passage with the take after it for every one since.");
  ("★ A REPORT THAT SAYS ONLY THE PASSAGE CANNOT BE READ ONCE A PASSAGE IS SUNG MORE THAN ONCE. Psalm 110 has five recordings, so a list of what was made would say Psalm 110 five times over and a list of what was skipped would say it five times too, and nobody could tell which of those runs had been drafted, which had been timed by ear, and which had gone wrong. Naming the singing is what turns a run's answer back into something a person can act on.");
  ("The mark is the number in brackets the recording's own file name carries, so a row of a report and a file in the download folder are said the same way and the one can be found from the other without opening anything.");
  ("It is spelled once and used by every walk over these songs, because a drafting run, a timing run and a rendering run are read side by side, and a passage named three different ways in three reports is three passages as far as a reader is concerned.");
  let first = equal(take, 0);
  if (first) {
    return passage;
  }
  let named = passage + " (" + take + ")";
  return named;
}
