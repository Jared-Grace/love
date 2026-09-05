import { null_is } from "./null_is.mjs";
import { firebase_prod_hash_absent } from "./firebase_prod_hash_absent.mjs";
import { text_hash } from "./text_hash.mjs";
export async function firebase_prod_hashes_generic(file_names, read) {
  "one short word standing for each of the named files - whatever place the reader handed in fetches them from";
  "where the files come from is the only thing that changes between the callers. what is being served comes down a wire and what is about to be served sits on a disk - and a note is worth nothing unless both sides of it were reduced the same way";
  "a file that cannot be read is left to stop the whole answer rather than quietly left out - a record one file short reads as fewer files than there are and every later comparison against it would agree by having nothing to disagree with";
  "★ A READER MAY ANSWER WITH NOTHING, AND THAT IS NOT THE SAME AS BEING UNABLE TO READ. It means the place asked was reached and says it holds no such file, which is a fact about that place and belongs in the record - so the name is kept and a word saying not-served is written where the short word would have gone. The paragraph above still stands for every other way a read can end: those still stop the answer, because a reader that could not be told has said nothing worth writing down. Only the reader over the wire can answer this way, so nothing changes for a reader off a disk, where the names were taken from the disk in the first place.";
  let hashes = {};
  for (let file_name of file_names) {
    let text = await read(file_name);
    let unserved = null_is(text);
    if (unserved) {
      hashes[file_name] = firebase_prod_hash_absent();
    } else {
      let hash = text_hash(text);
      hashes[file_name] = hash;
    }
  }
  return hashes;
}
