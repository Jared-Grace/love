import { arguments_assert } from "./arguments_assert.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { file_hash } from "./file_hash.mjs";
import { property_set } from "./property_set.mjs";
export async function lyric_video_plans_pictures_hashes(plans) {
  arguments_assert(arguments, 1);
  ("The contents of every picture a set of timing documents names, each short word standing for the file it came from, kept against the path it was read at.");
  ("★ IT IS THE CONTENTS AND NOT THE PATH BECAUSE ONE PICTURE LIVES AT TWO PATHS HERE ALL THE TIME. A psalm's whole-chapter plan and its part plans sometimes draw out of one folder and sometimes out of a folder each, and when they draw out of a folder each the same crop is written down twice. Asked by path, those two are two pictures and a plan looks as though it holds work nobody else holds; asked by contents they are one, which is what they are.");
  ("A picture the document names that is not on this machine is passed over rather than counted, because there is nothing to read and so nothing to compare. Whoever needs to know that it is missing asks the check that chases missing crops.");
  ("Where two files do hold the same contents the later path is the one kept, and nothing here depends on which - the answer is used to ask whether a content is present at all, never where it is.");
  let held = {};
  for (let plan of plans) {
    for (let picture of plan.document.pictures) {
      let there = await file_exists(picture.path);
      if (not(there)) {
        continue;
      }
      let hash = await file_hash(picture.path);
      property_set(held, hash, picture.path);
    }
  }
  return held;
}
