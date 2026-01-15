import { ebible_chapter_videos_generate } from "../../../love/public/src/ebible_chapter_videos_generate.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  const bible_folder = "engwebu";
  const chapter_code = "SIR01";
  await ebible_chapter_videos_generate(bible_folder, chapter_code);
}
