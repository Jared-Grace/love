import os from "os";
export function folder_home() {
  "The human's own home folder, asked of the machine rather than written down.";
  let home = os.homedir();
  return home;
}
