import { property_equals } from "./property_equals.mjs";
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
  "Cuts a piece of text into runs, each run being either all characters a name may be made of or all characters a name may not be made of, and says of each run which of the two it is.";
  "What it is for is finding names inside prose without mistaking part of a longer word for a name. Looking for a word in text finds it in the middle of another word; looking through these runs cannot, because a run is the whole unbroken stretch and a longer word is a longer run.";
  "The runs come out in the order they were read, and joined end to end they give the text back exactly, spaces and punctuation and all. Everything built on this - counting a name, asking whether a name is there, putting another name in its place - puts the runs back together afterwards and relies on that.";
  let empty = "";
  let chars = text_split(text, empty);
  let segments = [];
  function lambda(character) {
    let identifier = text_identifier_char_is(character);
    let e = list_empty_is(segments);
    let merged = false;
    if (not(e)) {
      let last = list_last(segments);
      let same = property_equals(last, "identifier", identifier);
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
