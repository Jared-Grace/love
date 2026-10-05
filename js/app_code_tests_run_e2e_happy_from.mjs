import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_hash_complete_key } from "./app_code_hash_complete_key.mjs";
import { app_code_hash_complete_before_word } from "./app_code_hash_complete_before_word.mjs";
import { app_code_lesson_hash_key } from "./app_code_lesson_hash_key.mjs";
import { app_shared_url_suffix_stage_hash } from "./app_shared_url_suffix_stage_hash.mjs";
import { app_code } from "./app_code.mjs";
import { server_url } from "./server_url.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_code_happy_url_walked } from "./app_code_happy_url_walked.mjs";
export async function app_code_tests_run_e2e_happy_from(stage_name, lesson_id) {
  "$plain stage_name";
  "$plain lesson_id";
  "click through the code course from one lesson to the end as somebody who gets every question right, walking one named stage of the build on this machine, with every lesson before it marked finished by the link";
  "The whole walk starts at the first lesson and takes well over an hour; a lesson just written is checked by walking it and what follows it, which is minutes - asked for by the human 2026-10-05, to walk the quizzes of two new lessons by themselves. It walks the same screens the whole walk would from that lesson on, but reached by a link rather than by finishing every lesson before them, so it cannot stand in for the whole walk: a lesson that cannot be left, earlier in the course, is not seen here.";
  arguments_assert(arguments, 2);
  let complete = app_code_hash_complete_key();
  let before = app_code_hash_complete_before_word();
  let lesson = app_code_lesson_hash_key();
  let hash = {
    [complete]: before,
    [lesson]: lesson_id,
  };
  let path = await app_shared_url_suffix_stage_hash(app_code, stage_name, hash);
  let left = server_url();
  let url = text_combine(left, path);
  let walked = await app_code_happy_url_walked(url);
  return walked;
}
