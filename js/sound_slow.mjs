import { json_to } from "./json_to.mjs";
import { file_write } from "./file_write.mjs";
import { fn_name } from "./fn_name.mjs";
import { py_script_run_speech_cmd } from "./py_script_run_speech_cmd.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { command_line } from "./command_line.mjs";
import { property_get } from "./property_get.mjs";
import { text_lines_working } from "./text_lines_working.mjs";
import { list_last } from "./list_last.mjs";
import { json_from } from "./json_from.mjs";
import { catch_null } from "./catch_null.mjs";
import { file_temp } from "./file_temp.mjs";
export async function sound_slow(args) {
  "$plain args";
  "Makes a slower copy of every recording asked about, and hands back what the slower says it did.";
  "★ WHAT THE SLOWER SAYS IS HANDED BACK, BECAUSE A RUN THAT STOPPED EARLY LOOKS EXACTLY LIKE ONE THAT FINISHED. It skips anything already slowed, so a run interrupted halfway and a run that had nothing to do both leave the folder looking finished. Only its own count says which happened.";
  "★ THE LAST LINE PRINTED IS THE ANSWER, BECAUSE WHAT COMES BEFORE IT BELONGS TO THE LIBRARIES AND TO THE RUNNING COUNT. It prints a line per voice as it goes, so a run of thousands of files is not silence for a quarter of an hour, and it prints its report once at the end.";
  "★ A REPORT THAT CANNOT BE READ COMES BACK AS NOTHING RATHER THAN THROWING. The slow copies are already on disk by then, so failing to parse a summary must not lose them - the caller is left knowing only what the disk knows, which is what it knew before this was handed back at all.";
  async function lambda(temp_path) {
    let contents = json_to(args);
    await file_write(temp_path, contents);
    let script_name = fn_name("sound_slow");
    let v = py_script_run_speech_cmd(script_name);
    let c = text_combine_multiple([v, " ", temp_path]);
    let ran = await command_line(c);
    let printed = property_get(ran, "stdout");
    let lines = text_lines_working(printed);
    let last = list_last(lines);
    function report_read() {
      let read = json_from(last);
      return read;
    }
    let report = catch_null(report_read);
    return report;
  }
  let slowed = await file_temp(lambda);
  return slowed;
}
