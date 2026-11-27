import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_photo_screen_buttons } from "./app_shared_photo_screen_buttons.mjs";
import { noop } from "./noop.mjs";
export function app_shared_photo_screen(picture_set) {
  "$plain picture_set";
  "Shows one photo on a screen of its own, as large as the window allows and never cropped, with a way back above it and a button under it saving it to the phone, and nothing more under that. picture_set is handed the empty picture and gives it its source, so a photo kept on this phone and one fetched from storage open the same way.";
  arguments_assert(arguments, 1);
  app_shared_photo_screen_buttons(picture_set, noop);
}
