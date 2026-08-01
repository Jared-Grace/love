import { property_equals } from "./property_equals.mjs";
import { text_identifier_segments } from "./text_identifier_segments.mjs";
import { property_get } from "./property_get.mjs";
import { list_any } from "./list_any.mjs";
import { not } from "./not.mjs";
export function text_identifier_includes(text_source, name) {
  "True when a text spells this name as a whole word somewhere, so a longer word that merely contains it does not count. Reading a name out of plain text is the only way to find it where no tree is parsed - a list of arguments, a stored baseline, a path.";
  let segments = text_identifier_segments(text_source);
  function named_is(segment) {
    let identifier_is = property_get(segment, "identifier");
    if (not(identifier_is)) {
      return false;
    }
    let same_is = property_equals(segment, "text", name);
    return same_is;
  }
  let found = list_any(segments, named_is);
  return found;
}
