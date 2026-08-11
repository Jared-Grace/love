export async function functions_app_import_advice(pairs) {
  arguments_assert(arguments, 1);
  ("What to do about each app-owned name in a run of reported lines, written out as one line per name for somebody a gate has just stopped.");
  ("A record of pairs is a worklist with no advice on it, so every line of it is the same piece of reading done again by hand. Doing that reading is a command already; this is that command's answer said in the place where somebody is actually asking the question.");
  ("This is why a gate is handed a way to make its complaint rather than the complaint itself. The reading costs a search of the whole repo for each name, which is far too much to spend on a gate that is going to pass, and nothing at all when it does.");
  let verdicts = await functions_app_import_verdicts_pairs(pairs);
  let lines = list_map(verdicts, function_app_import_verdict_line);
  let r = list_join_newline(lines);
  return r;
}
