import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_history_entries } from "./app_shared_bible_history_entries.mjs";
import { app_shared_bible_history_render } from "./app_shared_bible_history_render.mjs";
export async function app_shared_bible_history_fill(
  container,
  context,
  open_entry,
) {
  "Fill a waiting box with the readings this app has been left on, each one a way back into it.";
  "Held apart from the two things that open it because they differ in nothing but their frame and their way out - a screen for the verse reader, a panel drawn in place for the chapter reader. What goes in the box is the same list either way, and a list written twice is a list that comes to differ.";
  arguments_assert(arguments, 3);
  let entries = await app_shared_bible_history_entries(context);
  app_shared_bible_history_render(container, entries, open_entry);
}
