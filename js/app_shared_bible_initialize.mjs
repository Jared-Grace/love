import { object_merge_match } from "./object_merge_match.mjs";
import { app_shared_contact_button_column_context } from "./app_shared_contact_button_column_context.mjs";
import { app_shared_bible_initialize_before } from "./app_shared_bible_initialize_before.mjs";
import { app_shared_refresh } from "./app_shared_refresh.mjs";
export async function app_shared_bible_initialize(
  context,
  app_fn,
  screens,
  screen_home,
) {
  app_shared_bible_initialize_before(context, app_fn, screens, screen_home);
  ("every screen in this family ends with a way to reach the developer, re-added after each render because navigating clears the page");
  ("Re-added after each render is what the line above says, and refusing a property already there is the one thing that cannot be squared with it. It is the same function every time, so the two agree and nothing is lost by saying so.");
  object_merge_match(context, {
    after_refresh: app_shared_contact_button_column_context,
  });
  await app_shared_refresh(context);
}
