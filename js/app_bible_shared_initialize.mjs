import { app_bible_shared_initialize_before } from "./app_bible_shared_initialize_before.mjs";
import { app_shared_refresh } from "./app_shared_refresh.mjs";
export async function app_bible_shared_initialize(
  context,
  app_fn,
  screens,
  screen_home,
) {
  app_bible_shared_initialize_before(context, app_fn, screens, screen_home);
  await app_shared_refresh(context);
}
