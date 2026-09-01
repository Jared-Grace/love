import { json_to } from "./json_to.mjs";
import { file_write } from "./file_write.mjs";
import { py_script_run_speech_cmd } from "./py_script_run_speech_cmd.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { command_line } from "./command_line.mjs";
import { property_get } from "./property_get.mjs";
import { text_lines_working } from "./text_lines_working.mjs";
import { list_last } from "./list_last.mjs";
import { json_from } from "./json_from.mjs";
import { catch_null } from "./catch_null.mjs";
import { file_temp } from "./file_temp.mjs";
export async function py_script_speech_json_report(script_name, args) {
  "$plain script_name";
  "$plain args";
  "Runs one of this repo's python scripts under the python that can speak, hands it these arguments as a file, and reads back the one report it prints.";
  "★ THE LAST LINE PRINTED IS THE ANSWER, BECAUSE WHAT COMES BEFORE IT BELONGS TO THE LIBRARIES. A script prints its report once, at the end. Anything a loaded library decided to warn about sits above it and is not this function's business.";
  "★ A REPORT THAT CANNOT BE READ COMES BACK AS NOTHING RATHER THAN THROWING. Whatever the script did, it has already done by then, so failing to parse a summary must not throw away the work - the caller is left knowing only what the disk knows.";
  "★ THE WHOLE LINE IS READ, AND A READER THAT HUNTS FOR THE BRACKETS IN IT MUST NOT BE USED. One was, and it silently cut a report short: it takes the earlier of the last closing curly brace and the last closing square bracket, so a report whose final two characters are a square bracket then a curly brace loses the brace and will not parse. The line printed is already the whole answer, so there is nothing in it to find.";
  "★ THE ARGUMENTS GO OVER AS A FILE RATHER THAN AS WORDS ON THE LINE, WHICH IS WHAT LETS THEM BE ANY SHAPE AT ALL. A list of chapters or a whole chapter's text will not survive being spelled between two quote marks; a file has no length limit and no character it must escape.";
  async function lambda(temp_path) {
    let contents = json_to(args);
    await file_write(temp_path, contents);
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
  let reported = await file_temp(lambda);
  return reported;
}
