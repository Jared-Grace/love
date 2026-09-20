import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import fs from "fs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
export function folder_current_logical() {
  "The folder this process was started in, spelled the way the shell spelled it - with the links not yet followed - when that spelling can be shown to mean the same place; where it cannot, the folder as it is.";
  "A person or an editor is told a folder, stands in the one they were told, and means the spelling they were given: ../ out of /home/j/***REMOVED***/repos/love should be /home/j/***REMOVED***/repos, not the folder the link points through to. The kernel forgets the given spelling when it follows a link, so the shell's own record of it - the PWD value it passes on - is the only thing that still holds it, and trusting that record costs a check that it still names the same place. When the check fails the shell spelling is stale or foreign, and the folder as it is answers.";
  let logical = process.env.PWD || "";
  let true_here = folder_current_absolute();
  let b = logical.startsWith("/");
  if (not(b)) {
    return true_here;
  }
  let same = null;
  try {
    let left = fs.realpathSync(logical);
    same = equal(left, true_here);
  } catch (e) {
    same = false;
  }
  if (same) {
    return logical;
  }
  return true_here;
}
