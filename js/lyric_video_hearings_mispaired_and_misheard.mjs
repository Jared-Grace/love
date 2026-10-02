import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_hearings_path } from "./lyric_video_hearings_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { lyric_video_match_rate_floor } from "./lyric_video_match_rate_floor.mjs";
import { lyric_video_psalm_share_floor } from "./lyric_video_psalm_share_floor.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { lyric_video_hearing_psalm_share } from "./lyric_video_hearing_psalm_share.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
export async function lyric_video_hearings_mispaired_and_misheard() {
  arguments_assert(arguments, 0);
  ("Of every song that has been listened to, the ones whose recording looks like a different psalm's, and separately the ones that look like the right psalm sung and badly heard.");
  ("★ THE TWO FAULTS WERE ONE LIST UNTIL 2026-10-02 AND THEY ARE NOT THE SAME FAULT. A recording filed under the wrong psalm renders a whole video whose words never once match what is sung, and no amount of it is acceptable. A recording of the right psalm that the transcriber could not follow has times worth less than usual and a video that is otherwise correct. Held in one list the second kind has to be answered by lowering the floor, which blesses the first kind along with it.");
  ("★ WHAT SORTS THEM IS WHICH COUNT THE MATCHED WORDS ARE DIVIDED BY, and both counts were already being kept. Falling short of the words written is what raises the question; holding few of the words heard is what answers it. Psalm 104 verses 1 to 4, third singing, heard 25 words of 71 written and 22 of those 25 were the psalm's, so it is plainly the right psalm and plainly hard to hear.");
  ("It is asked as its own question so that the gate and the command that blesses a known one read the same answer, because a ratchet whose two halves work out their offenders separately can bless a name the gate is not failing on.");
  let path_findings = lyric_video_hearings_path();
  let hearings = await file_read_json(path_findings);
  let names = object_property_names(hearings);
  let rate_floor = lyric_video_match_rate_floor();
  let share_floor = lyric_video_psalm_share_floor();
  let mispaired = [];
  let misheard = [];
  for (let name of names) {
    let hearing = hearings[name];
    let below = less_than(hearing.match_rate, rate_floor);
    if (not(below)) {
      continue;
    }
    let share = lyric_video_hearing_psalm_share(hearing);
    let unmeasured = equal(share, null);
    if (unmeasured) {
      list_add(misheard, name);
      continue;
    }
    let foreign = less_than(share, share_floor);
    if (foreign) {
      let one = {
        name,
        match_rate: hearing.match_rate,
        psalm_share: share,
        share_floor,
      };
      list_add(mispaired, one);
      continue;
    }
    list_add(misheard, name);
  }
  let r = {
    heard: list_size(names),
    mispaired,
    misheard,
  };
  return r;
}
