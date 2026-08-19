import { folder_copy_over } from "./folder_copy_over.mjs";
export async function folder_copy_fresh(source, target, skipped) {
  "Makes a copy of a folder somewhere, throwing away whatever copy was sitting there before";
  "Starting from nothing is what makes the copy trustworthy: writing over an older copy leaves behind files that have since been deleted, and a question asked about a file that no longer exists gets answered wrongly rather than not at all";
  "The throwing away is the whole of what this adds, and it is why the copying itself lives next door under its own name. A caller that only ever wants files put somewhere should not have to be trusted with a deletion whose reach is decided by an argument";
  let fs = await import("fs");
  await fs.promises.rm(target, {
    force: true,
    recursive: true,
  });
  await folder_copy_over(source, target, skipped);
}
