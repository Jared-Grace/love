import { app_bible_shared_initialize_before } from "../../../love/public/src/app_bible_shared_initialize_before.mjs";
import { app_shared_refresh } from "../../../love/public/src/app_shared_refresh.mjs";
export async function app_bible_shared_initialize(
  context,
  screen_home,
  screens,
  app_fn,
) {
  app_bible_shared_initialize_before(context, screen_home, app_fn, screens);
  await app_shared_refresh(context);
}
