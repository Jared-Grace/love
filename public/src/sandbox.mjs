import { marker } from "../../../love/public/src/marker.mjs";
import { ebible_version_symbols_unique } from "../../../love/public/src/ebible_version_symbols_unique.mjs";
import { ebible_versions_english } from "../../../love/public/src/ebible_versions_english.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
export async function sandbox() {
  marker("1");
  async function lambda(bible_folder) {
    let unique = await ebible_version_symbols_unique(bible_folder);
    return unique;
  }
  await each_async(await ebible_versions_english(), lambda);
}
