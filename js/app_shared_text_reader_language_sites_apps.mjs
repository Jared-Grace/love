import { property_list_includes } from "./property_list_includes.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_text_reader_language_sites } from "./app_shared_text_reader_language_sites.mjs";
import { app_shared_text_reader_apps } from "./app_shared_text_reader_apps.mjs";
import { app_shared_text_reader_stops } from "./app_shared_text_reader_stops.mjs";
import { function_reachable_names_stopping } from "./function_reachable_names_stopping.mjs";
import { list_map } from "./list_map.mjs";
import { js_file_name } from "./js_file_name.mjs";
import { list_add } from "./list_add.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { property_count_add } from "./property_count_add.mjs";
import { not } from "./not.mjs";
export async function app_shared_text_reader_language_sites_apps() {
  "How many of the sayings written in every language each app that promised one can actually reach, and how many belong to no promising app at all.";
  "THE COUNT OF SAYINGS IS OF THE WHOLE FOLDER AND SO ANSWERS FOR NOBODY IN PARTICULAR. It is read that way on purpose, because a saying added today would be missing from any index of who calls what. But a promise is made by one app to its readers, and a number covering every app at once cannot say whether the app in front of you kept it - fifty sayings in good order elsewhere read exactly like fifty of your own.";
  "A SAYING REACHED BY TWO APPS IS COUNTED BY BOTH, because both of them show it to somebody and both would be at fault if it were short. These are not shares of one total and they will not add up to it.";
  "SAYINGS REACHED BY NO PROMISING APP ARE COUNTED TOGETHER RATHER THAN NAMED. They are in perfect order and nothing is wrong with them - they simply sit in code the promising apps do not open, so the number beside them is how much of the folder's good behaviour is not evidence about any promise.";
  "It reaches each app the same way and stops at the same screens as the reader of doors does, so the two halves of the pair are counted over one app rather than over two slightly different ones.";
  arguments_assert(arguments, 0);
  let sites = await app_shared_text_reader_language_sites();
  let apps = app_shared_text_reader_apps();
  let counted = {};
  let opened = [];
  for (let f_name_app of apps) {
    let stops = await app_shared_text_reader_stops(f_name_app);
    let names = await function_reachable_names_stopping(f_name_app, stops);
    let files = list_map(names, js_file_name);
    list_add(opened, {
      f_name_app,
      files,
    });
    property_set(counted, f_name_app, 0);
  }
  let elsewhere = 0;
  for (let site of sites) {
    let file = property_get(site, "file");
    let anywhere = false;
    for (let one of opened) {
      let reached = property_list_includes(one, "files", file);
      if (not(reached)) {
        continue;
      }
      anywhere = true;
      let f_name_app = property_get(one, "f_name_app");
      property_count_add(counted, f_name_app, 1);
    }
    if (not(anywhere)) {
      elsewhere = elsewhere + 1;
    }
  }
  let r = {
    counted,
    elsewhere,
    sites: sites.length,
  };
  return r;
}
