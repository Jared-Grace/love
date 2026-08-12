export function g_coordinates_first_free(free_index, kept_index, candidates) {
  "the first of these tiles that somebody could step onto and would be welcome on, or nothing when none of them will do.";
  "Two questions, and a tile has to pass both. It has to be somewhere a person can stand at all - land, with nobody already on it - and it has to be outside the set being kept clear, which is how a tile that is about to be walked over is refused even though it is standing empty right now.";
  for (let candidate of candidates) {
    let key = g_coordinates_key(candidate);
    let standable = property_exists(free_index, key);
    let kept = property_exists(kept_index, key);
    let free = and(standable, not(kept));
    if (free) {
      let tile = property_get(free_index, key);
      return tile;
    }
  }
  return null;
}
