import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_photos_draw_buttons } from "./app_shared_photos_draw_buttons.mjs";
import { noop } from "./noop.mjs";
export function app_shared_photos_draw(parent, photos_holder) {
  "$plain parent";
  "$plain photos_holder";
  "The photos of whatever holds them as small squares side by side, cropped to fill the square; pressing one opens it whole on a screen of its own, which can save it to the phone and nothing more. Each photo holds either the picture kept on this phone, under file, or the address it is stored at, under url.";
  "Hands back the function that puts one more picture, kept on this phone, at the end of the row, so a photo just taken shows at once.";
  arguments_assert(arguments, 2);
  let file_show = app_shared_photos_draw_buttons(parent, photos_holder, noop);
  return file_show;
}
