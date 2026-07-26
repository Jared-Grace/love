export async function functions_duplicates_baseline_write() {
  "Rewrite the duplicate ratchet from what the repo carries right now. For seeding it once, and for shrinking it after a pair has been collapsed onto one name - never for blessing a new twin, which is the one thing the gate exists to refuse.";
  let known = await functions_duplicates_names();
  await functions_duplicates_baseline_growth_assert(known);
  let baseline = {
    known,
  };
  let json = json_format_to(baseline);
  let path = duplicates_baseline_path();
  await file_overwrite(path, json);
  let r = known.length;
  return r;
}
