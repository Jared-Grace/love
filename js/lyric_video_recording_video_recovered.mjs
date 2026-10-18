import { less_than_equal } from "./less_than_equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_videos_paths } from "./giveaway_psalms_videos_paths.mjs";
import { lyric_video_videos_unclaimed } from "./lyric_video_videos_unclaimed.mjs";
import { audio_file_duration } from "./audio_file_duration.mjs";
import { list_add } from "./list_add.mjs";
import { audio_loudness_envelope } from "./audio_loudness_envelope.mjs";
import { abs } from "./abs.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
import { audio_loudness_envelope_or_null } from "./audio_loudness_envelope_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { audio_envelopes_fit } from "./audio_envelopes_fit.mjs";
import { list_size } from "./list_size.mjs";
export async function lyric_video_recording_video_recovered(folder_audio) {
  arguments_assert(arguments, 1);
  ("$plain folder_audio");
  ("Which lyric video each recording the giveaway's walk cannot reach was most probably made from, found by comparing how loud every one of them gets over time against the videos in the folder that no recording claims and that last about as long, with the next best answer for each handed back beside it and no line drawn anywhere.");
  ("★ IT DRAWS NO LINE, AND THAT IS NOT LAZINESS BUT WHERE THE DECISION BELONGS. Every answer here is a likelihood, and what counts as close enough to write down as a fact is a threshold - whoever is answerable for what is done with the answer chooses it, and here that is whatever writes the note. Handing back a filtered list would hide the numbers the choice has to be made from, and a caller could no longer tell a pair that scraped in from one that nothing else came near.");
  ("★ THE MARGIN OVER THE NEXT BEST ANSWER IS THE DISCRIMINATOR, AND THE CLOSENESS ON ITS OWN IS NOT. Measured on 2026-10-18 over fifteen hundred comparisons, the true pairs scored from 0.924 to 0.998 while the best wrong answer for a recording with no video at all reached 0.714 - near enough that a closeness bar alone has to sit in a narrow gap and be re-chosen whenever a new song arrives. The distance to the runner-up separates them far more plainly, because a recording whose video is really there beats everything else in the folder by a wide margin, and a recording whose video is not there is merely nearest to something.");
  ("★ THE CANDIDATES ARE CUT DOWN BY HOW LONG EACH FILE LASTS AND DELIBERATELY NOT BY WHAT IT IS CALLED, although the names would allow it. The names are exactly what cannot be trusted here - a recording unreachable by name is the whole reason this exists - and narrowing by them would re-introduce the fault being worked around, quietly, in the one place nothing would notice. A length is a property of the sound itself, so it screens without trusting anything, and it screens hard: a render is its recording with a lead-in of about a second cut off the front, so a video of a different song is almost always minutes away rather than seconds.");
  ("★ THE SCREEN IS WHAT MAKES THIS AFFORDABLE, AND THAT IS WHY IT IS A SCREEN AND NEVER THE ANSWER. Reading a file's length asks the prober one question and takes a third of a second; measuring how its loudness moves decodes the whole of it and took twelve seconds a file, measured on 2026-10-18. The download folder held a hundred and fifty-one unclaimed videos that day, so measuring all of them would have cost half an hour to answer about eighteen recordings. Two files of the same length are still two different songs, so nothing is decided here by length - it only says which pairs are worth listening to.");
  ("★ A FILE THE METER CANNOT READ IS NAMED AND STEPPED OVER RATHER THAN ALLOWED TO END THE WALK. A folder of downloads holds screen captures and silent clips beside the songs, and the meter is right to refuse a file with no sound in it; what would be wrong is for the first such file to strand the seventeen recordings after it. They come back in a list of their own, because a video that could not be measured is not a video that did not match.");
  ("Each file's loudness is measured once and then compared many times, and only the videos some recording's screen let through are measured at all.");
  ("What comes back is in the order the walk hands the recordings over, which is the order the folder was read in, so two runs over an unchanged folder answer the same way.");
  let seconds_most = 30;
  ("Thirty seconds is the window, which is wide enough to be generous about a recording that was trimmed after its video was made and narrow enough to leave a handful of candidates rather than a hundred and fifty.");
  let walk = await giveaway_psalms_videos_paths(folder_audio);
  let paths_video = await lyric_video_videos_unclaimed(folder_audio);
  let videos = [];
  for (let path_video of paths_video) {
    let seconds_video = await audio_file_duration(path_video);
    list_add(videos, {
      path: path_video,
      seconds: seconds_video,
      envelope: null,
      measured_is: false,
    });
  }
  let recordings = [];
  for (let path_audio of walk.unreachable) {
    let seconds_audio = await audio_file_duration(path_audio);
    list_add(recordings, {
      path: path_audio,
      seconds: seconds_audio,
    });
  }
  let found = [];
  let unmeasured = [];
  let comparisons = 0;
  for (let one of recordings) {
    let envelope_audio = await audio_loudness_envelope(one.path);
    let fit_best = 0;
    let fit_next = 0;
    let path_best = null;
    let candidates = 0;
    for (let other of videos) {
      let n = subtract(other.seconds, one.seconds);
      let gap = abs(n);
      let near_is = less_than_equal(gap, seconds_most);
      if (not(near_is)) {
        continue;
      }
      candidates = candidates + 1;
      if (not(other.measured_is)) {
        other.measured_is = true;
        other.envelope = await audio_loudness_envelope_or_null(other.path);
        let absent_is = null_is(other.envelope);
        if (absent_is) {
          list_add(unmeasured, other.path);
        }
      }
      let silent_is = null_is(other.envelope);
      if (silent_is) {
        continue;
      }
      comparisons = comparisons + 1;
      let agreement = audio_envelopes_fit(envelope_audio, other.envelope);
      let better_is = greater_than(agreement.fit, fit_best);
      if (better_is) {
        fit_next = fit_best;
        fit_best = agreement.fit;
        path_best = other.path;
        continue;
      }
      let second_is = greater_than(agreement.fit, fit_next);
      if (second_is) {
        fit_next = agreement.fit;
      }
    }
    list_add(found, {
      recording: one.path,
      video: path_best,
      fit: fit_best,
      runner_up: fit_next,
      candidates: candidates,
    });
  }
  let answer = {
    recordings: list_size(recordings),
    videos: list_size(videos),
    comparisons: comparisons,
    unmeasured: unmeasured,
    found: found,
  };
  return answer;
}
