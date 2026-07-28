export async function atoms_unexampled_baseline_growth_assert(known) {
  "Refuse to record an atom the baseline did not already hold. A ratchet that can be rewritten in both directions is not a ratchet, and the rewrite would be reached for at exactly the moment the gate went red, which is the moment it was doing its job.";
  "The first seeding has no file to compare against and is allowed, and so is any rewrite that only drops names.";
  let path = atoms_unexampled_baseline_path();
  let exists = await file_exists(path);
  let first = not(exists);
  if (first) {
    return;
  }
  let recorded = await baseline_known_read(path);
  let change = names_versus_baseline(known, recorded);
  let added = property_get(change, "added");
  list_empty_is_assert_json(added, {
    hint: "these atoms are documented and undemonstrated now and were not before - write an example for each, or take the row out of the table, rather than recording the gap as known",
    added,
  });
}
