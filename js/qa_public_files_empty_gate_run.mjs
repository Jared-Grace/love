import { arguments_assert } from "./arguments_assert.mjs";
import { folder_public_absolute } from "./folder_public_absolute.mjs";
import { folder_files_empty_walked } from "./folder_files_empty_walked.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is_assert_walked_generic } from "./list_empty_is_assert_walked_generic.mjs";
export async function qa_public_files_empty_gate_run() {
  "Gate: nothing in the folder that gets sent may have no bytes in it. Read-only.";
  "A file with nothing in it is served like any other file. The address answers, the request succeeds, and the person looking at it gets a white screen with no way to tell whether they are early or the thing is broken. It is worse than an address that is not there, because a missing address at least says so.";
  "Written because it had already happened. A page for the praying game was committed at nothing bytes, sent, and served a success and an empty screen for at least six days with every gate green. The one thing that noticed was a person opening the link.";
  "Measured against nothing rather than against a ratchet, and it passes on the day it was written: four hundred and seventy-seven files in the sent folder, not one of them empty. There is nothing to grandfather, and an empty page that has already reached the public is the last thing that should be written down as accepted.";
  "The whole folder rather than the pages, and every depth of it. A script with no bytes in it breaks the page that loads it just as completely, and reads as a working page until somebody presses something.";
  arguments_assert(arguments, 0);
  let folder = folder_public_absolute();
  let found = await folder_files_empty_walked(folder);
  let walked = property_get(found, "walked");
  let offenders = property_get(found, "offenders");
  let hint =
    "this file is in the folder that gets sent and has no bytes in it, so the address it stands at answers every request with a success and an empty screen - build the thing properly, or take the file out of the folder so the address says it is not there";
  let r = list_empty_is_assert_walked_generic(walked, offenders, hint);
  return r;
}
