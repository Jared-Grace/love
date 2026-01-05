import { ebible_versions_english_downloadable_words_lookup } from "../../../love/public/src/ebible_versions_english_downloadable_words_lookup.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  let result = await ebible_versions_english_downloadable_words_lookup();
  return result;
}
