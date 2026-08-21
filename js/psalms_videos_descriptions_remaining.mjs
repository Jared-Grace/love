import { psalms_videos_descriptions_live_read } from "./psalms_videos_descriptions_live_read.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
export async function psalms_videos_descriptions_remaining() {
  "Asks youtube itself which songs are still not carrying the words worked out for them, and hands back those songs and no others.";
  "THIS IS WHAT MAKES TWO PEOPLE DOING THIS WORK AT ONCE SAFE. Nothing in this folder records which songs have been done, on purpose: a record kept here would be one more thing to be wrong, and it would be wrong exactly when two runs happened without each other's knowledge. Youtube already knows, so it is asked, and everybody who asks gets the same answer whoever did the writing.";
  "It also makes a run safe to repeat. A piece pasted twice, a run stopped halfway, a browser closed mid-way through - all of them come out the same, because the next question is not where did I get to but what is still missing.";
  "A song carrying different words counts as still to do, the same as a song carrying none. Both need the same thing done to them, and telling them apart is the reading-back's job rather than this one's.";
  arguments_assert(arguments, 0);
  let read = await psalms_videos_descriptions_live_read();
  let remaining = [];
  for (let paired of read) {
    let same = equal(paired.live, paired.one.description);
    if (same) {
      continue;
    }
    remaining.push(paired.one);
  }
  return remaining;
}
