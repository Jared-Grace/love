import { app_bible_home_generic } from "../../../love/public/src/app_bible_home_generic.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_bible_home(context) {
  marker("1");
  let fn = noop;
  await app_bible_home_generic(context, fn);
}
