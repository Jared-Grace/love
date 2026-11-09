import { arguments_assert } from "./arguments_assert.mjs";
import { apps_published_names } from "./apps_published_names.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_shared_route_slash_served_names } from "./app_shared_route_slash_served_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { app_shared_route_slash } from "./app_shared_route_slash.mjs";
import { app_shared_route } from "./app_shared_route.mjs";
import { list_map } from "./list_map.mjs";
import { file_name_html } from "./file_name_html.mjs";
import { firebase_json_path } from "./firebase_json_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { property_in_list_not } from "./property_in_list_not.mjs";
import { list_concat } from "./list_concat.mjs";
import { property_set } from "./property_set.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { json_format_to_spaces } from "./json_format_to_spaces.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function app_shared_route_slash_redirects_write() {
  arguments_assert(arguments, 0);
  ("Writes one lasting redirect into firebase.json for every served app whose name holds an underscore, from the address the name reads as with each underscore taken as a folder to the address the app is served at, so /bible/search opens bible_search. Cloudflare's rules are read off the same file, so both sites follow.");
  ("Only rules whose source is one of these folder spellings are replaced, so running this again writes the same file and the rename redirects beside them are left as they are.");
  let names = await apps_published_names();
  function underscored(a_name) {
    let r = text_includes(a_name, "_");
    return r;
  }
  let underscored_all = list_filter(names, underscored);
  ("An app named among those served at their slash address gets no redirect from it - that address serves its page instead, through a rewrite written below, and the address bar keeps it.");
  let served_names = app_shared_route_slash_served_names();
  function served_is(a_name) {
    let r = list_includes(served_names, a_name);
    return r;
  }
  function served_not_is(a_name) {
    let b = served_is(a_name);
    let r = not(b);
    return r;
  }
  let chosen = list_filter(underscored_all, served_not_is);
  let served = list_filter(underscored_all, served_is);
  function redirect(a_name) {
    let r = {
      source: app_shared_route_slash(a_name),
      destination: app_shared_route(a_name),
      type: 301,
    };
    return r;
  }
  let made = list_map(chosen, redirect);
  function rewrite(a_name) {
    let r = {
      source: app_shared_route_slash(a_name),
      destination: "/" + file_name_html(a_name),
    };
    return r;
  }
  let rewrites_made = list_map(served, rewrite);
  let sources = list_map(underscored_all, app_shared_route_slash);
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
  let rewrites = property_get_or(hosting, "rewrites", []);
  let rewrites_others = list_filter(rewrites, other_is);
  let rewrites_all = list_concat(rewrites_others, rewrites_made);
  property_set(hosting, "rewrites", rewrites_all);
  let json = json_format_to_spaces(config, 2);
  await file_overwrite(path, json + "\n");
  let r = {
    redirects: made,
    rewrites: rewrites_made,
  };
  return r;
}
