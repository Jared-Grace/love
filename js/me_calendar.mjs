import { me_calendar_path } from "./me_calendar_path.mjs";
import { ics_to_json } from "./ics_to_json.mjs";
export async function me_calendar() {
  let r = me_calendar_path();
  let result = await ics_to_json(r);
  return result;
}
