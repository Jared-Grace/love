import { property_get } from "./property_get.mjs";
export function gloss_same_as_verse_read(pointer) {
  "The verse a pointer names, where the explanation it stands in for was written.";
  "$plain pointer";
  "the pointer is the small thing an explanation wears in place of words of its own, naming a word by its spelling and the verse it stands in.";
  "The verse is half the pointer rather than a nicety. Measured over ten chapters, a spelling on its own answered to several different explanations in nearly half the places a pointer used it, so the verse is what turns a guess into an address.";
  let verse = property_get(pointer, "verse");
  return verse;
}
