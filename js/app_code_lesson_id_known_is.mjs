export function app_code_lesson_id_known_is(lesson_id) {
  "Whether a word standing where a lesson goes in a link names a lesson the code app teaches.";
  let ids = app_code_lesson_ids();
  let known = list_includes(ids, lesson_id);
  return known;
}
