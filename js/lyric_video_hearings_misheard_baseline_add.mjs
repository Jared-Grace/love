import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { lyric_video_hearings_mispaired_and_misheard } from "./lyric_video_hearings_mispaired_and_misheard.mjs";
import { property_get } from "./property_get.mjs";
import { lyric_video_hearings_misheard_baseline_path } from "./lyric_video_hearings_misheard_baseline_path.mjs";
import { baseline_known_add } from "./baseline_known_add.mjs";
export async function lyric_video_hearings_misheard_baseline_add(names_comma) {
  arguments_assert(arguments, 1);
  ("$plain names_comma");
  ("Record named recordings as the right psalm sung too unclearly to follow, so the gate stops failing on them and keeps failing on every other one.");
  ("★ LISTEN BEFORE CALLING THIS, BECAUSE IT IS THE ONE PLACE A WRONGLY PAIRED RECORDING COULD BE BLESSED. The gate already separates the two faults by itself, and a recording of a different psalm fails as a mispairing that this cannot touch. What reaches here is a recording whose words were caught too rarely to be sure from the numbers alone, so the evidence is the transcript: ask `",
    fn_name("lyric_video_transcript_around"),
    "` for what was actually heard and check the words are this psalm's before recording the name.");
  ("It refuses a name that is not failing right now and a name the record already holds, because both of those are its caller believing something untrue about the file, and it is the shared finder that decides which names are failing, so a blessing can never name one the gate is not red about.");
  let names = text_split_comma(names_comma);
  let found = await lyric_video_hearings_mispaired_and_misheard();
  let offending = property_get(found, "misheard");
  let path = lyric_video_hearings_misheard_baseline_path();
  let r = await baseline_known_add(names, path, offending);
  return r;
}
