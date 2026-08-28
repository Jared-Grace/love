import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_text_to_speech_chapters } from "./ebible_text_to_speech_chapters.mjs";
import { ebible_book_code_to_chapter_codes } from "./ebible_book_code_to_chapter_codes.mjs";
export async function ebible_text_to_speech_book(bible_folder, book_code) {
  "$plain bible_folder";
  "$plain book_code";
  "Reads a whole book aloud, every chapter of it, and returns the note per chapter saying which recorded piece holds which verse.";
  "★ THE CHAPTERS GO OVER TOGETHER RATHER THAN ONE AT A TIME, WHICH IS WHERE ALMOST ALL OF THE TIME WENT. Asking chapter by chapter started the engine again for every chapter and then spoke on a single core, so a book of fifty chapters read the weights off disk fifty times over. The list goes across in one call now and the workers keep the engine they loaded.";
  arguments_assert(arguments, 2);
  let chapter_codes = await ebible_book_code_to_chapter_codes(
    bible_folder,
    book_code,
  );
  let joined = chapter_codes.join(",");
  let manifests = await ebible_text_to_speech_chapters(bible_folder, joined);
  return manifests;
}
