import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_videos_paths } from "./giveaway_psalms_videos_paths.mjs";
import { object_values } from "./object_values.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { lyric_video_file_name_ending } from "./lyric_video_file_name_ending.mjs";
import { path_join } from "./path_join.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_add } from "./list_add.mjs";
import { audio_loudness_envelope } from "./audio_loudness_envelope.mjs";
import { audio_envelopes_fit } from "./audio_envelopes_fit.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
export async function giveaway_psalms_unreachable_videos_fits(folder_audio) {
  arguments_assert(arguments, 1);
  ("$plain folder_audio");
  ("For every recording the giveaway's video walk cannot ask about, which video on the disk holds that recording's own singing - found by comparing the sound rather than the names, and reported beside the runner-up so the closeness of a claim can be judged against the closeness of the nearest wrong answer.");
  ("★ THIS EXISTS BECAUSE THE JOIN IS CARRIED BY A NAME AND THE NAME MOVES. A video is called after the passage it sings and the mark of the recording it was made from, and that mark is the one the recording's own timing document is addressed by. Edit a recording in a session afterwards and its mark changes, so the video keeps a name grown from a mark nothing answers to any more, and the walk that goes looking for the video beside each song finds nothing. The sound did not move. So the recordings the walk had to give up on are exactly the ones whose videos can still be found, just not by reading.");
  ("★ EVERY RECORDING IS COMPARED AGAINST EVERY SPARE VIDEO AND NOT AGAINST THE ONES ITS NAME SUGGESTS. Narrowing by psalm number first would be quicker and would also hide the answer this is for: the whole reason a recording is on this list is that what its name says cannot be trusted. Compared against all of them, every video that is not the answer is a control, so the report carries its own evidence - a winner at nearly one beside a runner-up at six tenths is a different claim from a winner at nearly one with no idea what second place looked like.");
  ("★ IT REPORTS AND DOES NOT WRITE ANYTHING DOWN, BECAUSE THE TWO QUESTIONS COME APART HERE. Which recording made a video is a fact about sound and is settled by the numbers below. Whether that video should then be given away is not: a spare video may be a superseded render - a cut that was replaced, a second version nobody kept - and the walk's own prose says so. Joining the two would publish superseded cuts under the authority of a correlation, which is the mistake this was built after.");
  ("EVERY FILE IS MEASURED ONCE AND THE SHAPES ARE THEN COMPARED IN HAND. Measuring means decoding a whole file and is the entire cost; comparing two shapes already held is arithmetic over a few hundred numbers. Measured per pair instead, the same answer would cost as many decodes as there are pairs rather than as many as there are files.");
  ("A RECORDING WITH NO VIDEO OF ITS PSALM AT ALL STILL GETS A ROW, and its row is the one that says so: its best fit will be poor and will sit among equally poor ones. That is worth reporting rather than filtering, because a recording that was never rendered and a recording whose render was lost are the same shape on the walk above and want opposite work done to them.");
  let walk = await giveaway_psalms_videos_paths(folder_audio);
  let claimed = object_values(walk.paths);
  let names = await folder_read_files(folder_audio);
  let ending = lyric_video_file_name_ending();
  let candidates = [];
  for (let name of names) {
    let lyric_is = name.endsWith(ending);
    if (lyric_is) {
      let path_video = path_join([folder_audio, name]);
      let spare_is = list_includes_not(claimed, path_video);
      if (spare_is) {
        list_add(candidates, path_video);
      }
    }
  }
  let shapes = [];
  for (let path_video of candidates) {
    let shape = await audio_loudness_envelope(path_video);
    list_add(shapes, {
      path: path_video,
      shape: shape,
    });
  }
  let rows = [];
  for (let path_audio of walk.unreachable) {
    let shape_audio = await audio_loudness_envelope(path_audio);
    let best = null;
    let next = null;
    for (let held of shapes) {
      let fit = audio_envelopes_fit(shape_audio, held.shape);
      let said = {
        video: held.path,
        fit: fit.fit,
        offset_seconds: fit.offset_seconds,
        gap_seconds: fit.gap_seconds,
      };
      let none_yet_is = equal(best, null);
      let first_is = none_yet_is ? true : greater_than(said.fit, best.fit);
      if (first_is) {
        next = best;
        best = said;
        continue;
      }
      let second_none_is = equal(next, null);
      let second_is = second_none_is ? true : greater_than(said.fit, next.fit);
      if (second_is) {
        next = said;
      }
    }
    list_add(rows, {
      recording: path_audio,
      best: best,
      next: next,
    });
  }
  let r = {
    spare_videos: candidates.length,
    rows: rows,
  };
  return r;
}
