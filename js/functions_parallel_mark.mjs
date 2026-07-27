export async function functions_parallel_mark(f_names_comma) {
  "Mark a whole group of same-shaped functions as alike on purpose, so nothing tries to collapse them and the ratchet stops holding them.";
  "It takes the group rather than one name because the answer is only true of a group. One function alone cannot say a pair was meant, so a half-marked group is read as the work it looked like - which is right, and is exactly why marking one at a time is the wrong shape for this.";
  "Each mark is committed as it lands, under its own name and its own argument, so a sweep by somebody else can take at most one step rather than the whole run.";
  arguments_assert(arguments, 1);
  let f_names = text_split_comma(f_names_comma);
  list_multiple_is_assert_json(f_names, {
    f_names,
    hint: "one name cannot be alike on purpose with anything - which group was meant?",
  });
  await ai_git_noted();
  let marked = [];
  for (let f_name of f_names) {
    let one = [f_name];
    let done = await function_call_commit(function_parallel_mark, one);
    list_add(marked, done);
  }
  return marked;
}
