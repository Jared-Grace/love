import { ebible_versions_english_downloadable_symbols_unique } from "../../../love/public/src/ebible_versions_english_downloadable_symbols_unique.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  let unique = await ebible_versions_english_downloadable_symbols_unique();
  return unique;
}
