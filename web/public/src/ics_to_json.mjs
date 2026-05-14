import { py_script_run } from "../../../love/public/src/py_script_run.mjs";
export async function ics_to_json(script_name, path_calendar) {
  let r = await py_script_run("ics_to_json.py", path_calendar);
  return r;
}
