import { bible_chapter_lines } from "./bible_chapter_lines.mjs";
export async function bible_chapter_lines_copy(bible_folder, chapter_code) {
  let r = await bible_chapter_lines(bible_folder, chapter_code);
  await clipboard_copy_value(r);
  return r;
}
