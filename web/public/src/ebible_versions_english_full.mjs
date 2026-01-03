import { function_open_editor } from "../../../love/public/src/function_open_editor.mjs";
import { ebible_versions_english_books_count_cache } from "../../../love/public/src/ebible_versions_english_books_count_cache.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_versions_english_full() {
  marker("1");
  let v = await ebible_versions_english_books_count_cache();
  await function_open_editor(f_name);
  return v;
}
