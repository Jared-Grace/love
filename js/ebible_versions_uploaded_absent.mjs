import { ebible_languages_without_original_bible_folders } from "./ebible_languages_without_original_bible_folders.mjs";
import { ebible_version_uploaded_is } from "./ebible_version_uploaded_is.mjs";
import { list_map_unordered_async_filter_null_not_is } from "./list_map_unordered_async_filter_null_not_is.mjs";
export async function ebible_versions_uploaded_absent() {
  "Every bible a reader can choose that storage holds nothing whatever for - each named by its folder alone.";
  "This is the last of the three places a bible can be missing from and the only one a reader ever meets. Its text may be absent from this machine, or here and worked out as nothing, or worked out into chapters that were never sent; the first two are asked about elsewhere and both are now answered, and this is the third. A bible can be perfectly built here and still be nothing at all to somebody holding a phone.";
  "Asked of the offered list rather than of a list somebody wrote down, so it cannot go stale. A list of what to send, written by whoever sent things last, is a guess about what is up there; this is a reading of it.";
  "All of them at once rather than one after another, because each answer is one small question to storage over the network and the waiting is nearly all of it.";
  let offered = ebible_languages_without_original_bible_folders();
  async function absent_or_null(bible_folder) {
    let uploaded = await ebible_version_uploaded_is(bible_folder);
    if (uploaded) {
      return null;
    }
    return bible_folder;
  }
  let absent = await list_map_unordered_async_filter_null_not_is(
    offered,
    absent_or_null,
  );
  return absent;
}
