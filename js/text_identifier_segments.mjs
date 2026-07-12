import { each } from "./each.mjs";
import { text_split } from "./text_split.mjs";
import { text_identifier_char_is } from "./text_identifier_char_is.mjs";
import { text_combine } from "./text_combine.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_last } from "./list_last.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export function text_identifier_segments(text) {
  let empty = "";
  let chars = text_split(text, empty);
  let segments = [];
  function lambda(character) {
    let identifier = text_identifier_char_is(character);
    let e = list_empty_is(segments);
    let merged = false;
    if (not(e)) {
      let last = list_last(segments);
      let same = property_get(last, "identifier") === identifier;
      if (same) {
        let t = property_get(last, "text");
        let combined = text_combine(t, character);
        property_set(last, "text", combined);
        merged = true;
      }
    }
    if (not(merged)) {
      let segment = {
        text: character,
        identifier,
      };
      list_add(segments, segment);
    }
  }
  each(chars, lambda);
  return segments;
}
