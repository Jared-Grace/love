export async function atoms_unexampled_baseline_write() {
  "Rewrite the undemonstrated-atom baseline from what the instructions promise and the corpus never runs right now. For seeding the ratchet once, and for shrinking it after an example has been written - never for blessing a new gap, which is the one thing the gate exists to refuse.";
  let known = await atoms_unexampled();
  await atoms_unexampled_baseline_growth_assert(known);
  let baseline = {
    known,
  };
  let json = json_format_to(baseline);
  let path = atoms_unexampled_baseline_path();
  await file_overwrite(path, json);
  let r = known.length;
  return r;
}
