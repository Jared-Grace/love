import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_hearings_mispaired_and_misheard } from "./lyric_video_hearings_mispaired_and_misheard.mjs";
import { property_get } from "./property_get.mjs";
import { lyric_video_hearings_misheard_baseline_path } from "./lyric_video_hearings_misheard_baseline_path.mjs";
import { baseline_known_shrink_write } from "./baseline_known_shrink_write.mjs";
export async function lyric_video_hearings_misheard_baseline_shrink_write() {
  arguments_assert(arguments, 0);
  ("Drop from the record every recording it lists that is no longer heard badly, and leave the rest exactly as they were.");
  ("A recording stops offending here for a good reason - it was heard again after the splitting rule changed, or the singing was re-recorded - and the entry left behind then covers a second recording that goes bad later. So the gate refuses a stale entry, and this is the command it names.");
  ("It takes nothing, because the set is never a choice: it is whatever the shared finder answers right now, and a caller handing over a list would be a second opinion about which recordings are badly heard.");
  let found = await lyric_video_hearings_mispaired_and_misheard();
  let offending = property_get(found, "misheard");
  let path = lyric_video_hearings_misheard_baseline_path();
  let r = await baseline_known_shrink_write(offending, path);
  return r;
}
