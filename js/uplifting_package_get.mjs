import { http_json_memoized_on_success } from "./http_json_memoized_on_success.mjs";
import { uplifting_package_url } from "./uplifting_package_url.mjs";
export async function uplifting_package_get(bible_folder) {
  "One bible folder's package of uplifting verses, fetched once and kept. Kept under the folder name, because a reader who changes bible does not want the one they left.";
  let url = uplifting_package_url(bible_folder);
  let package_map = await http_json_memoized_on_success(
    uplifting_package_get,
    bible_folder,
    url,
  );
  return package_map;
}
