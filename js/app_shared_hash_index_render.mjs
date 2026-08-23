import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { storage_session_get } from "./storage_session_get.mjs";
import { app_shared_hash_index_open_key } from "./app_shared_hash_index_open_key.mjs";
import { app_shared_hash_index_tree } from "./app_shared_hash_index_tree.mjs";
import { app_shared_hash_index_render_node } from "./app_shared_hash_index_render_node.mjs";
export function app_shared_hash_index_render(parent, names, prefixes, settings) {
  arguments_assert(arguments, 4);
  ("a DIRECTORY of hash routes drawn as a drill-down of blue cards: a category card 'a ›' toggles a nested body of its children, and a leaf card's link goes to that #name. everything an app has to say to get one is here - the names it offers, where each is filed, and which app is remembering the drilled-open path.");
  ("this is the whole of the game's #index screen with the game taken out of it, and taking the game out is what let the sandbox have the same screen. Both pages had grown the same thing twice over: a registry keyed by the word after the hash, and a list to pick from when the address names none. The game's list was cards you drill into; the sandbox's was a stack of bare links, which is what the game's had been before somebody improved one of them and not the other.");
  ("the sandbox gets the folders for free, and that is the part worth expecting. Nothing about a preview name was written down anywhere, but the names group themselves - song_image_choose and song_image_audit share a first word, and so do the two dream traces - so a page that had nine links in a flat stack now opens as five headings.");
  ("the open set is READ here and handed down rather than reached for at each node, so one session-storage read draws the whole tree.");
  let key = app_shared_hash_index_open_key();
  let open_stored = storage_session_get(app_fn, key);
  let open_paths = new Set(open_stored);
  let tree = app_shared_hash_index_tree(names, prefixes);
  let top = object_property_names(tree.children).sort();
  for (let label of top) {
    app_shared_hash_index_render_node(
      parent,
      label,
      label,
      tree.children[label],
      open_paths,
      app_fn,
    );
  }
}
