export async function function_callee_read_only_assert(callee_name) {
  "A name is given on the command line and then run, so the name decides what happens. From Claude's seam it is accepted only when running it can neither become a command line nor change the disk - which is the difference between asking what something answers and telling it to do something.";
  "Two seams are asked about rather than one because they fail differently and the arity of the callee hides both. A function taking nothing looks harmless and may still deploy, and another taking nothing looks harmless and may still rewrite a file. Neither is visible in a parameter list.";
  "The human's own terminal accepts every name, for the same reason as the other seam fences: the call was typed by the person who will see what it does.";
  let seam = process_ai_seam_is();
  let human = not(seam);
  if (human) {
    return;
  }
  let commands = await function_command_seams_reached(callee_name);
  let writes = await function_write_seams_reached(callee_name);
  let reached = list_concat(commands, writes);
  let clean = list_empty_is(reached);
  assert_json(clean, {
    hint: "this name is to be looked at, not told to act - it reaches something that runs a command or changes the disk",
    callee_name,
    commands,
    writes,
  });
}
