import { arguments_assert } from "./arguments_assert.mjs";
export async function url_blob_browser(url) {
  "$plain url";
  "The bytes found at an address, brought into the page as they are - a photo stored online, or one the page is already showing from this phone.";
  arguments_assert(arguments, 1);
  let response = await fetch(url);
  let blob = await response.blob();
  return blob;
}
