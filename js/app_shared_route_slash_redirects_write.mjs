import { arguments_assert } from "./arguments_assert.mjs";
import { apps_published_names } from "./apps_published_names.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_shared_route_slash } from "./app_shared_route_slash.mjs";
import { app_shared_route } from "./app_shared_route.mjs";
import { list_map } from "./list_map.mjs";
import { firebase_json_path } from "./firebase_json_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { property_in_list_not } from "./property_in_list_not.mjs";
import { list_concat } from "./list_concat.mjs";
import { property_set } from "./property_set.mjs";
import { json_format_to_spaces } from "./json_format_to_spaces.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function app_shared_route_slash_redirects_write() {
  arguments_assert(arguments, 0);
  ("Writes one lasting redirect into firebase.json for every served app whose name holds an underscore, from the address the name reads as with each underscore taken as a folder to the address the app is served at, so /learn/en opens learn_en. Cloudflare's rules are read off the same file, so both sites follow.");
  ("Only rules whose source is one of these folder spellings are replaced, so running this again writes the same file and the rename redirects beside them are left as they are.");
  let names = await apps_published_names();
  function underscored(a_name) {
    let r = text_includes(a_name, "_");
    return r;
  }
  let chosen = list_filter(names, underscored);
  function redirect(a_name) {
    let r = {
      source: app_shared_route_slash(a_name),
      destination: app_shared_route(a_name),
      type: 301,
    };
    return r;
  }
  let made = list_map(chosen, redirect);
  let sources = list_map(chosen, app_shared_route_slash);
  let path = firebase_json_path();
  let config = await file_read_json(path);
  let hosting = property_get(config, "hosting");
  let redirects = property_get(hosting, "redirects");
  function other_is(rule) {
    let n = property_in_list_not(rule, "source", sources);
    return n;
  }
  let others = list_filter(redirects, other_is);
  let all = list_concat(others, made);
  property_set(hosting, "redirects", all);
  let json = json_format_to_spaces(config, 2);
  await file_overwrite(path, json + "\n");
  return made;
}
