export function folder_backups() {
  "Where a copy of a file is kept before something is about to overwrite it, said as the path from the repo's own root.";
  "Inside the data folder rather than beside it, because a kept copy of a data file is data - one of the same files, at an earlier moment. Sitting at the root it read as a ninth thing the repo is made of, which is the one thing it is not.";
  let f = "data/backups";
  return f;
}
