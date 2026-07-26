export async function function_delete_unused(s) {
  arguments_assert(arguments, 1);
  ("Deletes a fn only when nothing uses it. One name is a group of one, so the");
  ("question and the answer are the same as for a group — only the members differ.");
  let names = [s];
  let result = await function_delete_unused_among(s, names);
  return result;
}
