export async function qa_snapshot_link(live, link) {
  "Points a name in the frozen copy at the living thing it stands for";
  "Replacing whatever is already there is what makes it safe to call again, so the copy can be brought up to date without first being taken apart";
  let fs = await import("fs");
  await fs.promises.rm(link, {
    force: true,
    recursive: true,
  });
  await fs.promises.symlink(live, link);
}
