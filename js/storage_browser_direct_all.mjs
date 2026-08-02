import { arguments_assert } from "./arguments_assert.mjs";
import { repo_love_name } from "./repo_love_name.mjs";
import { repo_functions_code } from "./repo_functions_code.mjs";
import { storage_browser_object_names } from "./storage_browser_object_names.mjs";
import { storage_browser_doors } from "./storage_browser_doors.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { text_includes } from "./text_includes.mjs";
import { js_parse_async } from "./js_parse_async.mjs";
import { js_storage_browser_objects } from "./js_storage_browser_objects.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
import { not } from "./not.mjs";
export async function storage_browser_direct_all() {
  "Every function in this repo that speaks to one of the browser's own stores itself instead of through a door, as one line each saying which function and which store. Read-only.";
  "The repo is read once and the trees are opened only for the files whose text says one of the two words at all. A file that never says the word cannot name it, so this narrows the walk to a handful of trees without narrowing the answer by a single site - and the cheap test goes first because opening every tree in the repo to ask a question the text already answers took thirteen minutes the last time it was written the other way round.";
  "The doors are left out by name rather than by shape. What makes them different is not how they are written - they are written exactly like an offender - but that speaking to the browser is the whole of what they do, and that is a claim about meaning which only a person can make.";
  arguments_assert(arguments, 0);
  let repo_name = repo_love_name();
  let entries = await repo_functions_code(repo_name);
  let wanted = storage_browser_object_names();
  let doors = storage_browser_doors();
  let named = [];
  for (let entry of entries) {
    let candidate = property_get(entry, "name");
    let allowed = list_includes(doors, candidate);
    if (allowed) {
      continue;
    }
    let code = property_get(entry, "code");
    let mentions = false;
    for (let word of wanted) {
      let says = text_includes(code, word);
      if (says) {
        mentions = true;
      }
    }
    if (not(mentions)) {
      continue;
    }
    let tree = await js_parse_async(code);
    let objects = js_storage_browser_objects(tree);
    for (let object of objects) {
      let line = text_combine_multiple([candidate, " -> ", object]);
      list_add_unique(named, line);
    }
  }
  named.sort();
  return named;
}
