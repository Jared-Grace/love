import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { app_shared_bible_history_empty_text } from "./app_shared_bible_history_empty_text.mjs";
import { app_shared_text_quiet } from "./app_shared_text_quiet.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
export function app_shared_bible_history_render(
  container,
  entries,
  open_entry,
) {
  "The single source for what the remembered readings look like: one way back in for each, newest first, each named by the passage it is. Each reader supplies only how an entry is opened - a screen for the verse reader, an in-place panel for the chapter reader.";
  "Newest first is the order they arrive in, not an ordering done here. The reading somebody is coming back for is nearly always the last one they left, so the list is already pointing at it before they read a word of it.";
  arguments_assert(arguments, 3);
  let none = list_empty_is(entries);
  if (none) {
    let empty_text = app_shared_bible_history_empty_text();
    app_shared_text_quiet(container, empty_text);
    return;
  }
  ("Each reading gets a line to itself. A passage name is short, so buttons of the ordinary width sit several to a row, and two readings that stood side by side read as one longer name - John 3:16 next to John 2:5-9 came out as a single run of writing with no break in it. A list of places is read down, one glance per line, so each one fills its line.");
  function entry_button(entry) {
    let reference = property_get(entry, "reference");
    async function on_entry() {
      await open_entry(entry);
    }
    app_shared_button_wide(container, reference, on_entry);
  }
  each(entries, entry_button);
}
