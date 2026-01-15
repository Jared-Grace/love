import { ebible_verses } from "../../../love/public/src/ebible_verses.mjs";
import { text_to_speech } from "../../../love/public/src/text_to_speech.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  const bible_folder = "engwebu";
  const chapter_code = "SIR01";
  let verses = await ebible_verses(bible_folder, chapter_code);
  await text_to_speech({
    text: "test",
    path_output: "C:/test.wav",
  });
}
