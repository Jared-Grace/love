import { py_script_run } from "../../../love/public/src/py_script_run.mjs";
export async function ics_to_json(script_name, concated) {
  let r = await py_script_run(script_name, concated);
  return r;
}
