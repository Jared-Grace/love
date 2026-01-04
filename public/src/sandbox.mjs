import { ebible_version_symbols_unique } from "../../../love/public/src/ebible_version_symbols_unique.mjs";
import { ebible_versions_english } from "../../../love/public/src/ebible_versions_english.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
export async function sandbox() {
  async function lambda(bible_folder) {
    let v = await ebible_version_symbols_unique(bible_folder);
    return v;
  }
  await each_async(await ebible_versions_english(), lambda);
}
