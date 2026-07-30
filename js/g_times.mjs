import { fn_name } from "./fn_name.mjs";
export function g_times() {
  ("the times of day in order, as a CYCLE that wraps — a conversation walks the DAYTIME arc morning→noon→afternoon→sunset→night (",
    fn_name("app_g_conversation"),
    " targets the night index), and sunrise sits between night and morning to close the loop for the ambient day-drift (the #day_parts demo walks the whole ring). insert a keyframe here and everything downstream (",
    fn_name("g_phase_components"),
    " brackets by ",
    fn_name("list_size"),
    ", ",
    fn_name("app_g_conversation"),
    " targets by ",
    fn_name("g_time_index"),
    ") follows automatically — no hardcoded count to update");
  let times = ["morning", "noon", "afternoon", "sunset", "night", "sunrise"];
  return times;
}
