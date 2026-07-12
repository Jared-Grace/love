import { object_merge_set } from "./object_merge_set.mjs";
export function ebible_verse_merge(bible_folder, chapter_code, v) {
  let to = object_merge_set(
    {
      bible_folder,
      chapter_code,
    },
    v,
  );
  return to;
}
