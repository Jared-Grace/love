import { list_intersect_multiple } from "../../../love/public/src/list_intersect_multiple.mjs";
import { ebible_versions_english_downloadable_words_search_upload } from "../../../love/public/src/ebible_versions_english_downloadable_words_search_upload.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  let i = list_intersect_multiple([
    [1, 2, 3],
    [3, 2, 4, 5],
    [6, 7, 2, 3, 4],
  ]);
  return i;
  let result = await ebible_versions_english_downloadable_words_search_upload();
  return result;
}
