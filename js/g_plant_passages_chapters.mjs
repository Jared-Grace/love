import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
export function g_plant_passages_chapters(passages) {
  "Which chapters a run of passages touches, in reading order and each named once.";
  "A plant reports these so a person can find the text it preaches, but they no longer DEFINE it - a plant may start and end mid-chapter, so two plants can both name the chapter they share. Reading this as the plant's identity is what it must not be used for; the plant's start and end passages are that.";
  let seen = [];
  for (let passage of passages) {
    let chapter = property_get(passage, "chapter");
    let known = list_includes(seen, chapter);
    if (known) {
      continue;
    }
    list_add(seen, chapter);
  }
  return seen;
}
