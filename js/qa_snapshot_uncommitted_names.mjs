export function qa_snapshot_uncommitted_names() {
  "The things a frozen copy still needs that the repo deliberately never commits";
  "The installed packages are far larger than the repo and identical for every commit, so they are shared rather than duplicated";
  "The settings meant for this machine only are absent from any commit by design, and a gate that reads them finds nothing where it expects a file";
  let names = ["node_modules", ".claude/settings.local.json"];
  return names;
}
