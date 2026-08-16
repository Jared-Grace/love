import { ebible_licence_unknown } from "./ebible_licence_unknown.mjs";
import { ebible_version_copyright_read } from "./ebible_version_copyright_read.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export async function ebible_version_licence(bible_folder) {
  "$plain bible_folder";
  "The terms one downloaded translation is offered on.";
  "A translation that is not on this machine is answered as unread, which is the honest answer: nothing here has seen its page.";
  let read = await ebible_version_copyright_read(bible_folder);
  let missing = null_is(read);
  if (missing) {
    let unread = ebible_licence_unknown();
    return unread;
  }
  let licence = property_get(read, "licence");
  return licence;
}
