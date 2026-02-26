import { firebase_storage_url_project_jg } from "../../../love/public/src/firebase_storage_url_project_jg.mjs";
import { html_parse_find_a_href_starts_with_without_unique } from "../../../love/public/src/html_parse_find_a_href_starts_with_without_unique.mjs";
import { ebible_url } from "../../../love/public/src/ebible_url.mjs";
import { ebible_url_details } from "../../../love/public/src/ebible_url_details.mjs";
import { http_local_html_parse } from "../../../love/public/src/http_local_html_parse.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function ebible_versions() {
  let url = ebible_url() + "download.php";
  let project_url = firebase_storage_url_project_jg();
  let r = await http_local_html_parse(url, project_url);
  let root = property_get(r, "root");
  let d = property_get(r, "d");
  let prefix = ebible_url_details();
  let unique = html_parse_find_a_href_starts_with_without_unique(
    root,
    d,
    prefix,
  );
  return unique;
}
