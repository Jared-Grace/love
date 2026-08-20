import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { psalms_title_passage } from "./psalms_title_passage.mjs";
import { psalms_passage_description } from "./psalms_passage_description.mjs";
export async function psalms_video_description(title) {
  "The words that belong under one sung Psalm, worked out from the name the video wears, or nothing when that name does not name a passage of the Psalms.";
  "The name is the only thing here that says which verses a video is of, so it is what the words are read off. Nothing else about the video is asked for, which is what lets the whole channel be answered from one reading of its titles instead of a visit to each song.";
  arguments_assert(arguments, 1);
  let passage = psalms_title_passage(title);
  if (equal(passage, null)) {
    return null;
  }
  let description = await psalms_passage_description(passage);
  return description;
}
