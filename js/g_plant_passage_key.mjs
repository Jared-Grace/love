import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function g_plant_passage_key(passage) {
  "One passage named in a way that is unique across the whole supply - its chapter code and its verse numbers joined.";
  "A passage's ref is only its verse numbers, so on its own it repeats constantly: every book has a passage called 1. The chapter in front of it is what makes it an address rather than a label, and an address is what a plant needs, because a plant is now identified by the passage it starts at and the one it ends at.";
  let chapter = property_get(passage, "chapter");
  let ref = property_get(passage, "ref");
  let r = text_combine_multiple([chapter, ":", ref]);
  return r;
}
