import { each_async } from "../../../love/public/src/each_async.mjs";
import { ebible_text_to_speech_chapter_generic } from "../../../love/public/src/ebible_text_to_speech_chapter_generic.mjs";
import { ebible_verses } from "../../../love/public/src/ebible_verses.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { ebible_book_code_to_chapter_codes } from "../../../love/public/src/ebible_book_code_to_chapter_codes.mjs";
export async function ebible_text_to_speech_book(bible_folder, book_code) {
  let chapter_codes = await ebible_book_code_to_chapter_codes(
    bible_folder,
    book_code,
  );
  async function lambda2(chapter_code) {
    log({
      chapter_code,
    });
    let verses = await ebible_verses(bible_folder, chapter_code);
    await ebible_text_to_speech_chapter_generic(
      bible_folder,
      verses,
      chapter_code,
    );
  }
  await each_async(chapter_codes, lambda2);
}
