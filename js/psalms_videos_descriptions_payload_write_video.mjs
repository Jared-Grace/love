import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { psalms_passage_verses_description } from "./psalms_passage_verses_description.mjs";
import { equal } from "./equal.mjs";
export function psalms_videos_descriptions_payload_write_video(
  uploads,
  passages,
  verses_by_chapter,
  paired,
) {
  "Lay each upload beside the verses its title names, filling in the pairs that came out whole and handing back the titles whose verses their chapter does not have.";
  "The pairs are filled into a list handed in and the failures are returned, because the two are read by different people: the pairs go on to be written down and put under the videos, and the failures go to somebody who has to decide what a title reaching a verse that does not exist should say instead.";
  arguments_assert(arguments, 4);
  let titles_verses_absent = [];
  for (let video of uploads) {
    let passage = passages[video.video_id];
    if (not(passage)) {
      continue;
    }
    let verses = verses_by_chapter[passage.chapter];
    let description = psalms_passage_verses_description(passage, verses);
    if (equal(description, null)) {
      titles_verses_absent.push(video.title);
      continue;
    }
    paired.push({
      video_id: video.video_id,
      title: video.title,
      description: description,
    });
  }
  return titles_verses_absent;
}
