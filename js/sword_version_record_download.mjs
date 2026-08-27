import { property_get } from "./property_get.mjs";
import { sword_version_download } from "./sword_version_download.mjs";
export async function sword_version_record_download(sword) {
  "$plain sword";
  "Fetches onto this machine the bible one entry of the Sword list describes, and answers where its text was put.";
  "An entry says two separate things about where its bible lives - which folder the module unpacks under, and which address the package is fetched from - and the fetching wants both. Asking the entry for them here means the places that already hold an entry hand over the entry itself, and none of them has to know that the address is made of two parts rather than one.";
  "EVERY PLACE THAT READS A SWORD BIBLE FETCHES IT FIRST, not just the one that reads its chapters. A reader that went straight to the disk would answer differently depending on whether some earlier call in the same session had happened to fetch it, and a fresh machine would get a missing folder rather than a book list.";
  let sword_folder = property_get(sword, "sword_folder");
  let zip_url = property_get(sword, "zip_url");
  let module_folder = await sword_version_download(sword_folder, zip_url);
  return module_folder;
}
