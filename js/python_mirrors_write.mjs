import { arguments_assert } from "./arguments_assert.mjs";
import { python_mirrors } from "./python_mirrors.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { python_mirror_write } from "./python_mirror_write.mjs";
export async function python_mirrors_write() {
  arguments_assert(arguments, 0);
  ("Writes every mirrored list the guard imports. It finds its own set rather than");
  ("taking one, so a mirror added to the list is regenerated without anybody having");
  ("to remember it here.");
  let mirrors = python_mirrors();
  let written = await list_map_async(mirrors, python_mirror_write);
  return written;
}
