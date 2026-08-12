import { app_g_day_state } from "./app_g_day_state.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function app_g_day_discern_wanted_is() {
  "whether the day has anything left for the discernment prayer to name, which is what decides if that prayer is OFFERED at all on the tap-yourself menu.";
  "There are two things it can name and a gap between them. While somebody is still to be reached it names a person. Once everybody has believed and they are all walking behind the player it names the water. In between - believers standing where they believed, waiting to be gathered - it names nothing, because gathering is done by walking up and tapping.";
  "Offered rather than answered-with-nothing: a prayer button that appears and then leads nowhere teaches the player that praying sometimes does not work.";
  let state = app_g_day_state();
  let talkable = property_get(state, "talkable");
  let off = null_is(talkable);
  if (off) {
    return false;
  }
  let remaining = list_empty_not_is(talkable);
  if (remaining) {
    return true;
  }
  let converts = property_get(state, "converts");
  let gathered = list_empty_is(converts);
  return gathered;
}
