import { app_bible_home_generic } from "../../../love/public/src/app_bible_home_generic.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
export async function app_bible_home(context) {
  let fn = noop;
  await app_bible_home_generic(context, fn);
}
