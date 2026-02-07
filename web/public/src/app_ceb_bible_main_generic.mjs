import { app_generic_refresh } from "../../../love/public/src/app_generic_refresh.mjs";
import { app_bible_main_generic_before } from "../../../love/public/src/app_bible_main_generic_before.mjs";
export function app_ceb_bible_main_generic(
  context,
  app_fn,
  screens,
  screen_home,
) {
  app_bible_main_generic_before(context, app_fn, screens, screen_home);
  app_generic_refresh(context);
}
