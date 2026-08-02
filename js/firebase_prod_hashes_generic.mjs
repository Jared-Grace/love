import { text_hash } from "./text_hash.mjs";
export async function firebase_prod_hashes_generic(file_names, read) {
  "one short word standing for each of the named files - whatever place the reader handed in fetches them from";
  "where the files come from is the only thing that changes between the callers. what is being served comes down a wire and what is about to be served sits on a disk - and a note is worth nothing unless both sides of it were reduced the same way";
  "a file that cannot be read is left to stop the whole answer rather than quietly left out - a record one file short reads as fewer files than there are and every later comparison against it would agree by having nothing to disagree with";
  let hashes = {};
  for (let file_name of file_names) {
    let text = await read(file_name);
    let hash = text_hash(text);
    hashes[file_name] = hash;
  }
  return hashes;
}
