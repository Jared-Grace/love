import { each_async } from "../../../love/public/src/each_async.mjs";
import { ebible_verses_upload } from "../../../love/public/src/ebible_verses_upload.mjs";
import { range } from "../../../love/public/src/range.mjs";
import { list_chunk } from "../../../love/public/src/list_chunk.mjs";
import { ebible_versions_english_downloadable_words_search_upload } from "../../../love/public/src/ebible_versions_english_downloadable_words_search_upload.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  async function lambda(item) {}
  await each_async(list, lambda);
  await ebible_verses_upload(bible_folder);
  marker("1");
  let r = range(10);
  let chunks = list_chunk(r, 3);
  return chunks;
  let result = await ebible_versions_english_downloadable_words_search_upload();
}
