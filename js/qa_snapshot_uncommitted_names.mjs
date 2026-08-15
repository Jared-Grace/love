export function qa_snapshot_uncommitted_names() {
  "The things a frozen copy still needs that the repo deliberately never commits";
  "The installed packages are far larger than the repo and identical for every commit, so they are shared rather than duplicated";
  "The settings meant for this machine only are absent from any commit by design, and a gate that reads them finds nothing where it expects a file";
  "The development build very nearly joined this list on the fifteenth of August and did not, and the reason is worth keeping. It is made out of the code beside it and writes a fresh copy of itself into every commit any of us make, so it is the obvious next thing to stop committing - and the moment it stopped being committed, every large file in it became a large file the history carries and the present does not, which is what git_history_heavy_absent_gate_run refuses. That gate names paths and not functions, and a red gate naming no function is counted against every app, so the whole of it stopped deploying. It goes back to being committed until the history can be rewritten in the same change";
  "If it is ever added here, note that the gate on how big each page may get measures the built files by the path they sit at, so a frozen copy without them does not fail that gate, it dies on a missing file - the linking here is what it would need to keep working";
  let names = ["node_modules", ".claude/settings.local.json"];
  return names;
}
