import { app_bible_home_generic } from "./app_bible_home_generic.mjs";
import { noop } from "./noop.mjs";
export async function app_bible_home(context) {
  let fn = noop;
  await app_bible_home_generic(context, fn);
}
