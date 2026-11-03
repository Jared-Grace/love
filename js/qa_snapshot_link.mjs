import { file_path_deciding_refuse } from "./file_path_deciding_refuse.mjs";
export async function qa_snapshot_link(live, link) {
  "Points a name in the frozen copy at the living thing it stands for";
  "Replacing whatever is already there is what makes it safe to call again, so the copy can be brought up to date without first being taken apart";
  "The fence is asked about the folder the link stands in and never about the link: the fence follows links, and a frozen copy's link to the living settings is meant to be there, so asking about the link refused every refresh of the copy. Removing a link takes away the link alone, so only its folder can make this a change to a deciding file, and a folder holding one is refused.";
  let fs = await import("fs");
  let path = await import("path");
  let folder = path.dirname(link);
  await file_path_deciding_refuse(folder);
  await fs.promises.rm(link, {
    force: true,
    recursive: true,
  });
  await fs.promises.symlink(live, link);
}
