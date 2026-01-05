import { list_chunk } from "../../../love/public/src/list_chunk.mjs";
import { ebible_versions_english_downloadable_words_search_upload } from "../../../love/public/src/ebible_versions_english_downloadable_words_search_upload.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  let result = await ebible_versions_english_downloadable_words_search_upload();
  let chunks = list_chunk(list, chunk_size);
  return result;
}
