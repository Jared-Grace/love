import { app_bible_main_generic_before } from "../../../love/public/src/app_bible_main_generic_before.mjs";
import { app_generic_refresh } from "../../../love/public/src/app_generic_refresh.mjs";
export function app_bible_main_generic(context, app_fn, screens) {
  app_bible_main_generic_before(context, app_fn, screens);
  app_generic_refresh(context);
}
