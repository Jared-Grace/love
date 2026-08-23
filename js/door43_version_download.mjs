import { arguments_assert } from "./arguments_assert.mjs";
import { door43_version_download_path } from "./door43_version_download_path.mjs";
import { door43_version_download_url } from "./door43_version_download_url.mjs";
import { http_generic } from "./http_generic.mjs";
import { http_get_options } from "./http_get_options.mjs";
import { unzip } from "./unzip.mjs";
export async function door43_version_download(org, door43_folder, tag) {
  arguments_assert(arguments, 3);
  ("$plain org");
  ("$plain door43_folder");
  ("$plain tag");
  ("Fetches one released bible of the Door43 catalogue onto this machine and unpacks it, answering where it was put.");
  ("Door43 publishes its bibles as usfm, which marks every chapter and every verse of its own accord. That is why it is worth reaching outside eBible for: an eBible page has to be read twice and the two readings laid against each other, and any chapter where they disagree is shown to nobody.");
  let url = door43_version_download_url(org, door43_folder, tag);
  let options = http_get_options();
  let buffer = await http_generic(url, options);
  let file_path = door43_version_download_path(door43_folder);
  await unzip(buffer, file_path);
  return file_path;
}
