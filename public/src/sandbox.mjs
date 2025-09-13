import { ebible_verses_upload } from "./ebible_verses_upload.mjs";
import { marker } from "./marker.mjs";
export async function sandbox() {
  marker("1");
  const bible_folder = "engbsb";
  await ebible_verses_upload(bible_folder);
}
