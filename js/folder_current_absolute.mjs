export function folder_current_absolute() {
  "Where we are, spelled from the root so it still means the same thing read from somewhere else";
  "A folder named as a dot is only meaningful to whoever is standing in it, and a link written into another folder is read from where the link sits";
  let folder = process.cwd();
  return folder;
}
