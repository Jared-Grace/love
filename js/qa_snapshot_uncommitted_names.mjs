export function qa_snapshot_uncommitted_names() {
  "The things a frozen copy still needs that the repo deliberately never commits";
  "The installed packages are far larger than the repo and identical for every commit, so they are shared rather than duplicated";
  "The settings meant for this machine only are absent from any commit by design, and a gate that reads them finds nothing where it expects a file";
  "The development build stopped being committed on the fifteenth of August, because it is made out of the code beside it and was writing a fresh copy of itself into every commit any of us made - ninety three hundredths of what that folder weighed in the history was a build that had already been replaced. It has to be here rather than simply gone, because the gate on how big each page may get measures the built files and asks for them by the path they sit at, so a copy without them does not pass the gate, it dies on a missing file";
  "It is shared rather than frozen for the same reason the installed packages are: it is not the code being asked about, it is what the code was last built into, and freezing a copy of it per commit would only put an older build in front of the gate";
  let names = ["node_modules", ".claude/settings.local.json", "public/dev"];
  return names;
}
