import { arguments_assert } from "./arguments_assert.mjs";
import { uuid_browser } from "./uuid_browser.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function file_name_random_browser(file) {
  "$plain file";
  "A fresh random name for a file chosen in a browser, keeping the kind of file it is - so two chosen in one moment cannot land on one address, and a photo is still named as a photo.";
  arguments_assert(arguments, 1);
  let extension = file.name.split(".").pop();
  let built = uuid_browser();
  let name = text_combine_multiple([built, ".", extension]);
  return name;
}
