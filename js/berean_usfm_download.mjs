import { arguments_assert } from "./arguments_assert.mjs";
import { berean_usfm_url } from "./berean_usfm_url.mjs";
import { http_get_options } from "./http_get_options.mjs";
import { http_generic } from "./http_generic.mjs";
import { berean_usfm_download_path } from "./berean_usfm_download_path.mjs";
import { unzip } from "./unzip.mjs";
export async function berean_usfm_download() {
  arguments_assert(arguments, 0);
  ("Fetches the Berean Standard Bible from its publisher onto this machine and unpacks it, answering where it was put.");
  ("usfm, which marks every chapter and every verse of its own accord. That is what makes it worth fetching rather than reading the archive's pages for the same translation: a page there has to be read twice and the two readings laid against each other, because neither of them alone says where a verse ends.");
  ("The whole bible arrives as one file of sixty-six, so there is nothing to ask for a book at a time.");
  let url = berean_usfm_url();
  let options = http_get_options();
  let buffer = await http_generic(url, options);
  let folder = berean_usfm_download_path();
  await unzip(buffer, folder);
  return folder;
}
