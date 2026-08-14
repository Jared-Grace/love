import { chapter_passage_write } from "./chapter_passage_write.mjs";
export async function g_sermon_write(
  chapter_code,
  verse_numbers,
  scripture,
  lines,
) {
  let passage = {
    verse_numbers,
    scripture,
    lines,
  };
  let path = await chapter_passage_write(chapter_code, g_sermon_write, passage);
  return path;
}
