export async function psalms_videos_descriptions_remaining() {
  "Asks youtube itself which songs are still not carrying the words worked out for them, and hands back those songs and no others.";
  "THIS IS WHAT MAKES TWO PEOPLE DOING THIS WORK AT ONCE SAFE. Nothing in this folder records which songs have been done, on purpose: a record kept here would be one more thing to be wrong, and it would be wrong exactly when two runs happened without each other's knowledge. Youtube already knows, so it is asked, and everybody who asks gets the same answer whoever did the writing.";
  "It also makes a run safe to repeat. A piece pasted twice, a run stopped halfway, a browser closed mid-way through - all of them come out the same, because the next question is not where did I get to but what is still missing.";
  "A song carrying different words counts as still to do, the same as a song carrying none. Both need the same thing done to them, and telling them apart is the reading-back's job rather than this one's.";
  "Eight are asked at a time. These are ordinary page reads and there are over a thousand of them; one at a time spends the run waiting, and all at once is how a sweep gets itself refused.";
  arguments_assert(arguments, 0);
  let path = psalms_videos_descriptions_payload_path();
  let paired = await file_read_json(path);
  async function lambda$item(one) {
    let live = await youtube_video_description(one.video_id);
    let r2 = {
      one: one,
      live: live,
    };
    return r2;
  }
  let read = await list_map_limited_async(paired, lambda$item, 8);
  let remaining = [];
  for (let each of read) {
    let same = equal(each.live, each.one.description);
    if (same) {
      continue;
    }
    remaining.push(each.one);
  }
  return remaining;
}
