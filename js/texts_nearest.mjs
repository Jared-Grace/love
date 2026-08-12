import { text_edit_distance } from "./text_edit_distance.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_min } from "./list_min.mjs";
import { property_get } from "./property_get.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
export function texts_nearest(texts, word, apart_maximum) {
  "The words in a list spelled most like a given word: the ones tied for closest, and nothing at all when even the closest is further away than the limit allows.";
  "Only the tie is returned rather than a ranked run of guesses, because everything past the closest tier is noise dressed up as a suggestion - a two-letter word is two edits from every other two-letter word, so a run of guesses ends in an arbitrary handful of them and a reader cannot tell the found answer from the filler.";
  function to_measured(text) {
    let apart = text_edit_distance(text, word);
    let measured = {
      text,
      apart,
    };
    return measured;
  }
  let measured_each = list_map(texts, to_measured);
  function near_enough_is(measured) {
    let apart = property_get(measured, "apart");
    let within = less_than_equal(apart, apart_maximum);
    return within;
  }
  let near = list_filter(measured_each, near_enough_is);
  let none = list_empty_is(near);
  if (none) {
    let nothing = [];
    return nothing;
  }
  let aparts = list_map_property(near, "apart");
  let closest = list_min(aparts);
  let tied = list_filter_property(near, "apart", closest);
  let nearest = list_map_property(tied, "text");
  return nearest;
}
