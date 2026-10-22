import { app_code_milestone_hash_key } from "./app_code_milestone_hash_key.mjs";
import { app_code_milestone_id_known_is } from "./app_code_milestone_id_known_is.mjs";
import { app_code_milestone_id_suggestions } from "./app_code_milestone_id_suggestions.mjs";
import { app_code_lesson_id_label } from "./app_code_lesson_id_label.mjs";
export function app_code_hash_field_milestone() {
  "The milestone field of a code app link, described in the shape the checking of links reads.";
  "Worded on its buttons the way a lesson's id is, its underscores read out as spaces, because the two are spelled alike.";
  let field = {
    key: app_code_milestone_hash_key(),
    name: "milestone",
    list_is: false,
    number_is: false,
    valid_is: app_code_milestone_id_known_is,
    suggestions: app_code_milestone_id_suggestions,
    label: app_code_lesson_id_label,
  };
  return field;
}
