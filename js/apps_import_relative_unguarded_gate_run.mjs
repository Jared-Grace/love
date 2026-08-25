import { arguments_assert } from "./arguments_assert.mjs";
import { apps_import_relative_unguarded } from "./apps_import_relative_unguarded.mjs";
import { property_get } from "./property_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_empty_is_assert_walked_generic } from "./list_empty_is_assert_walked_generic.mjs";
export async function apps_import_relative_unguarded_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: no page can walk into asking for a file by a name that nothing was ever written to.");
  ("Written because it had already happened twice, and both times the only thing that found it was somebody opening the page on a phone and watching it come up blank. Every gate was green: the file it asks for exists in this folder, its import is spelled correctly, and nothing anywhere is missing. The address only fails to exist in the one place it is used.");
  ("Both faults were the same mistake, and it is an easy one to make from the right motive. Asking for a file by joining its name into a path is how the build machine's half of a file is kept out of a page, and it works. Reaching for it from a branch a browser walks looks identical and is the opposite: a bundler that cannot see the address writes nothing to it, so the fetch finds nothing there and throws, and the page dies before it draws a line.");
  ("Measured against nothing rather than against a ratchet. There was nothing to grandfather - the sweep came back empty the day it was written, with every one of the nine places asking for a file by name either standing where no browser goes or asking first where it is running.");
  ("The mend is one of two, and which one depends on where the file is wanted. Where the branch really is the build machine's, ask where this is running before taking it. Where a browser is meant to walk it, write the address out in full: the bundler then sees it, still keeps it out of the page, and puts it somewhere the fetch can find.");
  let found = await apps_import_relative_unguarded();
  let walked = property_get(found, "walked");
  let offenders = property_get(found, "offenders");
  let f_name = fn_name("browser_is");
  let hint = text_combine_multiple([
    "a page can reach this function, and it asks for a file by joining a name into a path without ever asking where it is running - in a browser nothing was written to that address, so the fetch throws and the page stops. Either ask ",
    f_name,
    " first, if the branch is only ever the build machine's, or write the address out in full as an awaited import of the file itself, which keeps the weight out of the page and still lands somewhere the fetch can find",
  ]);
  let r = list_empty_is_assert_walked_generic(walked, offenders, hint);
  return r;
}
