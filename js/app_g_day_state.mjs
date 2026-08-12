import { fn_name } from "./fn_name.mjs";
import { global_function_initialize } from "./global_function_initialize.mjs";
export function app_g_day_state() {
  ("the #day_unbelievers demo session, a global initialised once: { talkable, target, guide, slices_total, slices_done, target_start, target_best } — the day's talkable NPCs (null when the demo is OFF, so the real game and every other screen are untouched), the currently-discerned target NPC, the live gold guide-tile element, sky_toast (only the #day_conversation demo sets it, so a conversation announces each sky-advancing step as a small time-of-day toast — off everywhere else), and the SLICE clock for the sunrise→sunset sky where one slice = one PERSON-leg: slices_total = number of people (equal shares of the day), slices_done = people reached so far, target_start = distance to the current person when prayed (the leg's length), target_best = smallest distance reached so far (drives progress WITHIN the leg; only beating it advances the sky, so wandering costs no time). ALL fields start null / 0 so ",
    fn_name("property_get"),
    " never throws on a fresh session. the conversation entry reads talkable to give a non-talkable NPC a 'busy' line instead of a conversation");
  ("trail is the way the line walks: the tiles the player has left, newest first, kept only as far back as a line could ever reach. it is the ONE record of where behind the player is - the person at place N in the line stands on its Nth tile - so somebody gathered halfway through a walk can be put straight into line without anybody having to work out where the back of it is");
  ("converts and followers are the day's believers, cut in two by where they are: converts are the ones who believed today and are still standing where they believed, waiting to be gathered; followers are the ones already walking behind the player toward the water. converts are baptized the SAME day, so who may be gathered is exactly who believed today - nothing has to be stored to say which day a believer belongs to");
  ("div_map is the map this day is being walked on, kept here for the same reason the live guide element is: the discernment prayer is now prayed from the tap-yourself MENU, which knows nothing of the map, and the gold guide it draws has to land on one. threading the map down through the menu and every screen reachable from it would have touched five functions to carry one value that the day session already had every right to hold.");
  let state = global_function_initialize(app_g_day_state, {
    talkable: null,
    target: null,
    guide: null,
    div_map: null,
    guide_coords: null,
    slices_total: 0,
    slices_done: 0,
    target_start: null,
    target_best: null,
    sky_toast: false,
    converts: [],
    followers: [],
    trail: [],
  });
  return state;
}
