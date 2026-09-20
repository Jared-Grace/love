import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_color_hue_groups } from "./app_code_color_hue_groups.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_color_tone_faults } from "./app_code_color_tone_faults.mjs";
import { app_code_color_tone_baseline_path } from "./app_code_color_tone_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
export async function app_code_color_tone_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: no hue this app draws may quietly grow a second colour at a tone it already has, or lose the twin it had. The colours are gathered into hues, each hue is asked for exactly one dark and one light, and what comes back is measured against the list of hues already known to be short or doubled.");
  ("IT WATCHES THE SHAPE OF THE PALETTE, WHICH IS THE THING THE OTHER THREE COLOUR GATES CANNOT SEE. The chip record and the pointing record each hold every reading of their own set, so either of them notices a colour of theirs moving - and neither of them can notice a colour appearing in the OTHER list at a hue they already use, because from inside one palette that is not an event at all. The near-miss check comes closest and asks a different question: it finds two colours that look the same, which catches a duplicate at one tone and says nothing about a hue with a tone missing, or about a third tone arriving well clear of the other two.");
  ("IT IS RATCHETED AND NOT HELD TO THE RULE, because the rule is not met today and the repairs are not this gate's to make. Four hues are drawn at ten colours where eight would do: three hues carry a spare dark and the amber has no light at all. Every one of those is a colour decision waiting on somebody who has worked in colour, and one of them is not this app's to take - the second blue is the blue the whole site leads with. A gate that failed on all four would be a gate that gets silenced.");
  ("A REPAIR TURNS IT RED EXACTLY AS LOUDLY AS A NEW FAULT, and that is the ratchet's other tooth rather than a rough edge. A banked fault that stops happening has to be taken off the list, or the list quietly licenses the same fault coming back later under cover of being already known.");
  ("HOW MANY HUES AND HOW MANY COLOURS WERE LOOKED AT GO OUT WITH THE VERDICT, counted off the grouping rather than off the faults. On a clean run the faults are none, so a number read from them would say nothing was checked on exactly the runs where the question matters. If the colour count ever falls without anybody having removed a colour, the sweep has lost sight of a palette and is green because it looked at less.");
  let groups = app_code_color_hue_groups();
  let hues = list_size(groups);
  let walked = 0;
  for (let group of groups) {
    let dark = property_get(group, "dark");
    let light = property_get(group, "light");
    walked = walked + list_size(dark) + list_size(light);
  }
  let faults = app_code_color_tone_faults();
  let path = app_code_color_tone_baseline_path();
  let name_write = fn_name("app_code_color_tone_baseline_write");
  let told = await baseline_names_gate_generic(
    faults,
    path,
    "the hues this app draws are not held at one dark colour and one light one the way they were - read what arrived against what went away, and bank it only once the change is the one that was wanted",
    name_write,
  );
  let added = property_get(told, "added");
  let stale = property_get(told, "stale");
  let result = {
    hues,
    walked,
    added,
    stale,
  };
  return result;
}
