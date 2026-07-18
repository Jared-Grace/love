import { app_bible_home_generic } from "./app_bible_home_generic.mjs";
import { noop } from "./noop.mjs";
export async function app_bible_home(context) {
  ("verse mode: single verse with the sub-screen navigation framework; first noop is the g-only passage hook, second is the unused bar decorator");
  await app_bible_home_generic(context, noop, noop);
}
