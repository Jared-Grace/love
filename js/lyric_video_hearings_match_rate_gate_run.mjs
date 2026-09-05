import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_hearings_path } from "./lyric_video_hearings_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { lyric_video_match_rate_floor } from "./lyric_video_match_rate_floor.mjs";
import { less_than } from "./less_than.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function lyric_video_hearings_match_rate_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: of every song that has been listened to, enough of its written psalm was actually heard in the recording to believe the two are the same song.");
  ("★ WHAT THIS CATCHES IS A PAIRING AND NOT A PERFORMANCE, AND NOTHING ELSE IN THE PIPELINE CAN CATCH IT. The aligner is handed the words and lays them onto whatever sound it is given, so it cannot report that it was given the wrong sound; it will place every line of one psalm onto the singing of another and hand back times that look exactly like times. Only the transcriber, which is shown no words at all, is in a position to disagree, and this is the number in which its disagreement shows up. A file named for one psalm holding another's recording renders a whole video whose words never once match what is sung, and the first reader of that fault is a person watching it.");
  ("★ HOW MANY HEARINGS WERE READ TRAVELS OUT WITH THE VERDICT, because a record that has moved, been emptied or been renamed reads here as every song passing. The count is the difference between finding no fault and looking at nothing, which are otherwise the same green word.");
  ("The floor is asked for rather than written down here, because it is a judgement about a measurement and belongs beside the argument that set it, where changing it is one edit and not two.");
  let path_findings = lyric_video_hearings_path();
  let hearings = await file_read_json(path_findings);
  let names = object_property_names(hearings);
  let floor = lyric_video_match_rate_floor();
  let unheard = [];
  for (let name of names) {
    let hearing = hearings[name];
    let below = less_than(hearing.match_rate, floor);
    if (below) {
      let one = {
        name,
        match_rate: hearing.match_rate,
        floor,
      };
      unheard.push(one);
    }
  }
  list_empty_is_assert_json(unheard, {
    hint: "a song was heard to hold almost none of the psalm it is filed under, which nearly always means the audio and the text are a mismatched pair - open the named recording and check it is the chapter the file is named for before touching the floor",
  });
  let r = {
    heard: names.length,
    floor,
  };
  return r;
}
