import { floor } from "./floor.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { list_get } from "./list_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_size } from "./list_size.mjs";
import { multiply_divide } from "./multiply_divide.mjs";
import { range } from "./range.mjs";
export function list_spread_take(list, count) {
  "Up to the asked-for number of items, taken evenly spread through a list from one end of it to the other.";
  "A list too long to read is read by sample, and the first few are the wrong sample. A list is gathered in some order, so its opening items all come from one corner of whatever that order was - a sweep over a store hands back its findings book by book, and the first thirty are thirty findings about one book. Spread across the whole, the sample says something about the whole.";
  "A list no longer than the number asked for comes back exactly as it stands, and no item is ever handed back twice.";
  let size = list_size(list);
  let fits = less_than_equal(size, count);
  if (fits) {
    return list;
  }
  let places = range(count);
  function place_read(place) {
    let along = multiply_divide(place, size, count);
    let index = floor(along);
    let item = list_get(list, index);
    return item;
  }
  let r = list_map(places, place_read);
  return r;
}
