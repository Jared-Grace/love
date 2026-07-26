export async function markers_unresolved(marker_names) {
  "Every mark whose promise no longer holds - either the mark itself is not a function, or the function it is named after is gone.";
  "Renaming the reader is what this is watching for. Nothing links a mark to its reader except the spelling of its name, so a rename repoints every caller and leaves the mark behind pointing at a name that no longer exists - and a mark nobody can follow is worse than none, because it still reads like an answer.";
  let unresolved = [];
  for (let marker of marker_names) {
    let marker_lives = await function_exists(marker);
    if (!marker_lives) {
      list_add(unresolved, {
        marker,
        missing: marker,
      });
      continue;
    }
    let reader = marker_reader_name(marker);
    let reader_lives = await function_exists(reader);
    if (!reader_lives) {
      list_add(unresolved, {
        marker,
        missing: reader,
      });
    }
  }
  return unresolved;
}
