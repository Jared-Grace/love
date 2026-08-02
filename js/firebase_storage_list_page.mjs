import { firebase_storage_list_url } from "./firebase_storage_list_url.mjs";
import { http_json } from "./http_json.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function firebase_storage_list_page(
  project_url,
  prefix,
  page_token,
) {
  "One page of what a bucket holds under a prefix, as the names on it and the token for the page after it.";
  "The token comes back as nothing once there is no page after this one, which is how a reader knows to stop without being told a count beforehand.";
  let url = firebase_storage_list_url(project_url, prefix, page_token);
  let options = {};
  let answer = await http_json(url, options);
  let none = [];
  let items = property_get_or(answer, "items", none);
  let names = list_map_property(items, "name");
  let next = property_get_or_null(answer, "nextPageToken");
  let page = {
    names,
    next,
  };
  return page;
}
