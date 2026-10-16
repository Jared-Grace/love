import { firebase_bucket } from "./firebase_bucket.mjs";
import { property_set } from "./property_set.mjs";
export async function firebase_storage_stored_query(query) {
  "What storage already holds of the files a listing query names: for each name, the checksum of its bytes and the two settings it was written with.";
  "IT ASKS ONE PAGE OF A THOUSAND AT A TIME AND KEEPS ONLY THOSE THREE THINGS. A hundred thousand files asked for in one go come back as a hundred thousand full descriptions held at once, which is most of a machine's memory spent on fields nobody reads.";
  "Listing is charged per page and writing per file, so asking this before an upload costs one charged operation for every thousand files where writing them all again cost one for each.";
  let bucket = await firebase_bucket();
  let stored = {};
  let page = {
    ...query,
    autoPaginate: false,
    maxResults: 1000,
  };
  while (page) {
    let [files, next] = await bucket.getFiles(page);
    for (let file of files) {
      let metadata = file.metadata;
      property_set(stored, file.name, {
        md5: metadata.md5Hash,
        content_type: metadata.contentType,
        cache_control: metadata.cacheControl,
      });
    }
    page = next;
  }
  return stored;
}
