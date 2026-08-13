export function app_code_hash_fields() {
  "Every part of a code app link that is checked before the app builds anything.";
  "All three words the app writes into a link are here, so the link it hands out is a link it can read back whole.";
  let lesson = app_code_hash_field_lesson();
  let screen = app_code_hash_field_screen();
  let quiz = app_code_hash_field_quiz();
  let fields = [lesson, screen, quiz];
  return fields;
}
