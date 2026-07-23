import { app_bible_shared_initialize_before } from "./app_bible_shared_initialize_before.mjs";
import { app_shared_refresh } from "./app_shared_refresh.mjs";
export async function app_bible_shared_initialize(
  context,
  app_fn,
  screens,
  screen_home,
) {
  app_bible_shared_initialize_before(context, app_fn, screens, screen_home);
  "every screen in this family ends with a way to reach the developer, re-added after each render because navigating clears the page";
  object_merge(context, {
    after_refresh: app_shared_contact_button_context,
  });
  await app_shared_refresh(context);
}
