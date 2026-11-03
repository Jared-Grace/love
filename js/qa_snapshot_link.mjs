import { file_path_deciding_refuse } from "./file_path_deciding_refuse.mjs";
export async function qa_snapshot_link(live, link) {
  "Points a name in the frozen copy at the living thing it stands for";
  "Replacing whatever is already there is what makes it safe to call again, so the copy can be brought up to date without first being taken apart";
  "The fence is asked about where the link stands and not where it points: this replaces the link itself, and a frozen copy's link to the living settings is meant to be there, so following it would refuse every refresh of the copy.";
  let fs = await import("fs");
  let path = await import("path");
  let v = path.dirname(link);
  let folder = await fs.promises.realpath(v);
  let v2 = path.basename(link);
  let standing = path.join(folder, v2);
  await file_path_deciding_refuse(standing);
  await fs.promises.rm(link, {
    force: true,
    recursive: true,
  });
  await fs.promises.symlink(live, link);
}
