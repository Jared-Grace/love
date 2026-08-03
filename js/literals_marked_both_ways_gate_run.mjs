import { literals_marked_both_ways_names } from "./literals_marked_both_ways_names.mjs";
import { literals_marked_both_ways_baseline_path } from "./literals_marked_both_ways_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
export async function literals_marked_both_ways_gate_run() {
  "Gate: no word may newly be marked both frozen and as a reference.";
  "The two markers say opposite things about the same word - one that a rename must walk past it, the other that a rename must carry it along - so a word wearing both leaves a rename with two orders and no way to obey them both. Whichever it obeys, the other site is silently left pointing at a word nothing answers to.";
  "It is worth a gate rather than a reading because neither site can see the other. Each is one word inside one file, both look right where they stand, and the damage only appears at a rename that may be months away and will not mention either of them.";
  "Measured against what the repo already carried rather than against zero. The same spelling can honestly be used two ways - a stored case teaching a word as its subject beside a gate naming the function that shares it - and telling those apart is a judgement about what the word addresses, not this gate's to make. The record only has to stop the number growing.";
  let offenders = await literals_marked_both_ways_names();
  let path = literals_marked_both_ways_baseline_path();
  let name_write = fn_name("literals_marked_both_ways_baseline_write");
  let f_name = fn_name("literals_marked_both_ways");
  let hint = text_combine_multiple([
    "these words are marked both frozen and as a reference, so a rename has two orders and can only obey one - run ",
    f_name,
    " to see both sites, decide which marker is lying by asking whether anything here can still move what the word addresses, and delete that one",
  ]);
  let r = await baseline_names_gate_generic(offenders, path, hint, name_write);
  return r;
}
