import { app_g_day_state } from "./app_g_day_state.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export function app_g_day_discern_pool() {
  "who the day's discernment prayer may name next: while anybody is still to be reached it is one of them, and once the last of them has believed it is one of the believers still waiting to be gathered for baptism";
  "the order is the day's own order and needs nothing stored to keep it - reaching people comes first, and gathering them is what is left when there is nobody left to reach. so the same prayer serves both halves of the day, and the gold that answers it leads to a person either way";
  let state = app_g_day_state();
  let talkable = property_get(state, "talkable");
  let remaining = list_empty_not_is(talkable);
  if (remaining) {
    return talkable;
  }
  let converts = property_get(state, "converts");
  return converts;
}
