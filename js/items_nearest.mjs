import { list_map } from "./list_map.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_min } from "./list_min.mjs";
import { property_get } from "./property_get.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
export function items_nearest(items, lambda$apart, apart_maximum) {
  "The things in a list nearest to something, by whatever measure of nearness is handed in: the ones tied for closest, and nothing at all when even the closest is further away than the limit allows.";
  "Only the tie is returned rather than a ranked run of guesses, because everything past the closest tier is noise dressed up as a suggestion - a two-letter word is two edits from every other two-letter word, so a run of guesses ends in an arbitrary handful of them and a reader cannot tell the found answer from the filler.";
  "The measuring is handed in rather than done here, because what counts as near is not always one comparison. A book of the bible is near a word if either its code or its name is, and a caller wanting that can say so without a second copy of the tie-picking underneath.";
  function to_measured(item) {
    let apart = lambda$apart(item);
    let measured = {
      item,
      apart,
    };
    return measured;
  }
  let measured_each = list_map(items, to_measured);
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
  let nearest = list_map_property(tied, "item");
  return nearest;
}
