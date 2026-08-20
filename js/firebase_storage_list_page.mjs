import { retry_standard } from "./retry_standard.mjs";
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
  "ASKED AGAIN WHEN THE CONNECTION DROPS, because a sweep asks this once per bible and one reset ends the whole sweep. Fifteen hundred listings were lost twice that way, the second time before the connection was even secured, and neither attempt wrote anything down - so the record everything else reads stayed as old as it was.";
  "ASKING AGAIN IS SAFE HERE IN A WAY IT IS NOT EVERYWHERE. This reads names and changes nothing, so a second ask is the same question, and the answer to it is the same answer. That is why the retrying sits here rather than around every request the repo makes.";
  "IT STILL COMPLAINS IF IT NEVER GETS THROUGH, with every reason it was given. What must never happen is a dropped connection coming back as a page holding nothing, because a bible reads as empty then, and a record saying a bible is empty is what sends somebody uploading what is already there.";
  let url = firebase_storage_list_url(project_url, prefix, page_token);
  let options = {};
  async function lambda() {
    let asked = await http_json(url, options);
    return asked;
  }
  let answer = await retry_standard(lambda);
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
