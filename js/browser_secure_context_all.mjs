import { js_secure_context_asked } from "./js_secure_context_asked.mjs";
import { list_difference } from "./list_difference.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { repo_love_name } from "./repo_love_name.mjs";
import { repo_functions_code } from "./repo_functions_code.mjs";
import { browser_secure_context_names } from "./browser_secure_context_names.mjs";
import { property_get } from "./property_get.mjs";
import { text_split } from "./text_split.mjs";
import { list_first } from "./list_first.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { js_parse_async } from "./js_parse_async.mjs";
import { js_secure_context_members } from "./js_secure_context_members.mjs";
import { not } from "./not.mjs";
export async function browser_secure_context_all() {
  "Every function in this repo that reaches for something a browser hands out only over https WITHOUT asking first whether the browser gave it, as one line each saying which function and which thing. Read-only.";
  "Asking is what makes the difference between a page that dies and a page that carries on, so a function that asks is not named here at all. That is the whole point of the reading: the same line of code is the fault in one file and the remedy in another, and only the asking tells them apart.";
  "The repo is read once and a tree is opened only for a file whose text says one of the object words at all. Those words are derived by taking what stands before the dot in the list itself, so a name added there narrows the walk without anybody remembering to widen a second list - which is the reading a typed word silently ages out of.";
  "The object word is the cheap test rather than the whole pairing, because a line long enough to be wrapped puts the dot on the next line and the pairing would stop matching the text while still matching the tree.";
  arguments_assert(arguments, 0);
  let repo_name = repo_love_name();
  let entries = await repo_functions_code(repo_name);
  let wanted = browser_secure_context_names();
  let objects = [];
  for (let name of wanted) {
    let parts = text_split(name, ".");
    let object_name = list_first(parts);
    list_add_unique(objects, object_name);
  }
  let named = [];
  for (let entry of entries) {
    let candidate = property_get(entry, "name");
    let code = property_get(entry, "code");
    let mentions = false;
    for (let word of objects) {
      let says = text_includes(code, word);
      if (says) {
        mentions = true;
      }
    }
    if (not(mentions)) {
      continue;
    }
    let tree = await js_parse_async(code);
    let reached = js_secure_context_members(tree);
    let asked = js_secure_context_asked(tree);
    let members = list_difference(reached, asked);
    for (let member of members) {
      let line = text_combine_multiple([candidate, " -> ", member]);
      list_add_unique(named, line);
    }
  }
  named.sort();
  return named;
}
