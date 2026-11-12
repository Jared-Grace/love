import { app_shared_renames_redirects_unready_write } from "./app_shared_renames_redirects_unready_write.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_renames } from "./app_shared_renames.mjs";
import { html_extension } from "./html_extension.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_map } from "./list_map.mjs";
import { list_concat } from "./list_concat.mjs";
import { firebase_json_path } from "./firebase_json_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { property_in_list_not } from "./property_in_list_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_shared_renames_page_ready } from "./app_shared_renames_page_ready.mjs";
import { not } from "./not.mjs";
import { app_shared_renames_current } from "./app_shared_renames_current.mjs";
import { app_shared_route } from "./app_shared_route.mjs";
import { property_set } from "./property_set.mjs";
import { json_format_to_spaces } from "./json_format_to_spaces.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function app_shared_renames_redirects_write() {
  arguments_assert(arguments, 0);
  ("Writes one lasting redirect into firebase.json for every old app address in the renames record whose app has its page served under today's name, sending it there. Cloudflare's rules are read off the same file, so both sites follow.");
  ("An old address whose new page is not served yet gets no redirect, because sending people on would land them on nothing while the old page is still there to read.");
  ("Each old address leads straight to today's name, never through a later old one - an app renamed twice sends both its old addresses to where it is now, so nobody is passed along twice.");
  ("Rules for other addresses are left as they are. Only rules whose source is a recorded old address are replaced, so running this again writes the same file.");
  let renames = await app_shared_renames();
  ("An old address is sent on with and without .html. The sites only answer page.html by sending it to /page while the file is there, so once the old page is taken out its .html address would find nothing, and that spelling is still in older saved links and in what an installed app opens at. Measured 2026-11-03: /privacy_policy forwarded on both sites and /privacy_policy.html was not found on either.");
  function source_html(source_short) {
    let r = source_short + html_extension();
    return r;
  }
  let sources_short = list_map_property(renames, "source");
  let sources_html = list_map(sources_short, source_html);
  let sources = list_concat(sources_short, sources_html);
  let path = firebase_json_path();
  let config = await file_read_json(path);
  let hosting = property_get(config, "hosting");
  let redirects = property_get(hosting, "redirects");
  function other_is(redirect) {
    let n = property_in_list_not(redirect, "source", sources);
    return n;
  }
  let others = list_filter(redirects, other_is);
  let made = [];
  for (let rename of renames) {
    let before = property_get(rename, "before");
    let ready = await app_shared_renames_page_ready(renames, before);
    if (not(ready)) {
      continue;
    }
    let source = property_get(rename, "source");
    let current = app_shared_renames_current(renames, before);
    let destination = app_shared_route(current);
    list_add_multiple(made, [
      {
        source,
        destination,
        type: 301,
      },
      {
        source: source_html(source),
        destination,
        type: 301,
      },
    ]);
  }
  let all = list_concat(others, made);
  property_set(hosting, "redirects", all);
  let json = json_format_to_spaces(config, 2);
  await file_overwrite(path, json + "\n");
  let made2 = await app_shared_renames_redirects_unready_write();
  return made;
}
