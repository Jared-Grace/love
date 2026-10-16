import { web_assets_storage_prefix } from "./web_assets_storage_prefix.mjs";
import { firebase_bucket } from "./firebase_bucket.mjs";
export async function web_assets_stored() {
  "What storage already holds of the assets: for each address, the checksum of its bytes and the two settings it was written with.";
  "IT ASKS ONE PAGE OF A THOUSAND AT A TIME AND KEEPS ONLY THOSE THREE THINGS. Two hundred thousand assets asked for in one go come back as two hundred thousand full descriptions held at once, which is most of a machine's memory spent on fields nobody reads.";
  "Listing is charged per page and writing per file, so asking this before an upload costs about two hundred charged operations where writing everything again cost two hundred thousand.";
  let prefix = web_assets_storage_prefix();
  let bucket = await firebase_bucket();
  let stored = {};
  let query = {
    prefix: prefix + "/",
    autoPaginate: false,
    maxResults: 1000,
  };
  while (query) {
    let [files, next] = await bucket.getFiles(query);
    for (let file of files) {
      let metadata = file.metadata;
      stored[file.name] = {
        md5: metadata.md5Hash,
        content_type: metadata.contentType,
        cache_control: metadata.cacheControl,
      };
    }
    query = next;
  }
  return stored;
}
