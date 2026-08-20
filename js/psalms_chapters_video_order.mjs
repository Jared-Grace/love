import { object_property_names } from "./object_property_names.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_includes } from "./list_includes.mjs";
import { psalms_videos_second_copy } from "./psalms_videos_second_copy.mjs";
import { psalms_title_passage } from "./psalms_title_passage.mjs";
export function psalms_chapters_video_order(videos) {
  "For each chapter of the Psalms sung anywhere in a channel's uploads, the videos of that chapter in the order a person would read them: verse by verse, and where two open on the same verse, the earlier half first.";
  "Two songs can name the same opening verse and neither is wrong - one takes the first half of it and one the second - so where the verse cannot decide, the letter does, and where there is no letter either, the older upload goes first. That last one is a real tie-break and not a guess: the singing was recorded in the order of the Psalm, so the older of two is the earlier one.";
  "The uploads arrive newest first, which is how youtube hands a channel over, so they are turned round before anything is counted. Reading them as given would have put every tie the wrong way round and nothing would have said so.";
  "A recording the channel carries twice is counted once, and which copy is left out is said in one place away from here. Taking it out of the order is what makes taking it out of a playlist last: a playlist is set to hold exactly what this answers, so a copy removed by hand while this still wanted it would be put back the next time the playlist was checked.";
  arguments_assert(arguments, 1);
  let oldest_first = [];
  let at = videos.length;
  while (greater_than(at, 0)) {
    at = subtract(at, 1);
    oldest_first.push(videos[at]);
  }
  let chapters = {};
  let second_copies = psalms_videos_second_copy();
  let index = 0;
  for (let video of oldest_first) {
    let passage = psalms_title_passage(video.title);
    index = index + 1;
    if (equal(passage, null)) {
      continue;
    }
    if (list_includes(second_copies, video.video_id)) {
      continue;
    }
    if (not(chapters[passage.chapter])) {
      chapters[passage.chapter] = [];
    }
    chapters[passage.chapter].push({
      video_id: video.video_id,
      title: video.title,
      verse_first: passage.verse_first,
      mark: passage.mark,
      uploaded: index,
    });
  }
  for (let chapter of object_property_names(chapters)) {
    function lambda(one, other) {
      if (not_equal(one.verse_first, other.verse_first)) {
        let difference = subtract(one.verse_first, other.verse_first);
        return difference;
      }
      if (not_equal(one.mark, other.mark)) {
        let r = less_than(one.mark, other.mark) ? -1 : 1;
        return r;
      }
      let difference2 = subtract(one.uploaded, other.uploaded);
      return difference2;
    }
    chapters[chapter].sort(lambda);
  }
  return chapters;
}
