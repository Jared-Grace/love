import { bible_folder_key } from "./bible_folder_key.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_versions_english_public_domain } from "./bible_usfm_versions_english_public_domain.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_version_usfm_download_path } from "./ebible_version_usfm_download_path.mjs";
import { folder_exists } from "./folder_exists.mjs";
import { list_add } from "./list_add.mjs";
import { ebible_version_usfm_download } from "./ebible_version_usfm_download.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
export async function bible_usfm_versions_english_public_domain_download() {
  arguments_assert(arguments, 0);
  ("Fetches the usfm of every complete English translation nobody owns that this machine has not already unpacked, and answers what it fetched, what was already here, and what it could not get.");
  ("IT FINDS ITS OWN SET RATHER THAN BEING HANDED ONE. Folder names typed into a call stop matching what the licence pages say the moment one of them is read differently, and nothing would report the drift. Asking the same question the chooser asks means this cannot fetch a translation the repo is not free to use.");
  ("A translation already unpacked here is left alone rather than fetched again. Its publisher writes each new printing over the last at the same address, so fetching again is how a shelf is made current - but that is a different job from filling a shelf that is empty, and doing both at once would spend the whole download every time somebody added one translation.");
  ("A translation eBible lists and publishes no markup for is written down rather than thrown, because one missing package must not stop the fetching of the rest. What comes back is a reading list, not a fault: the folder is there to be looked at by hand.");
  let entries = await bible_usfm_versions_english_public_domain();
  let fetched = [];
  let held = [];
  let refused = [];
  for (let entry of entries) {
    let bible_folder = property_get(entry, bible_folder_key());
    let folder = ebible_version_usfm_download_path(bible_folder);
    let unpacked = await folder_exists(folder);
    if (unpacked) {
      list_add(held, bible_folder);
    } else {
      async function download() {
        let put = await ebible_version_usfm_download(bible_folder);
        return put;
      }
      let got = await catch_null_async(download);
      let missing = null_is(got);
      if (missing) {
        list_add(refused, bible_folder);
      } else {
        list_add(fetched, bible_folder);
      }
    }
  }
  let report = {
    fetched,
    held,
    refused,
  };
  return report;
}
