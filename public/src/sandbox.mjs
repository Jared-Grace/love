import { ebible_book_video_generate } from "../../../love/public/src/ebible_book_video_generate.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  const bible_folder = "engwebu";
  await ebible_book_video_generate(bible_folder, "SIR");
}
