import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
export function lyric_video_song_recording_named(passage, mark) {
  arguments_assert(arguments, 2);
  ("$plain passage");
  ("$plain mark");
  ("How one recording of a passage is said in a report: the passage on its own for the plain recording, and the passage with its mark after it for every other recording of the same words.");
  ("★ A REPORT THAT SAYS ONLY THE PASSAGE CANNOT BE READ ONCE A PASSAGE IS SUNG MORE THAN ONCE. Psalm 110 has five recordings, so a list of what was made would say Psalm 110 five times over and a list of what was skipped would say it five times too, and nobody could tell which of those runs had been drafted, which had been timed by ear, and which had gone wrong. Naming the recording is what turns a run's answer back into something a person can act on.");
  ("The mark is the same one the recording's document is addressed by, so a row of a report and a file on the disk are said the same way and the one can be found from the other without opening anything.");
  ("It is spelled once and used by every walk over these songs, because a drafting run, a timing run and a rendering run are read side by side, and a passage named three different ways in three reports is three passages as far as a reader is concerned.");
  let plain = equal(mark, "");
  if (plain) {
    return passage;
  }
  let named = passage + " (" + mark + ")";
  return named;
}
