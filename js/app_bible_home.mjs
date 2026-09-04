import { app_shared_bible_home_generic } from "./app_shared_bible_home_generic.mjs";
import { noop } from "./noop.mjs";
import { app_bible } from "./app_bible.mjs";
import { app_bible_pictures_verse_button } from "./app_bible_pictures_verse_button.mjs";
export async function app_bible_home(context) {
  "verse mode: single verse with the sub-screen navigation framework; the first noop is the g-only passage hook and the second is the bar decorator, which this app asks for nothing extra in";
  "the true at the end says this app has a whole-chapter reader, so the verse view offers the way into it. it is the only one of the four bible apps that does";
  "the way into the picture Bible goes in after the screen has answered rather than while it is being drawn, because it belongs in the row of buttons under the verse and that row is part of the answer. drawn while the bar was being built it could only go in the bar, which is where it used to be";
  let v = await app_shared_bible_home_generic(
    context,
    noop,
    noop,
    app_bible,
    true,
  );
  app_bible_pictures_verse_button(v);
}
