import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { url_blob_browser } from "./url_blob_browser.mjs";
import { file_extension_from_type } from "./file_extension_from_type.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_blob_download } from "./html_blob_download.mjs";
export async function app_shared_picture_download(picture) {
  "$plain picture";
  "Saves the photo a picture on the page is showing to the phone, named photo with the ending its kind takes, as photo.jpg - whether the picture is one kept on this phone or one fetched from where it is stored, since either way the picture already knows its own address.";
  arguments_assert(arguments, 1);
  let element = html_component_element_get(picture);
  let blob = await url_blob_browser(element.src);
  let extension = file_extension_from_type(blob.type);
  let name = text_combine_multiple(["photo.", extension]);
  html_blob_download(blob, name);
}
