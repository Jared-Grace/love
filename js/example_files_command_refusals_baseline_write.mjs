export async function example_files_command_refusals_baseline_write() {
  "rewrite the ratchet on commands the corpus never proves refuse from what the corpus holds right now. For seeding it once, and for shrinking it after a refusal example has been written - never for blessing a new command that arrives without one, which is the one thing the gate exists to refuse, and the refusal is enforced here rather than left to whoever runs it.";
  let known = await example_files_command_refusals_missing();
  let path = example_files_command_refusals_baseline_path();
  let hint = example_files_command_refusals_hint(
    "these commands are run by the corpus without any example proving they refuse anything, and the record does not hold them, so this rewrite would bless them - write the refusal down instead, and see ",
  );
  await baseline_growth_assert_generic(
    known,
    path,
    names_versus_baseline,
    hint,
  );
  let r = await baseline_known_write(known, path);
  return r;
}
