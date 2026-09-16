import { arguments_assert } from "./arguments_assert.mjs";
import { xml_tags_attributes } from "./xml_tags_attributes.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_single } from "./list_single.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { not } from "./not.mjs";
import { error } from "./error.mjs";
import { text_skip } from "./text_skip.mjs";
import { divide } from "./divide.mjs";
export function ardour_session_start_seconds(text) {
  "$plain text";
  "The second on Ardour's timeline where the session's range begins, given the text of the session file.";
  "★ THIS IS WHERE AN EXPORT BEGINS, SO IT IS SECOND ZERO OF THE RECORDING. A note placed in the session is heard in the exported song this many seconds earlier than the timeline says.";
  arguments_assert(arguments, 1);
  let locations = xml_tags_attributes(text, "Location");
  function range_is(location) {
    let b = text_includes(location.flags, "IsSessionRange");
    return b;
  }
  let ranges = list_filter(locations, range_is);
  let range = list_single(ranges);
  let list = xml_tags_attributes(text, "TempoMap");
  let map = list_single(list);
  let samples = text_starts_with(range.start, "a");
  if (not(samples)) {
    error(
      "this Ardour session's range does not begin at a clock time: " +
        range.start,
    );
  }
  let skipped = text_skip(range.start, 1);
  let clocks = Number(skipped);
  let bottom = Number(map["superclocks-per-second"]);
  let seconds = divide(clocks, bottom);
  return seconds;
}
