import { list_skip_1 } from "./list_skip_1.mjs";
import { marker } from "./marker.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { list_second } from "./list_second.mjs";
import { list_first } from "./list_first.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_skip } from "./list_skip.mjs";
export function list_first_remaining(list) {
  marker("1");
  let first = null;
  let remaining = null;
  if (list_empty_not_is(list)) {
    first = list_first(list);
    if (list_multiple_is(list)) {
      remaining = list_skip_1(list);
    }
  }
  let v = {
    first,
    remaining,
  };
  return v;
}
