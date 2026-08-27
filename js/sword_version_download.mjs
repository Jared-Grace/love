import { http_get_options } from "./http_get_options.mjs";
import { http_generic } from "./http_generic.mjs";
import { sword_version_download_path } from "./sword_version_download_path.mjs";
import { unzip } from "./unzip.mjs";
import { sword_module_path } from "./sword_module_path.mjs";
export async function sword_version_download(sword_folder, zip_url) {
  "$plain sword_folder";
  "$plain zip_url";
  "Fetches one bible published as a Sword module onto this machine and unpacks it, answering where the module's text was put.";
  "A Sword module is worth reaching outside the other two shelves for because it marks every book, every chapter and every verse of its own accord. The reader walks those marks in order, so there is one reading and no two readings to disagree - and no written-down table of how many verses each chapter has for the module to disagree with.";
  let options = http_get_options();
  let buffer = await http_generic(zip_url, options);
  let folder = sword_version_download_path(sword_folder);
  await unzip(buffer, folder);
  let module_folder = sword_module_path(sword_folder);
  return module_folder;
}
