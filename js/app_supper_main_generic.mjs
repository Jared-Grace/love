import { object_merge } from "./object_merge.mjs";
import { app_supper_screens } from "./app_supper_screens.mjs";
import { app_shared_bible_initialize } from "./app_shared_bible_initialize.mjs";
export async function app_supper_main_generic(
  app_fn,
  home_fn,
  default_chosen,
  context,
) {
  object_merge(context, {
    supper_default_chosen: default_chosen,
  });
  let screens = app_supper_screens(home_fn);
  await app_shared_bible_initialize(context, app_fn, screens, home_fn);
}
