import { app_bible_pictures_button } from "./app_bible_pictures_button.mjs";
import { app_bible } from "./app_bible.mjs";
import { app_shared_bible_home_generic } from "./app_shared_bible_home_generic.mjs";
import { noop } from "./noop.mjs";
export async function app_bible_home(context) {
  "verse mode: single verse with the sub-screen navigation framework; the noop is the g-only passage hook; the bar decorator after it puts the way into the picture Bible in the bar when this chapter is one of the drawn ones";
  "the true at the end says this app has a whole-chapter reader, so the verse view offers the way into it. it is the only one of the four bible apps that does";
  await app_shared_bible_home_generic(
    context,
    noop,
    app_bible_pictures_bar_button,
    app_bible,
    true,
  );
}
