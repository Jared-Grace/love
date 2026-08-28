import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_version_usfm_download_url } from "./ebible_version_usfm_download_url.mjs";
import { http_get_options } from "./http_get_options.mjs";
import { http_generic } from "./http_generic.mjs";
import { ebible_version_usfm_download_path } from "./ebible_version_usfm_download_path.mjs";
import { unzip } from "./unzip.mjs";
export async function ebible_version_usfm_download(bible_folder) {
  arguments_assert(arguments, 1);
  ("$plain bible_folder");
  ("Fetches one eBible translation as usfm onto this machine and unpacks it, answering where it was put.");
  ("The publisher is asked directly rather than through the store that holds the pages, for the same reason the Berean release is: the whole translation arrives as one file, so there is nothing to ask for a book at a time and nothing a proxy would spare.");
  ("The whole bible arrives in one go, and running this again fetches it again. That is the right shape for a text whose publisher writes each new printing over the last at the same address: which printing is on this disk cannot be pinned in the link, so a fetch is how it is made current.");
  let url = ebible_version_usfm_download_url(bible_folder);
  let options = http_get_options();
  let buffer = await http_generic(url, options);
  let folder = ebible_version_usfm_download_path(bible_folder);
  await unzip(buffer, folder);
  return folder;
}
