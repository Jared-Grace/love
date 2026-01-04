import { list_to_dictionary_async } from "../../../love/public/src/list_to_dictionary_async.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { ebible_version_symbols_unique_cache } from "../../../love/public/src/ebible_version_symbols_unique_cache.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { ebible_versions_english } from "../../../love/public/src/ebible_versions_english.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
export async function sandbox() {
  marker("1");
  async function lambda(bible_folder) {
    let unique = await ebible_version_symbols_unique_cache(bible_folder);
    log({
      bible_folder,
      unique,
    });
    return unique;
  }
  const versions = await ebible_versions_english();
  async function lambda2(item) {}
  let dictionary = await list_to_dictionary_async(list, lambda2);
  await each_async(versions, lambda);
}
