import { arguments_assert } from "./arguments_assert.mjs";
import { psalms_videos_descriptions_live_read } from "./psalms_videos_descriptions_live_read.mjs";
import { equal } from "./equal.mjs";
export async function psalms_videos_descriptions_change_report() {
  "Says what running the whole thing would actually do to the channel: how many songs would be given words they do not have, how many already have the right ones, and how many carry words of somebody's own that would be written over.";
  "THE THIRD NUMBER IS THE ONLY ONE WORTH ASKING FOR. Adding words to a video that has none takes nothing away and can be undone by emptying the box again. Writing over words somebody sat down and wrote destroys them, and no run here keeps a copy. So the third number is what the decision to run this actually rests on, and it should be looked at before the run rather than found afterwards.";
  "It names a few of the third sort rather than counting them only, because a count of eleven says nothing about whether losing them matters and one look at what they say usually settles it.";
  arguments_assert(arguments, 0);
  let read = await psalms_videos_descriptions_live_read();
  let right = 0;
  let empty = 0;
  let carrying = [];
  for (let paired of read) {
    let same = equal(paired.live, paired.one.description);
    if (same) {
      right = right + 1;
      continue;
    }
    let nothing = equal(paired.live, "") || equal(paired.live, null);
    if (nothing) {
      empty = empty + 1;
      continue;
    }
    carrying.push({
      video_id: paired.one.video_id,
      title: paired.one.title,
      live: paired.live,
    });
  }
  let r = {
    songs: read.length,
    already_right: right,
    would_be_added: empty,
    would_be_written_over: carrying.length,
    written_over_first: carrying.slice(0, 8),
  };
  return r;
}
