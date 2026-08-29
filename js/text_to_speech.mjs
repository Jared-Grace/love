import { property_get } from "./property_get.mjs";
import { text_lines_working } from "./text_lines_working.mjs";
import { list_last } from "./list_last.mjs";
import { json_from_try } from "./json_from_try.mjs";
import { fn_name } from "./fn_name.mjs";
import { py_script_run_speech_cmd } from "./py_script_run_speech_cmd.mjs";
import { command_line } from "./command_line.mjs";
import { file_write } from "./file_write.mjs";
import { json_to } from "./json_to.mjs";
import { file_temp } from "./file_temp.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function text_to_speech(args) {
  "$plain args";
  "Speaks the chapters asked for and hands back what the engine says it did.";
  "★ WHAT THE ENGINE SAYS IS HANDED BACK, BECAUSE A RUN THAT STOPPED EARLY LOOKS EXACTLY LIKE ONE THAT FINISHED. The engine may refuse to start a chapter - the night it was given is over, or the machine has run low - and it says so on its own output. Thrown away, that leaves the caller counting folders to work out whether the night went well, and a chapter never attempted then reads as a chapter that failed.";
  "★ THE LAST LINE PRINTED IS THE ANSWER, BECAUSE WHAT COMES BEFORE IT BELONGS TO THE LIBRARIES. The engine prints its report once, at the end. Anything a loaded library decided to warn about sits above it and is not this function\x27s business.";
  "★ A REPORT THAT CANNOT BE READ COMES BACK AS NOTHING RATHER THAN THROWING. The recording is already on disk by then, so failing to parse a summary must not lose it - the caller is left knowing only what the disk knows, which is what it knew before this was handed back at all.";
  async function lambda(temp_path) {
    let contents = json_to(args);
    await file_write(temp_path, contents);
    let script_name = fn_name("text_to_speech");
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
  let spoken = await file_temp(lambda);
  return spoken;
}
