import { equal_not } from "./equal_not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function file_executable_is(file_path) {
  arguments_assert(arguments, 1);
  ("Whether a file is marked as something that can be run at all, rather than merely sat there.");
  ("Asked of the marks on the file rather than by trying to run it, and asked as whether anyone at all may run it rather than whether whoever is asking may. The things that run such a file are usually the machine's own, running as its owner, and its owner may run a file that only its owner is allowed to run - so asking on behalf of the person sitting at the keyboard would answer no about a file that runs perfectly well every night.");
  ("Worth asking at all because losing this mark is silent in both directions. A file that has lost it is still there, still says everything it always said, and is still found by anything looking for it - and the thing that was supposed to run it walks straight past without a word. What runs the scripts in a folder skips the ones without this mark and reports nothing, so a handler that has been copied rather than moved, or restored from an archive that did not keep the marks, is installed and dead at the same time.");
  let fs = await import("fs");
  let stat = await fs.promises.stat(file_path);
  let anyone = stat.mode & 0o111;
  let r = equal_not(anyone, 0);
  return r;
}
