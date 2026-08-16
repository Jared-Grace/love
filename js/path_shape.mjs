import { path_extension } from "./path_extension.mjs";
import { equal } from "./equal.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_filter } from "./list_filter.mjs";
import { greater_than } from "./greater_than.mjs";
export function path_shape(path) {
  "The kind of thing a path points at rather than the thing itself: the folder it starts in and the ending of its name, with everything that varies between two paths of the same kind taken out.";
  "Counting paths is counting nothing, because almost every path is written once. What is worth counting is what sort of place is being reached for - the repo's own code, its notes, its data, somewhere outside it altogether - and that is what survives when the middle of the path is dropped.";
  "A word with no folder and no ending is left exactly as it is. That word is a flag or a plain name rather than a path, and shortening it would only turn several different things into one.";
  arguments_assert(arguments, 1);
  let extension = path_extension(path);
  let absolute = path.startsWith("/");
  let parts = path.split("/");
  function said(part) {
    let b = greater_than(part.length, 0);
    return b;
  }
  let named = list_filter(parts, said);
  let deep = greater_than(named.length, 1);
  if (equal(deep, false)) {
    let flat = equal(extension, "");
    if (flat) {
      return path;
    }
    let ending = text_combine_multiple(["*", extension]);
    return ending;
  }
  let folder = named[0];
  let lead = absolute ? "/" : "";
  let shape = text_combine_multiple([lead, folder, "/*", extension]);
  return shape;
}
