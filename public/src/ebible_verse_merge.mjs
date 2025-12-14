import { object_merge } from "../../../love/public/src/object_merge.mjs";
export function ebible_verse_merge(bible_folder, chapter_code, v) {
  let to = object_merge(
    {
      bible_folder,
      chapter_code,
    },
    v,
  );
  return to;
}
