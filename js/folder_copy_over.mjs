import { file_path_temp_is } from "./file_path_temp_is.mjs";
import { path_base } from "./path_base.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
export async function folder_copy_over(source, target, skipped) {
  "Copies a folder somewhere, leaving in place whatever was already sitting there";
  "This is the copying on its own, with no throwing away in front of it. Its neighbour that starts from nothing is this plus one deletion, and the two are apart because the deletion is the whole of what a caller has to be trusted with: everything here only ever writes inside the place it was handed, so a caller that never wants anything removed can say so by asking for this one";
  "The skipped names are matched against the last part of each path, so a name given once keeps that folder out wherever it turns up";
  "A file part way through being written is left out too, and that one needs no naming because it names itself. Such a file exists only for the moment between a write starting and the finished thing being moved onto its real name, so where several of us write in one folder without stopping there are always some, and every one of them is gone before the copying reaches it - which does not copy an old version, it throws, and takes the whole copy down with it over a file nobody wanted";
  "Each file keeps the moment it was written rather than the moment it was copied, which is not a nicety - it is what lets anything remembered about a file still be about it afterwards. What is remembered here is remembered against when a file was last written, so a copy that stamps every file with the copy time says every file in the repo has just changed, and everything anybody had worked out about any of them is thrown away. Measured on the gate that asks the whole repo its questions: without this, every file was read and parsed again by every question, every run";
  let fs = await import("fs");
  function lambda(from) {
    let temp = file_path_temp_is(from);
    if (temp) {
      return false;
    }
    let base = path_base(from);
    let wanted = list_includes_not(skipped, base);
    return wanted;
  }
  await fs.promises.cp(source, target, {
    recursive: true,
    filter: lambda,
    preserveTimestamps: true,
  });
}
