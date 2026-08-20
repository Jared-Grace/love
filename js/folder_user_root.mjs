export function folder_user_root() {
  "The folder all of the human's own files sit under - pictures, downloads, audio, and the store this repo keeps its own data in.";
  "It is on this machine's own disk, which is the fact worth knowing about it. Nothing built from here can be carried away by a cable.";
  "It used to be on a drive that could be unplugged. A fault in one USB port took that drive off the bus in the middle of a write and put it into a loop of connecting and disconnecting about once a second, and for the half hour that lasted every path built from here led nowhere at all - not to an error, to an absence, which reads exactly like a store with nothing in it. A run measuring every bible on disk came out saying ninety-one of them were simply not there, and said it with an exit code of zero.";
  "So the files were copied here and this names where they sit now. The drive keeps the copy it already had, and keeping a copy somewhere the machine does not need is the whole of what a backup is - what made the old arrangement dangerous was not that the drive was removable but that the work depended on it while it was.";
  "The path is written out rather than worked out from where this file sits. The gates run inside a frozen copy of the tree, put somewhere else on disk, and a path derived from the copy's own place would point the store at a folder inside that copy - which exists, and is empty, and so answers every question with nothing rather than failing.";
  let folder = "/home/j/a/user";
  return folder;
}
