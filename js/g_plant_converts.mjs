import { less_than } from "./less_than.mjs";
import { g_leader_turns } from "./g_leader_turns.mjs";
import { g_plant_days_turns } from "./g_plant_days_turns.mjs";
import { list_add } from "./list_add.mjs";
export function g_plant_converts(turns_all, index_first) {
  "The converts of one plant from the arc lengths handed in - what they come to together, what that makes the leader worth, and the days the plant therefore needs.";
  "Takes LENGTHS rather than drawing them, and that is the whole point of the split. A drawn length is a want; a written arc runs long where it had more to say and short where it did not. Measured lengths go in here unchanged and the plant comes out sized to what actually exists, so nothing has to be planned twice or reconciled afterwards.";
  "Nothing here knows how many days the game has left, and that is deliberate. A plant that grew only as far as the remaining days allowed came out under the size it meant to be, which made the last one of every game a runt for a reason no player could see. What is left over is the whole game's business, not this plant's.";
  "The number is a running one across the whole game, so an npc's number says when in the game they are met and two plants can never name the same person.";
  let converts = [];
  let convert_turns = 0;
  for (let step = 0; less_than(step, turns_all.length); step++) {
    let turns = turns_all[step];
    let index = index_first + step;
    let npc = {
      index,
      turns,
    };
    list_add(converts, npc);
    convert_turns = convert_turns + turns;
  }
  let leader_turns = g_leader_turns(convert_turns);
  let arc_turns = leader_turns + convert_turns;
  let days = g_plant_days_turns(arc_turns);
  let r = {
    converts,
    convert_turns,
    leader_turns,
    arc_turns,
    days,
  };
  return r;
}
