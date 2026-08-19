import { arguments_assert } from "./arguments_assert.mjs";
import { psalms_title_passage } from "./psalms_title_passage.mjs";
export function psalms_chapters_video_order(videos) {
  "For each chapter of the Psalms sung anywhere in a channel's uploads, the videos of that chapter in the order a person would read them: verse by verse, and where two open on the same verse, the earlier half first.";
  "Two songs can name the same opening verse and neither is wrong - one takes the first half of it and one the second - so where the verse cannot decide, the letter does, and where there is no letter either, the older upload goes first. That last one is a real tie-break and not a guess: the singing was recorded in the order of the Psalm, so the older of two is the earlier one.";
  "The uploads arrive newest first, which is how youtube hands a channel over, so they are turned round before anything is counted. Reading them as given would have put every tie the wrong way round and nothing would have said so.";
  arguments_assert(arguments, 1);
  let oldest_first = [];
  let at = videos.length;
  while (at > 0) {
    at = at - 1;
    oldest_first.push(videos[at]);
  }
  let chapters = {};
  let index = 0;
  for (let video of oldest_first) {
    let passage = psalms_title_passage(video.title);
    index = index + 1;
    if (passage === null) {
      continue;
    }
    if (!chapters[passage.chapter]) {
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
  for (let chapter of Object.keys(chapters)) {
    chapters[chapter].sort(function lambda(one, other) {
      if (one.verse_first !== other.verse_first) {
        return one.verse_first - other.verse_first;
      }
      if (one.mark !== other.mark) {
        return one.mark < other.mark ? -1 : 1;
      }
      return one.uploaded - other.uploaded;
    });
  }
  return chapters;
}
