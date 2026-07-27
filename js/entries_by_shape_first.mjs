export function entries_by_shape_first(entries) {
  "Entries gathered under their shape, keeping the first one found for each. A repo already carrying one shape under two names is the ordinary case rather than an error, so a later one is passed over instead of refused.";
  let by_shape = {};
  for (let entry of entries) {
    let shape = property_get(entry, "shape");
    property_set_exists_not(by_shape, shape, entry);
  }
  return by_shape;
}
