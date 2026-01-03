import { ebible_versions_english } from "../../../love/public/src/ebible_versions_english.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_versions_english_books() {
  marker("1");
  return await ebible_versions_english();
}
