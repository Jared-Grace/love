export async function folder_machine_temp() {
  "The scratch folder belonging to the machine itself, which the operating system empties on its own.";
  "The other temp folder around here sits under the human's own files, and those are on a drive that can be unplugged. Writing a working copy there is fine for something small and being read back the same minute, and wrong for anything that has to survive the next few minutes and cannot quietly go somewhere else: when the drive is away, a path built under it is made fresh and empty rather than failing, so the work lands nowhere anyone will look.";
  "Asked of the operating system rather than spelled out, because the answer is not the same on every machine and a spelled one is a path that is right until it is not.";
  let os = await import("os");
  let folder = os.tmpdir();
  return folder;
}
