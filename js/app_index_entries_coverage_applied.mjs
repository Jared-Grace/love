import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_find_property_get_or } from "./list_find_property_get_or.mjs";
import { null_is } from "./null_is.mjs";
import { text_from_number } from "./text_from_number.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_map } from "./list_map.mjs";
export function app_index_entries_coverage_applied(entries, coverage) {
  "Puts the count of published chapters onto the front page card of each app that has one, leaving every other card exactly as it was given.";
  "The cards are written without any of this and the counts are fetched without knowing what a card is, and joining them here is what keeps either one able to change alone. A card is a sentence somebody wrote; a count is a number somebody's uploading produced this morning. Writing the number into the sentence would put the second thing under the care of whoever next edits the first.";
  "An app with no row, or a row whose count could not be fetched, comes back as the very card that was handed in - not a card saying nothing so far, and not a card missing. Silence about how much there is reads as an ordinary card; a nothing so far reads as an empty app, and would be printed on exactly the day the bucket was unreachable rather than on a day the app was empty.";
  arguments_assert(arguments, 2);
  function entry_coverage_applied(entry) {
    let app_fn = property_get(entry, "app_fn");
    let text = property_get(entry, "text");
    let count = list_find_property_get_or(
      coverage,
      "app_fn",
      app_fn,
      "count",
      null,
    );
    if (null_is(count)) {
      return entry;
    }
    let count_text = text_from_number(count);
    let text_counted = list_join_space([
      text,
      "-",
      count_text,
      "chapters so far",
    ]);
    let entry_counted = {
      app_fn,
      text: text_counted,
    };
    return entry_counted;
  }
  let applied = list_map(entries, entry_coverage_applied);
  return applied;
}
