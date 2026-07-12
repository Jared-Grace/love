import { each_async } from "./each_async.mjs";
import { ebible_chapters } from "./ebible_chapters.mjs";
export async function ebible_book_chapters_each(
  bible_folder,
  book_code,
  lambda$chapter_code,
) {
  let mapped = await ebible_chapters(bible_folder, book_code);
  await each_async(mapped, lambda$chapter_code);
}
