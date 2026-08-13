export function app_code_hash_field_lesson() {
  "The lesson field of a code app link, described in the shape the checking of links reads.";
  "This is the word a shared link is mostly made of - somebody sends the lesson they are on to somebody learning beside them - so it is the word most often retyped by hand off a screen, and the one most worth catching.";
  let field = {
    key: app_code_lesson_hash_key(),
    name: "lesson",
    list_is: false,
    valid_is: app_code_lesson_id_known_is,
    suggestions: app_code_lesson_id_suggestions,
    label: app_code_lesson_id_label,
  };
  return field;
}
