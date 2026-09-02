import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
export function qa_gates_unregistered_known() {
  arguments_assert(arguments, 0);
  ("Every gate this repo holds that the whole-repo run deliberately does not ask, each one standing here with the reason it cannot be asked there.");
  ("A gate that exists and is asked by nobody answers clean for as long as it exists, and nothing about it looks any different from a gate that runs and passes. So the set is derived from the files rather than read off a list, and the only judgement left over is whether an absence was meant. This is where that judgement is written down, and a gate arriving unlisted is that judgement being asked for rather than a fault being alleged.");
  ("What every entry here has in common is that its answer is not in the source. The run works from a frozen copy of the code and nothing else - no local server, no browser, no bucket that has been deployed to, no machine with drives in it - so these ask their question of something that is not there, and a red answer from one of them would be saying the surroundings were missing rather than that the code was wrong.");
  ("The names are spelled rather than imported, and here that is required rather than preferred. This function is reached from the gate list, so importing the gates it names would make the run import the very gates it is saying are outside the run, and two of those open a browser. Spelling a name follows a rename just as well, because the rename pass rewrites these marked strings.");
  let f_name = fn_name("qa_gate_run");
  ("The run itself, which is the thing that asks the others. It is not a gate; it ends in the same two words because it is what they are asked by. It is named here rather than filtered out by the shape of its name, because a rule about how a name is spelled is exactly the kind of answer this whole reading exists to stop anybody relying on.");
  let f_name2 = fn_name("app_g_dev_routes_phone_gate_run");
  let f_name3 = fn_name("apps_boot_cold_gate_run");
  ("Two that drive a real browser against the local server, and both say so in their own prose. They are slower than the whole run put together, and they go red when either the server or the browser is missing, which is a fact about the machine rather than about the code.");
  let f_name4 = fn_name("apps_prod_chunks_unreachable_gate_run");
  ("Asks what people actually have in front of them rather than what the source says they should, so every second of it is network against what has already been sent out. The fault it names can only arrive at a sending, so it is asked at a sending rather than at every commit, where it would be paid for constantly and could say nothing new.");
  let f_name5 = fn_name("smart_alert_gate_run");
  let f_name6 = fn_name("smart_self_test_recent_gate_run");
  ("Two about the health of the drives in this machine, read from a daemon and from its log. The source cannot hold that answer and a copy of the source frozen somewhere else cannot either, and neither of them can be repaired by editing any code.");
  let names = [f_name, f_name2, f_name3, f_name4, f_name5, f_name6];
  return names;
}
