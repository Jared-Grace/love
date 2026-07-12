import { app_code_examples } from "./app_code_examples.mjs";
import { app_code_quiz } from "./app_code_quiz.mjs";
import { app_code_home } from "./app_code_home.mjs";
export function app_code_screens() {
  let s = [app_code_home, app_code_quiz, app_code_examples];
  return s;
}
