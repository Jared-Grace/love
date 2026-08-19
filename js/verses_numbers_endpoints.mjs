import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
export function verses_numbers_endpoints(verses) {
  "The two verse numbers a run of verses reaches from and to, or the one number when it is a single verse.";
  "Everything that names a passage to somebody else - a link out to the reader, a chapter opened at a place - names it by its ends rather than by every verse in it, because the ends are what a person says out loud and what an address can carry.";
  "One number rather than the same number twice, because a single verse written as reaching from itself to itself reads as a mistake to whoever sees the address.";
  "The verses are taken in the order they were handed over, so the first of them is the opening end. A caller holding verses in some other order has to put them in order before asking, and none does.";
  arguments_assert(arguments, 1);
  let property_name = verse_number_key();
  let numbers = list_map_property(verses, property_name);
  let number_first = list_first(numbers);
  let number_last = list_last(numbers);
  let single = equal(number_first, number_last);
  let endpoints = single ? [number_first] : [number_first, number_last];
  return endpoints;
}
