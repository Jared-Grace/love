import { ebible_text_to_speech_chapter_generic } from "../../../love/public/src/ebible_text_to_speech_chapter_generic.mjs";
import { ebible_verses } from "../../../love/public/src/ebible_verses.mjs";
export async function ebible_text_to_speech_chapter(
  bible_folder,
  chapter_code,
) {
  let verses = await ebible_verses(bible_folder, chapter_code);
  await ebible_text_to_speech_chapter_generic(
    bible_folder,
    verses,
    chapter_code,
  );
}
