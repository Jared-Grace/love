import { arguments_assert } from "./arguments_assert.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { list_map_limited_async } from "./list_map_limited_async.mjs";
import { psalms_chapter_description } from "./psalms_chapter_description.mjs";
export async function psalms_chapters_descriptions_write(chapter_numbers) {
  "Writes down the words of each of a set of Psalms, laid out ready to sit under a playlist of that chapter being sung, and hands back where they were put.";
  "They are written where nothing is committed, because they are the Bible said again - the repo already carries that text once, and a second copy of it in the history is weight every later reader pays for and nobody reads. What is wanted here is a handover: something else picks the file up, puts the words where they are going, and the file has done its work.";
  arguments_assert(arguments, 1);
  async function lambda(chapter_number) {
    let description = await psalms_chapter_description(chapter_number);
    let held = {
      chapter: chapter_number,
      description: description,
    };
    return held;
  }
  let written = await list_map_limited_async(chapter_numbers, lambda, 10);
  let descriptions = {};
  for (let item of written) {
    descriptions[item.chapter] = item.description;
  }
  let path = folder_gitignore_join("psalms_descriptions.json");
  await file_overwrite_json(path, descriptions);
  let r = {
    path: path,
    chapters: written.length,
  };
  return r;
}
