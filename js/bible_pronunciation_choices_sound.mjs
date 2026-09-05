import { arguments_assert } from "./arguments_assert.mjs";
import { folder_web_dev } from "./folder_web_dev.mjs";
import { path_join } from "./path_join.mjs";
import { bible_pronunciation_choices } from "./bible_pronunciation_choices.mjs";
import { fn_name } from "./fn_name.mjs";
import { py_script_speech_json_report } from "./py_script_speech_json_report.mjs";
export async function bible_pronunciation_choices_sound() {
  "Speaks both sayings of each name still in question into the dev sound folder, so the pair can be listened to one after the other on a phone.";
  "★ IT IS WRITTEN WHERE THE DEV SERVER ALREADY SERVES, WHICH IS THE WHOLE OF WHY THE PAIR CAN BE HEARD AT ALL. The person deciding is at a phone, not at this machine, so a file written anywhere else is a file nobody can play. The folder beside it holds the earlier listening tests for the same reason.";
  "★ ONE PROCESS SPEAKS BOTH SAYINGS, BECAUSE THE VOICE MODEL IS A THIRD OF A GIGABYTE. Reading it once and writing the name into the reader's dictionary between the two sayings costs one load; asking twice would cost fourteen.";
  arguments_assert(arguments, 0);
  let dev = folder_web_dev();
  let folder = path_join([dev, "sound_test"]);
  let choices = bible_pronunciation_choices();
  let script_name = fn_name("bible_pronunciation_choices_sound");
  let args = {
    folder,
    threads: 4,
    choices,
  };
  let reported = await py_script_speech_json_report(script_name, args);
  return reported;
}
