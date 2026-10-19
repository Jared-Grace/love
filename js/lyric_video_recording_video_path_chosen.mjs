import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_recording_video_path_or_null } from "./lyric_video_recording_video_path_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { audio_file_duration_or_null } from "./audio_file_duration_or_null.mjs";
import { and } from "./and.mjs";
import { not } from "./not.mjs";
export async function lyric_video_recording_video_path_chosen(
  path_audio,
  path_video_named,
) {
  arguments_assert(arguments, 2);
  ("$plain path_audio");
  ("$plain path_video_named");
  ("Which of the two videos a recording can be offered is really its own - the one the file name grows to, or the one a render wrote down - decided by length where the two disagree.");
  ("★ NEITHER SIDE IS TRUSTED OVER THE OTHER, BECAUSE BOTH HAVE BEEN MEASURED WRONG. A grown name is rebuilt afterwards out of a timing document and a mark, and nothing in it checks that the file answering to that name is the file that was made, so a recording renamed after its render is handed whatever else now answers to the old name - Psalm 134 was given a video twelve seconds shorter than itself and Psalm 119 verses 129 to 136 one fourteen seconds shorter. A note is written by the render that made the video, but it records one render and not the latest one, so a second render that wrote no note leaves the note pointing at a file that has been superseded - measured on 2026-10-19, four of the fourteen notes did exactly that. A fixed order of asking gets one of those two faults whichever way round it is written.");
  ("★ LENGTH DECIDES BECAUSE IT IS THE ONE THING NEITHER SIDE INVENTS. The renderer in use writes the video to the recording's own length, so a true pair agrees in every digit, and a file of a different singing cannot agree except by accident. Nothing here is grown, spelled or remembered - the number is read off both files at the moment the question is asked, so it cannot go stale the way a name or a note can.");
  ("★ ONLY AGREEING EXACTLY COUNTS, AND ONLY WHEN THE OTHER SIDE DOES NOT. An older generation of the renderer trimmed the video by a few seconds, and by a different few each time - between two and five seconds across the renders measured - so being close proves nothing and a nearest-wins rule would be a guess wearing a number. So the note wins exactly one way: it agrees to the digit and the grown name does not. Everything else keeps the grown name, which is what this walk did before any note existed.");
  ("★ THE TWO FILES ARE ONLY MEASURED WHEN THEY DISAGREE, which on the folder measured was four rows out of five hundred and sixty-four. Where there is no note, or no file under the grown name, or both point at the same file, the answer is already certain and reading a duration would be three subprocesses spent to confirm it.");
  ("★ A LENGTH THAT CANNOT BE READ KEEPS THE GROWN NAME RATHER THAN ENDING THE WALK. Several people render into this folder at once, and an mp4 half written has no length at all until it is finished - measured on 2026-10-19 a walk died on a sixty-four megabyte video a peer was mid-render on. An unknown length is not evidence of anything, so it simply fails to be an exact match and the ordinary answer stands. The recording's own length is asked first for the same reason: if that cannot be read there is nothing to compare either side against, and two unknowns would otherwise read as agreeing.");
  let path_noted = await lyric_video_recording_video_path_or_null(path_audio);
  let noted_absent_is = null_is(path_noted);
  if (noted_absent_is) {
    return path_video_named;
  }
  let named_absent_is = null_is(path_video_named);
  if (named_absent_is) {
    return path_noted;
  }
  let same_is = equal(path_noted, path_video_named);
  if (same_is) {
    return path_noted;
  }
  let seconds_audio = await audio_file_duration_or_null(path_audio);
  let unmeasured_is = null_is(seconds_audio);
  if (unmeasured_is) {
    return path_video_named;
  }
  let seconds_noted = await audio_file_duration_or_null(path_noted);
  let seconds_named = await audio_file_duration_or_null(path_video_named);
  let noted_exact_is = equal(seconds_noted, seconds_audio);
  let named_exact_is = equal(seconds_named, seconds_audio);
  let right = not(named_exact_is);
  let noted_only_is = and(noted_exact_is, right);
  if (noted_only_is) {
    return path_noted;
  }
  return path_video_named;
}
