import { arguments_assert } from "./arguments_assert.mjs";
export function html_blob_download(blob, name) {
  "$plain blob";
  "$plain name";
  "Saves bytes held by the page to the phone or computer as a file named name, the same way pressing a download link does - into Downloads on a phone, or wherever the browser is set to put files.";
  "The address made for the bytes is let go straight after, once the browser has had time to start saving, so nothing is held after the download.";
  arguments_assert(arguments, 2);
  let address = URL.createObjectURL(blob);
  let link = document.createElement("a");
  link.href = address;
  link.download = name;
  document.body.appendChild(link);
  link.click();
  link.remove();
  function release() {
    URL.revokeObjectURL(address);
  }
  setTimeout(release, 10000);
}
