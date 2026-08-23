import { arguments_assert } from "./arguments_assert.mjs";
import { door43_version_download } from "./door43_version_download.mjs";
import { property_get } from "./property_get.mjs";
export async function door43_version_record_download(door) {
  arguments_assert(arguments, 1);
  ("$plain door");
  ("Fetches onto this machine the bible one entry of the Door43 list describes, and answers where it was put.");
  ("An entry says three separate things about where its bible lives - who publishes it, which folder it is in, and which release was read - and the fetching wants all three. Asking the entry for them here means the places that already hold an entry hand over the entry itself, and none of them has to know that the address is made of three parts rather than one.");
  ("EVERY PLACE THAT READS A DOOR43 BIBLE FETCHES IT FIRST, not just the one that reads its chapters. Asking such a bible for its books used to read straight off the disk, so the answer depended on whether some earlier call in the same session had happened to fetch it - a fresh machine got a missing folder rather than a book list, and the same question answered differently on Tuesday than on Monday.");
  let org = property_get(door, "org");
  let door43_folder = property_get(door, "door43_folder");
  let tag = property_get(door, "tag");
  let file_path = await door43_version_download(org, door43_folder, tag);
  return file_path;
}
