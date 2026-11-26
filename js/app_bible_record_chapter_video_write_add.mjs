import { arguments_assert } from "./arguments_assert.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { folder_read } from "./folder_read.mjs";
import { less_than } from "./less_than.mjs";
import { path_join } from "./path_join.mjs";
export async function app_bible_record_chapter_video_write_add(
  from,
  by_passage,
) {
  arguments_assert(arguments, 2);
  let there = await file_exists(from);
  if (not(there)) {
    return;
  }
  let names = await folder_read(from);
  for (let name of names) {
    let dot = name.lastIndexOf(".");
    if (less_than(dot, 1)) {
      continue;
    }
    let passage = name.slice(0, dot);
    by_passage[passage] = path_join([from, name]);
  }
}
