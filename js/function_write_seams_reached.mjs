export async function function_write_seams_reached(f_name) {
  "Which of the disk-changing functions this one can reach through its imports. An empty answer is the useful one: running it costs nothing that cannot be taken back, so a name handed in to be looked at can be looked at.";
  let seams = functions_write_seams();
  let remembered = {};
  let reached = await function_seams_reached_memo(f_name, seams, remembered);
  return reached;
}
