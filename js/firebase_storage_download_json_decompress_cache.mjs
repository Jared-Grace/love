import { catch_null_async } from "./catch_null_async.mjs";
import { download_cache_get } from "./download_cache_get.mjs";
import { download_cache_key } from "./download_cache_key.mjs";
import { download_cache_put } from "./download_cache_put.mjs";
import { firebase_storage_download_json_decompress } from "./firebase_storage_download_json_decompress.mjs";
import { null_not_is } from "./null_not_is.mjs";
export async function firebase_storage_download_json_decompress_cache(
  project_url,
  destination,
) {
  ("read one thing out of storage, preferring the copy already on this disk. a saved copy is handed back at once and a fresh one is fetched behind the reader, so the page paints without waiting and the next visit holds whatever was written since. storage answers these with no-cache, so without this every re-ask is another round trip - measured at about 1.9 seconds for one search, all of it waiting for the first byte.");
  ("what this costs is that a change made since the last visit is one visit late. that is the right way round for text that is written once and read forever, and it is the reason the refresh is fired at all rather than the copy simply being kept.");
  let key = download_cache_key(project_url, destination);
  let cached = await download_cache_get(key);
  let held = null_not_is(cached);
  async function fetch_and_save() {
    let o = await firebase_storage_download_json_decompress(
      project_url,
      destination,
    );
    await download_cache_put(key, o);
    return o;
  }
  if (held) {
    ("nothing waits on this: the reader has their copy, and being offline must read as success rather than as an error nobody asked for");
    catch_null_async(fetch_and_save);
    return cached;
  }
  let o = await fetch_and_save();
  return o;
}
