import { list_map_join_empty } from "./list_map_join_empty.mjs";
import { text_identifier_segments } from "./text_identifier_segments.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function text_identifier_replace(text_source, name_before, name_after) {
  "Swaps one whole word for another wherever it stands on its own in a text, leaving a longer word that merely contains it alone. A name written inside a piece of text is invisible to a rename that walks the tree, so this is what reaches it.";
  let segments = text_identifier_segments(text_source);
  function to_text(segment) {
    let piece = property_get(segment, "text");
    let identifier_is = property_get(segment, "identifier");
    if (not(identifier_is)) {
      return piece;
    }
    let same_is = equal(piece, name_before);
    if (same_is) {
      return name_after;
    }
    return piece;
  }
  let joined = list_map_join_empty(segments, to_text);
  return joined;
}
