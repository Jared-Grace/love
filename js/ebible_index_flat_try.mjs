import { catch_null_async } from "./catch_null_async.mjs";
import { ebible_index_flat } from "./ebible_index_flat.mjs";
export async function ebible_index_flat_try(bible_folder) {
  "One bible's flat index, or nothing where that bible has none uploaded.";
  "Not every bible has one yet, and asking for a missing one is a plain four-oh-four thrown from where a page has drawn nothing - so one bible without an index would take down a reading in the languages beside it, which is the same shape of fault a missing verse had before it was answered rather than thrown.";
  "A bible with no index is not a bible with no verses. It is answered with nothing here so that whoever asked can carry on without it, showing it at the verse numbers the other bibles name, which is what every page did before any of this.";
  async function lambda() {
    let list = await ebible_index_flat(bible_folder);
    return list;
  }
  let found = await catch_null_async(lambda);
  return found;
}
