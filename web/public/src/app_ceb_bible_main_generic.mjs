import { app_shared_refresh } from "../../../love/public/src/app_shared_refresh.mjs";
import { app_bible_main_generic_before } from "../../../love/public/src/app_bible_main_generic_before.mjs";
export async function app_ceb_bible_main_generic(
  context,
  app_fn,
  screens,
  screen_home,
) {
  app_bible_main_generic_before(context, app_fn, screens, screen_home);
  await app_shared_refresh(context);
}
