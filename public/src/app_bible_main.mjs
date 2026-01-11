import { app_bible_screens } from "../../../love/public/src/app_bible_screens.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { app_generic_refresh } from "../../../love/public/src/app_generic_refresh.mjs";
export async function app_bible_main(context) {
  marker("1");
  let screens = app_bible_screens();
  app_generic_refresh(context);
}
