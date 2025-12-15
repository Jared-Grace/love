import { marker } from "../../../love/public/src/marker.mjs";
import { ebible_languages_chapters } from "../../../love/public/src/ebible_languages_chapters.mjs";
export async function sandbox() {
  marker("1");
  let all = await ebible_languages_chapters();
  return all;
}
