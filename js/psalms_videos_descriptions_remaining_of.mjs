import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { psalms_videos_verse_mislabelled } from "./psalms_videos_verse_mislabelled.mjs";
import { list_map } from "./list_map.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
export function psalms_videos_descriptions_remaining_of(reading) {
  "$plain reading";
  "Which songs of one reading of the channel still want the words worked out for them.";
  "A song carrying different words counts as still to do, the same as a song carrying none. Both need the same thing done to them, and telling them apart is the reading-back's job rather than this one's.";
  "A song youtube said nothing about counts as still to do as well, and for the opposite reason: nothing was learned about it, so it cannot be signed off. Writing the right words a second time changes nothing, while leaving a song out because it could not be read is how work disappears without anybody being told.";
  "A SONG KNOWN TO BE WEARING THE WRONG NAME IS LEFT ALONE. The words here are worked out from a song's title, so for a song whose title names a verse it does not sing they are the wrong words by construction, and the right ones are already underneath it - put there deliberately, from the verse actually heard. Without this, every run of the pasting would quietly undo that mending and put the wrong verse back, and nothing would go red.";
  arguments_assert(arguments, 1);
  let read = property_get(reading, "read");
  let silent = property_get(reading, "silent");
  function lambda$id(entry) {
    let video_id = property_get(entry, "video_id");
    return video_id;
  }
  let mislabelled = list_map(psalms_videos_verse_mislabelled(), lambda$id);
  let remaining = [];
  for (let paired of read) {
    let same = equal(paired.live, paired.one.description);
    if (same) {
      continue;
    }
    let named_wrongly = list_includes(mislabelled, paired.one.video_id);
    if (named_wrongly) {
      continue;
    }
    list_add(remaining, paired.one);
  }
  for (let one of silent) {
    let unnamed_wrongly = list_includes_not(mislabelled, one.video_id);
    if (unnamed_wrongly) {
      list_add(remaining, one);
    }
  }
  return remaining;
}
