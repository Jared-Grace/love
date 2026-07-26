export function memory_index_size_ceiling() {
  "How many bytes the whole memory index may be. Past this the loader stops part-way and says so in a warning nobody is watching for, and the sessions that follow recall an index with a piece missing - notes that exist, are indexed, and are never found.";
  "Set below the loader's own limit rather than at it, so the check fires while there is still room to act. A gate that goes red at the same moment the damage starts leaves nothing between the two.";
  let bytes = 24000;
  return bytes;
}
