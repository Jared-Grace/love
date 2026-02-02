import { app_a_functionize_end_choice_add } from "../../../love/public/src/app_a_functionize_end_choice_add.mjs";
import { app_a_functionize_start_choice_add } from "../../../love/public/src/app_a_functionize_start_choice_add.mjs";
export function app_a_functionize_choices_add(choices, a, o3) {
  app_a_functionize_start_choice_add(choices, a, o3);
  app_a_functionize_end_choice_add(a, choices, o3);
}
