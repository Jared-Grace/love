import { arguments_assert } from "./arguments_assert.mjs";
import { html_input_file_camera } from "./html_input_file_camera.mjs";
import { app_shared_button_wide_input } from "./app_shared_button_wide_input.mjs";
export function app_shared_button_wide_camera(parent, text, on_file) {
  "$plain parent";
  "$plain text";
  "$plain on_file";
  "A wide button looking like every other button in the apps that opens the phone's camera and hands the photo taken to whoever asked.";
  arguments_assert(arguments, 3);
  let input = html_input_file_camera(parent, on_file);
  let button = app_shared_button_wide_input(parent, text, input);
  return button;
}
