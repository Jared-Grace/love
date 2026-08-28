import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_version_download_url } from "./ebible_version_download_url.mjs";
export function ebible_version_usfm_download_url(bible_folder) {
  arguments_assert(arguments, 1);
  ("$plain bible_folder");
  ("Where eBible publishes one translation as usfm rather than as the pages a reader is shown.");
  ("The pages and the markup are two packagings of the same translation at the same address, differing by one word in the file name, so this is that word said once. A page has to be read twice and the two readings laid against each other before it will say where a verse ends; the markup says so itself.");
  let url = ebible_version_download_url(bible_folder, "usfm");
  return url;
}
