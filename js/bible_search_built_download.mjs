import { bible_search_built_path } from "./bible_search_built_path.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { firebase_storage_download_json_jg_decompress } from "./firebase_storage_download_json_jg_decompress.mjs";
export async function bible_search_built_download() {
  "Which build of the search index storage is holding right now.";
  "Asked over the network and never read out of a saved copy, because it is the one thing the saved copies are judged against - a mark read out of the same store it is meant to date can only ever agree with itself.";
  "Nothing at all when the asking fails, and a reader offline or a bucket with no mark in it yet both come out that way. Neither says the copies on this disk are wrong, so neither may be allowed to throw them away, and neither may stop a search that would otherwise have run.";
  let destination = bible_search_built_path();
  async function get() {
    let value = await firebase_storage_download_json_jg_decompress(destination);
    return value;
  }
  let built = await catch_null_async(get);
  return built;
}
