export function app_code_lesson_id_label(lesson_id) {
  "How a lesson is worded on a button offering it to a reader whose link named a lesson that does not exist.";
  "The underscores holding the id together are what a link needs and not what a reader needs, so they are read out as the spaces they stand for. Nothing else is changed: the words are the lesson's own, so the reader can match the button against the address they are looking at.";
  let said = text_replace(lesson_id, "_", " ");
  return said;
}
