import { ebible_text_to_speech_chapter } from "../../../love/public/src/ebible_text_to_speech_chapter.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox_2() {
  marker("1");
  const bible_folder = "engwebu";
  const chapter_code = "SIR01";
  await ebible_text_to_speech_chapter(bible_folder, chapter_code);
}
