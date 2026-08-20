import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map_limited_async } from "./list_map_limited_async.mjs";
import { youtube_video_description } from "./youtube_video_description.mjs";
import { psalms_videos_descriptions_payload_part } from "./psalms_videos_descriptions_payload_part.mjs";
export async function psalms_videos_descriptions_verify(part_number) {
  "Reads back, as a stranger would, what is actually under every song of one piece, and says how many of them now carry the words that piece was meant to put there.";
  "This is the only honest answer to whether the work landed. The page that did the writing says whether each ask was accepted, and an ask can be accepted and still leave the video as it was - the wrong field named, the change held for review, a song the account does not own. None of that shows from the inside.";
  "A song still carrying nothing and a song carrying something else are counted apart, because they are different faults. Nothing means the ask never reached it; something else means the ask reached it and put the wrong words there, and only the second of those makes the words themselves suspect.";
  "Eight are asked at a time. These are ordinary page reads and there are a couple of hundred of them; one at a time spends the run waiting, and all at once is how a sweep gets itself refused.";
  arguments_assert(arguments, 1);
  let part = await psalms_videos_descriptions_payload_part(part_number);
  async function lambda$item(one) {
    let live = await youtube_video_description(one.video_id);
    let r2 = {
      video_id: one.video_id,
      title: one.title,
      wanted: one.description,
      live: live,
    };
    return r2;
  }
  let read = await list_map_limited_async(part, lambda$item, 8);
  let written = 0;
  let empty = [];
  let different = [];
  for (let one of read) {
    let same = equal(one.live, one.wanted);
    if (same) {
      written = written + 1;
      continue;
    }
    let nothing = equal(one.live, "") || equal(one.live, null);
    if (nothing) {
      empty.push(one.video_id);
      continue;
    }
    different.push(one.video_id);
  }
  let r = {
    part: part_number,
    songs: read.length,
    written: written,
    empty: empty.length,
    empty_first: empty.slice(0, 5),
    different: different.length,
    different_first: different.slice(0, 5),
  };
  let all = equal(written, read.length);
  if (not_equal(all, true)) {
    r.done = false;
    return r;
  }
  r.done = true;
  return r;
}
