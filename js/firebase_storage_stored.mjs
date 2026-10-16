import { firebase_bucket } from "./firebase_bucket.mjs";
export async function firebase_storage_stored(prefix) {
  "$plain prefix";
  "What storage already holds under one prefix: for each name, the checksum of its bytes and the two settings it was written with.";
  "IT ASKS ONE PAGE OF A THOUSAND AT A TIME AND KEEPS ONLY THOSE THREE THINGS. A hundred thousand files asked for in one go come back as a hundred thousand full descriptions held at once, which is most of a machine's memory spent on fields nobody reads.";
  "Listing is charged per page and writing per file, so asking this before an upload costs one charged operation for every thousand files where writing them all again cost one for each.";
  let bucket = await firebase_bucket();
  let stored = {};
  let query = {
    prefix,
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
