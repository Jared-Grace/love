import { math_min } from "./math_min.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { range_1 } from "./range_1.mjs";
import { psalms_chapters_verse_last } from "./psalms_chapters_verse_last.mjs";
import { youtube_channel_uploads_all } from "./youtube_channel_uploads_all.mjs";
export async function psalms_channel_verses_short(channel_id, count_min) {
  arguments_assert(arguments, 2);
  ("$plain channel_id");
  ("$plain count_min");
  ("Every run of Psalm verses that fewer than count_min public videos on a channel sing, one row per run as 'chapter:first-last count', highest psalm first.");
  ("★ IT COUNTS VERSES, NOT PASSAGES. A verse is covered by every public video whose title's range holds it, so a whole-chapter video and a split one both count toward the same verse.");
  ("A title naming no verses is read as the whole chapter; a half verse such as 13b counts as the whole verse.");
  let minimum = Number(count_min);
  let chapters = range_1(150);
  let verse_last_by_chapter = await psalms_chapters_verse_last(chapters);
  let counts_by_chapter = {};
  for (let chapter of chapters) {
    counts_by_chapter[chapter] = new Array(
      verse_last_by_chapter[chapter] + 1,
    ).fill(0);
  }
  let videos = await youtube_channel_uploads_all(channel_id);
  let title_shape = new RegExp("^Psalms? (\\d+)(?::(\\S+))?[ ,]");
  for (let video of videos) {
    if (not_equal(video.privacy, "public")) {
      continue;
    }
    let found = video.title.match(title_shape);
    if (equal(found, null)) {
      continue;
    }
    let chapter = Number(found[1]);
    let counts = counts_by_chapter[chapter];
    if (equal(counts, undefined)) {
      continue;
    }
    let verse_last = subtract(counts.length, 1);
    let first = 1;
    let last = verse_last;
    if (not_equal(found[2], undefined)) {
      let ends = found[2].split("-");
      first = parseInt(ends[0], 10);
      last = parseInt(ends[subtract(ends.length, 1)], 10);
    }
    for (
      let verse = first;
      less_than_equal(verse, math_min(last, verse_last));
      verse++
    ) {
      counts[verse] = counts[verse] + 1;
    }
  }
  let short = [];
  for (let chapter of [...chapters].reverse()) {
    let counts = counts_by_chapter[chapter];
    let verse = 1;
    while (less_than(verse, counts.length)) {
      let count = counts[verse];
      let end = verse;
      while (
        less_than(end + 1, counts.length) &&
        equal(counts[end + 1], count)
      ) {
        end = end + 1;
      }
      if (less_than(count, minimum)) {
        short.push(chapter + ":" + verse + "-" + end + " " + count);
      }
      verse = end + 1;
    }
  }
  return short;
}
