import { app_bible_shared_initialize } from "../../../love/public/src/app_bible_shared_initialize.mjs";
export async function app_ceb_bible_main_generic(
  context,
  app_fn,
  screens,
  screen_home,
) {
  await app_bible_shared_initialize(context, app_fn, screens, screen_home);
}
