import { arguments_assert } from "./arguments_assert.mjs";
import { app_renames } from "./app_renames.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { firebase_json_path } from "./firebase_json_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_route } from "./app_route.mjs";
import { list_map } from "./list_map.mjs";
import { list_concat } from "./list_concat.mjs";
import { property_set } from "./property_set.mjs";
import { json_format_to_spaces } from "./json_format_to_spaces.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function app_renames_redirects_write() {
  arguments_assert(arguments, 0);
  ("Writes one lasting redirect into firebase.json for every old app address in the renames record, sending it to the address that app has today. Cloudflare's rules are read off the same file, so both sites follow.");
  ("Each old address leads straight to today's name, never through a later old one - an app renamed twice sends both its old addresses to where it is now, so nobody is passed along twice.");
  ("Rules for other addresses are left as they are. Only rules whose source is a recorded old address are replaced, so running this again writes the same file.");
  let renames = await app_renames();
  function current_get(a_name) {
    let name = a_name;
    for (let rename of renames) {
      let before = property_get(rename, "before");
      if (equal(before, name)) {
        name = property_get(rename, "after");
      }
    }
    return name;
  }
  let sources = list_map_property(renames, "source");
  let path = firebase_json_path();
  let config = await file_read_json(path);
  let hosting = property_get(config, "hosting");
  let redirects = property_get(hosting, "redirects");
  function other_is(redirect) {
    let source = property_get(redirect, "source");
    let recorded = list_includes(sources, source);
    let n = not(recorded);
    return n;
  }
  let others = list_filter(redirects, other_is);
  function redirect_get(rename) {
    let source = property_get(rename, "source");
    let after = property_get(rename, "after");
    let current = current_get(after);
    let destination = app_route(current);
    let r = {
      source,
      destination,
      type: 301,
    };
    return r;
  }
  let made = list_map(renames, redirect_get);
  let all = list_concat(others, made);
  property_set(hosting, "redirects", all);
  let json = json_format_to_spaces(config, 2);
  await file_overwrite(path, json + "\n");
  return made;
}
