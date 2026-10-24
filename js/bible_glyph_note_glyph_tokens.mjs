import { equal } from "./equal.mjs";
import { list_map_unique } from "./list_map_unique.mjs";
export function bible_glyph_note_glyph_tokens(text) {
  "$plain text";
  "the text is one line of a chapter's prose, read as words and never run.";
  "Every picture a picture Bible chapter note points at by name - the marked form, the dollar, the word glyph and a space before the picture's name, and only that. A picture named in plain words stays narrative and is never collected.";
  "THE MARKER IS WHAT LETS A NOTE STOP COPYING THE TABLE. A note that writes the flame for God goes on saying it after the table moves God to another picture; a note that writes the marked name says only which picture it means, and the picture, its meaning and whether the chapter still draws it are all asked of the one place that defines them.";
  "The name runs to the first character a picture name cannot hold, and a plus is one it can, because a form of a picture is spelled as the picture, a plus and the form.";
  "De-duplicated, and an empty list when nothing is marked, the same answer the function marker in memory prose gives.";
  let matches = text.match(/\$glyph ([a-z0-9_+]+)/g);
  if (equal(matches, null)) {
    let none = [];
    return none;
  }
  function inside_get(m) {
    let prefix = 7;
    let inside = m.slice(prefix);
    return inside;
  }
  let unique = list_map_unique(matches, inside_get);
  return unique;
}
