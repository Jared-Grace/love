import { path_base } from "./path_base.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
export async function folder_copy_fresh(source, target, skipped) {
  "Makes a copy of a folder somewhere, throwing away whatever copy was sitting there before";
  "Starting from nothing is what makes the copy trustworthy: writing over an older copy leaves behind files that have since been deleted, and a question asked about a file that no longer exists gets answered wrongly rather than not at all";
  "The skipped names are matched against the last part of each path, so a name given once keeps that folder out wherever it turns up";
  "A file part way through being written is left out too, and that one needs no naming because it names itself. Such a file exists only for the moment between a write starting and the finished thing being moved onto its real name, so where several of us write in one folder without stopping there are always some, and every one of them is gone before the copying reaches it - which does not copy an old version, it throws, and takes the whole copy down with it over a file nobody wanted";
  let fs = await import("fs");
  await fs.promises.rm(target, {
    force: true,
    recursive: true,
  });
  function lambda(from) {
    let base = path_base(from);
    let wanted = list_includes_not(skipped, base);
    return wanted;
  }
  await fs.promises.cp(source, target, {
    recursive: true,
    filter: lambda,
  });
}
