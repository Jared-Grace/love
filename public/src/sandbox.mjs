import { each_async } from "../../../love/public/src/each_async.mjs";
import { ebible_book_code_to_chapter_codes } from "../../../love/public/src/ebible_book_code_to_chapter_codes.mjs";
import { ebible_chapter_videos_generate } from "../../../love/public/src/ebible_chapter_videos_generate.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  const bible_folder = "engwebu";
  const book_code = "SIR";
  let chapter_codes = await ebible_book_code_to_chapter_codes(
    bible_folder,
    book_code,
  );
  async function lambda(item) {}
  await each_async(list, lambda);
  await ebible_chapter_videos_generate(bible_folder, chapter_code);
}
