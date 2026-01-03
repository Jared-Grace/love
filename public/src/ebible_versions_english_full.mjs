import { ebible_versions_english_books_count_cache } from "../../../love/public/src/ebible_versions_english_books_count_cache.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_versions_english_full() {
  marker("1");
  return await ebible_versions_english_books_count_cache();
}
