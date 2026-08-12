import { app_bible } from "./app_bible.mjs";
import { app_shared_bible_home_generic } from "./app_shared_bible_home_generic.mjs";
import { noop } from "./noop.mjs";
export async function app_bible_home(context) {
  "verse mode: single verse with the sub-screen navigation framework; first noop is the g-only passage hook, second is the unused bar decorator";
  "the true at the end says this app has a whole-chapter reader, so the verse view offers the way into it. it is the only one of the four bible apps that does";
  await app_shared_bible_home_generic(context, noop, noop, app_bible, true);
}
