import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { property_list_map_property } from "./property_list_map_property.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { each } from "./each.mjs";
import { app_verses_link_copied_get } from "./app_verses_link_copied_get.mjs";
import { html_url } from "./html_url.mjs";
import { list_join_newline_2_copy } from "./list_join_newline_2_copy.mjs";
export async function app_verses_copy(verse_groups) {
  "Put the gathered verses on the clipboard, ready to be sent to somebody.";
  "THE WORDS GO ON THEIR OWN UNLESS THE READER HAS ASKED FOR A LINK. What a person sends is theirs, and a verse arriving with something of ours attached to it is a different message from the verse arriving by itself. So the link is an offer the reader accepts once and never a thing that rides along quietly.";
  "The answer is read here, at the moment of copying, rather than handed in from the page that drew the button - so the setting and the clipboard cannot disagree, whichever of the several places a copy is set off from.";
  arguments_assert(arguments, 1);
  let lines = [];
  function group_each(group) {
    let reference = property_get(group, "reference");
    list_add(lines, reference);
    let texts = property_list_map_property(group, "entries", "text");
    list_add_multiple(lines, texts);
  }
  each(verse_groups, group_each);
  let link_copied = app_verses_link_copied_get();
  if (link_copied) {
    let url = html_url();
    list_add(lines, url);
  }
  await list_join_newline_2_copy(lines);
}
