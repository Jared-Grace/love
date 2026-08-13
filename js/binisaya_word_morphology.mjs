import { binisaya_word_morphology_marker } from "./binisaya_word_morphology_marker.mjs";
import { equal } from "./equal.mjs";
import { list_get } from "./list_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { text_between } from "./text_between.mjs";
import { text_html_tags_remove } from "./text_html_tags_remove.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_split } from "./text_split.mjs";
import { text_trim } from "./text_trim.mjs";
export async function binisaya_word_morphology(html) {
  "Read one binisaya.com page for the root it takes a word back to and the affixes it says were put on that root.";
  "It answers whether the page took the word apart at all, separately from what it took it apart into. The site carries the breakdown on some entries and not on others - a word plainly built out of a root and two affixes can still come back whole - so a caller must be able to tell an absent breakdown from a word that really is a root. Reading the emptiness as a verdict is exactly the wrong reading, and only the caller knows enough to refuse it.";
  let marker = binisaya_word_morphology_marker();
  let present = text_includes(html, marker);
  if (not(present)) {
    let none = {
      analysed: false,
      root: "",
      affixes: "",
    };
    return none;
  }
  let line = text_between(html, marker, "<br>");
  let text = await text_html_tags_remove(line);
  let split = text_split(text, " - ");
  let parts = list_map(split, text_trim);
  let size = list_size(parts);
  let three = equal(size, 3);
  if (not(three)) {
    let unread = {
      analysed: false,
      root: "",
      affixes: "",
    };
    return unread;
  }
  let root = list_get(parts, 1);
  let affixes = list_get(parts, 2);
  let r = {
    analysed: true,
    root,
    affixes,
  };
  return r;
}
