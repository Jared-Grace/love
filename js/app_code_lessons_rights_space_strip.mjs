import { app_code_lessons_rights_space_carrying } from "./app_code_lessons_rights_space_carrying.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { function_lesson_rights_space_strip } from "./function_lesson_rights_space_strip.mjs";
import { list_size } from "./list_size.mjs";
export async function app_code_lessons_rights_space_strip() {
  "takes the leading space off the name-words of every code lesson still carrying one, finds its own set, and asks again afterwards to show none is left";
  "The set is found rather than given, because a list written into the caller drifts";
  "from what is actually there the moment a lesson is added - and this is the sweep";
  "whose whole point is that nobody could see which lessons had the space and which";
  "did not.";
  "Each lesson is committed as it lands, messaged with its own name, so the log";
  "reads as one named command per lesson rather than one sweep nobody can replay.";
  "Whatever was already noted is committed first, so no step files a peer's";
  "uncommitted work under its own name.";
  "Asking again at the end is the proof. A sweep that answers with a list of what it";
  "meant to do is not evidence it did any of it.";
  await ai_git_noted();
  let before = await app_code_lessons_rights_space_carrying();
  console.log("lessons carrying a leading space  " + list_size(before));
  for (let f_name of before) {
    let args = [f_name];
    await function_call_commit(function_lesson_rights_space_strip, args);
  }
  let after = await app_code_lessons_rights_space_carrying();
  console.log("lessons carrying one now  " + list_size(after));
  let told = {
    stripped: list_size(before),
    remaining: after,
  };
  return told;
}
