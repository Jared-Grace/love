import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
export function bible_glyph_derivation_references(text, tables) {
  "Every Strong's number a dictionary entry's text names, each with the picture that number is already drawn by and the root it is filed under, or null for either where there is none.";
  "$plain text";
  "the words of one dictionary entry, read for the numbers they cite and for nothing else.";
  "THE GREEK DICTIONARY PADS A HEBREW NUMBER WITH ZEROS, writing Isaiah's origin as H03470, while every table here spells it 3470; the zeros are dropped as it is read, or no Greek word would ever find its Hebrew picture.";
  let references = [];
  for (let found of text.matchAll(/([HG])0*(\d+)/g)) {
    let language = found[1];
    let number = found[2];
    let table = property_get(tables, language);
    list_add(references, {
      reference: language + number,
      glyph: property_get_or_null(table.drawn, number),
      root: property_get_or_null(table.filed, number),
    });
  }
  return references;
}
