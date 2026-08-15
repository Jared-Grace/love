export function folder_drive_removable() {
  "The drive that can be unplugged, where the human's own files and a bare copy of every repository are kept.";
  "Spelled here and nowhere else. Four separate places used to write it out, so plugging the drive in somewhere it is named differently meant finding all four - and a path built from a stale one does not complain, it simply finds nothing, which reads exactly like a drive that is out.";
  "Written down rather than asked of the machine, because unlike a home folder this is a choice rather than a fact: which drive, and what it is called. When it has to differ between machines, this is the single place that learns to ask.";
  let folder = "/media/j/JPM";
  return folder;
}
