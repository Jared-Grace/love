import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_documents_hand_times_unkept } from "./lyric_video_documents_hand_times_unkept.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { lyric_video_hand_times_read } from "./lyric_video_hand_times_read.mjs";
import { object_property_names } from "./object_property_names.mjs";
export async function lyric_video_hand_times_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: no timing a person sat and tapped exists in only one place - every document holding a person's moments has a copy of those moments kept beside the findings.");
  ("★ THIS IS THE ONE FAULT IN THE PIPELINE THAT NOTHING CAN REPAIR AFTERWARDS. A wrong time can be tapped again, a wrong pairing can be spotted and the song heard once more, a bad render can be rendered; an evening of somebody's listening that got written over is simply gone, and the writing over is done by a command that runs in a minute. So the check is not that the work is correct but that it still exists twice, and it is worth running on every commit for the same reason a copy is worth keeping at all - the day it matters is not announced in advance.");
  ("★ IT FAILS ON A STALE COPY AND NOT ONLY ON A MISSING ONE, which is what makes it worth more than a folder listing. Somebody comes back to a half-timed psalm and moves six lines; the copy from last week is still sitting there, and a check that counted files would go on calling that safe right up until the newer work was lost.");
  ("How many copies are held travels out with the verdict, because a record that has been moved or emptied reads here as nothing being unkept - the same green word as a record that is complete.");
  let unkept = await lyric_video_documents_hand_times_unkept();
  list_empty_is_assert_json(unkept, {
    hint: text_combine_multiple([
      "a person's timings are held in one place only - keep a copy of them with ",
      fn_name("lyric_video_documents_hand_times_keep"),
      " before anything else is done to these documents",
    ]),
  });
  let kept = await lyric_video_hand_times_read();
  let names = object_property_names(kept);
  let r = {
    kept: names.length,
  };
  return r;
}
