import { ebible_version_download_url } from "../../../love/public/src/ebible_version_download_url.mjs";
export function ebible_version_download_url_html(bible_folder) {
  let v = ebible_version_download_url(bible_folder, "html");
  return v;
}
