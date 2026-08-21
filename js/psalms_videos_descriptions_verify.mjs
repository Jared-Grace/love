import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map_limited_async } from "./list_map_limited_async.mjs";
import { youtube_video_description } from "./youtube_video_description.mjs";
import { psalms_videos_descriptions_payload_part } from "./psalms_videos_descriptions_payload_part.mjs";
export async function psalms_videos_descriptions_verify(part_number) {
  "Reads back what is actually under every song of one piece, and says how many of them now carry the words that piece was meant to put there.";
  "This is the only honest answer to whether the work landed. The page that did the writing says whether each ask was accepted, and an ask can be accepted and still leave the video as it was - the wrong field named, the change held for review, a song the account does not own. None of that shows from the inside.";
  "A song still carrying nothing and a song carrying something else are counted apart, because they are different faults. Nothing means the ask never reached it; something else means the ask reached it and put the wrong words there, and only the second of those makes the words themselves suspect.";
  "A THIRD SORT IS COUNTED APART AGAIN: a song youtube would say nothing about. That is not a fault in the writing, it is a hole in the reading, and putting it with the empty ones would report the writing as failed on the strength of not having looked.";
  "It asks as the owner rather than reading pages a stranger sees, fifty songs to an ask. Reading the pages was how this was done first, and a couple of hundred page reads in a row is what gets the machine served a sign-in wall instead of videos - at which point every song behind the wall looks empty and the reading-back says the work never landed.";
  arguments_assert(arguments, 1);
  let part = await psalms_videos_descriptions_payload_part(part_number);
  function lambda$id(one) {
    let video_id = property_get(one, "video_id");
    return video_id;
  }
  let video_ids = list_map(part, lambda$id);
  let answered = await youtube_videos_descriptions(video_ids);
  let said = property_get(answered, "said");
  let silent = property_get(answered, "silent");
  let written = 0;
  let empty = [];
  let different = [];
  for (let one of part) {
    let heard = property_exists(said, one.video_id);
    if (not_equal(heard, true)) {
      continue;
    }
    let live = property_get(said, one.video_id);
    let same = equal(live, one.description);
    if (same) {
      written = written + 1;
      continue;
    }
    let nothing = equal(live, "");
    if (nothing) {
      list_add(empty, one.video_id);
      continue;
    }
    list_add(different, one.video_id);
  }
  let r = {
    part: part_number,
    songs: part.length,
    written: written,
    empty: empty.length,
    empty_first: empty.slice(0, 5),
    different: different.length,
    different_first: different.slice(0, 5),
    could_not_be_read: silent.length,
    could_not_be_read_first: silent.slice(0, 5),
  };
  let all = equal(written, part.length);
  if (not_equal(all, true)) {
    r.done = false;
    return r;
  }
  r.done = true;
  return r;
}
