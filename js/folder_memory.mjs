export function folder_memory() {
  "The folder whose contents live in memory rather than on a disk";
  "Writing here costs no disk wear and no waiting on a platter, and everything in it is gone after a restart - which is right for something that can be rebuilt from a commit whenever it is wanted";
  let folder = "/dev/shm";
  return folder;
}
