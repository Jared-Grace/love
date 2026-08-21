import { psalms_videos_descriptions_remaining_of } from "./psalms_videos_descriptions_remaining_of.mjs";
import { psalms_videos_descriptions_live_read } from "./psalms_videos_descriptions_live_read.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function psalms_videos_descriptions_remaining() {
  "Asks youtube itself which songs are still not carrying the words worked out for them, and hands back those songs and no others.";
  "THIS IS WHAT MAKES TWO PEOPLE DOING THIS WORK AT ONCE SAFE. Nothing in this folder records which songs have been done, on purpose: a record kept here would be one more thing to be wrong, and it would be wrong exactly when two runs happened without each other's knowledge. Youtube already knows, so it is asked, and everybody who asks gets the same answer whoever did the writing.";
  "It also makes a run safe to repeat. A piece pasted twice, a run stopped halfway, a browser closed mid-way through - all of them come out the same, because the next question is not where did I get to but what is still missing.";
  "Which songs a reading leaves still to do is worked out elsewhere, because the run that cuts the pieces has to ask the same question of the same reading it took its backup from, and two answerings of it that could drift apart is the one thing neither of them could survive.";
  arguments_assert(arguments, 0);
  let reading = await psalms_videos_descriptions_live_read();
  let remaining = psalms_videos_descriptions_remaining_of(reading);
  return remaining;
}
