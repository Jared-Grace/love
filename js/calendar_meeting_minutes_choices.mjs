import { arguments_assert } from "./arguments_assert.mjs";
export function calendar_meeting_minutes_choices() {
  arguments_assert(arguments, 0);
  ('The meeting lengths a host may pick, in minutes - one list for the Rules screen that offers them and the server that refuses any other (human, 2026-11-24: "should be able to pick 55 minutes", "also should allow 60"; 45 skipped "since no one has asked for it yet").');
  let r = [25, 30, 55, 60];
  return r;
}
