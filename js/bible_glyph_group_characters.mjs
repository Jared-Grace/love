import { bible_glyph_group_names } from "./bible_glyph_group_names.mjs";
import { property_get } from "./property_get.mjs";
export function bible_glyph_group_characters(glyph, lookup) {
  "One seated glyph field drawn as the characters a reader sees, whether the field names one picture or a group of them.";
  "$plain glyph";
  "$plain lookup";
  "THE PICTURES OF A GROUP ARE RUN TOGETHER WITH NOTHING BETWEEN THEM, because touching is what says one word. The mark that separates two words is the gap around them, so anything put inside a group - a space, a plus, a joiner - would be saying the opposite of what the group means.";
  "IT LOOKS EACH NAME UP THE WAY A SINGLE FIELD WAS ALWAYS LOOKED UP, so a name the vocabulary does not carry still throws here rather than drawing a blank. That is deliberate and unchanged: this runs in the drafting aids, where a wrong table should stop a person rather than be read past, and the gate that walks the root tables is what keeps it from ever happening in front of a reader.";
  let characters = "";
  for (let name of bible_glyph_group_names(glyph)) {
    let character = property_get(lookup, name);
    characters = characters + character;
  }
  return characters;
}
