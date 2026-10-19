import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_videos_unclaimed_duration_joined } from "./lyric_video_videos_unclaimed_duration_joined.mjs";
import { list_concat } from "./list_concat.mjs";
import { lyric_video_recording_video_write } from "./lyric_video_recording_video_write.mjs";
import { list_add } from "./list_add.mjs";
import { giveaway_psalms_videos_paths } from "./giveaway_psalms_videos_paths.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_size } from "./list_size.mjs";
export async function lyric_video_recording_video_notes_from_duration_write(
  folder_audio,
) {
  arguments_assert(arguments, 1);
  ("$plain folder_audio");
  ("Writes down the join for every lyric video that no song claims but that is exactly as many seconds long as one recording, and then asks the giveaway's walk again to show what moved.");
  ("★ IT FINDS ITS OWN SET RATHER THAN BEING HANDED ONE, because the set is not a choice anybody makes - it is whatever the lengths say today, and a list typed out beside it would start drifting from that the next time anything was rendered or renamed. So the join is asked for, acted on, and asked for again.");
  ("★ ONLY EXACT AGREEMENT IS WRITTEN DOWN, WHICH IS THE WHOLE SAFETY OF THIS. A note overrules a grown name, so writing a wrong one hands out a wrong video just as silently as the fault it is repairing. The rows that are close without agreeing are deliberately left alone - an older renderer trimmed by a few seconds and by a different few each time, so near proves nothing and there is no way to tell a true near pair from an accident with length alone.");
  ("★ BOTH KINDS ARE WRITTEN: THE RECORDING WITH NO VIDEO AT ALL AND THE RECORDING HOLDING THE WRONG ONE. The first is an addition and the second is a substitution, and the second is the one worth having - a recording whose grown name landed on some other singing's file plays perfectly while handing a listener the wrong psalm, so nothing complains and nothing else can correct it. Measured on 2026-10-19 there were three of the first and two of the second, and both of the second had already been given away.");
  ("★ IT ASKS THE WALK AGAIN AFTERWARDS RATHER THAN REPORTING WHAT IT MEANT TO DO. A note is only worth writing if the walk changes its answer because of it, and that is a different claim from the file having been written - the walk weighs a note against the grown name by length and may keep the name. So what comes back is which recordings really changed hands, read off the walk itself.");
  ("Running it twice changes nothing. A note that is already right is written again with the same two names, and the rows it repaired are no longer unclaimed the second time, so they are not even offered.");
  let answer_before =
    await lyric_video_videos_unclaimed_duration_joined(folder_audio);
  let rows_joined = answer_before.joined;
  let rows = list_concat(rows_joined, answer_before.taken);
  let written = [];
  for (let row of rows) {
    let note = await lyric_video_recording_video_write(
      row.recording,
      row.video,
    );
    list_add(written, note);
  }
  let walk = await giveaway_psalms_videos_paths(folder_audio);
  let moved = [];
  for (let row of rows) {
    let path_video = property_get(walk.paths, row.recording);
    let taken_is = equal(path_video, row.video);
    if (not(taken_is)) {
      continue;
    }
    list_add(moved, {
      recording: row.recording,
      video: row.video,
    });
  }
  let r = {
    folder: folder_audio,
    offered: list_size(rows),
    written: written,
    moved: moved,
  };
  return r;
}
