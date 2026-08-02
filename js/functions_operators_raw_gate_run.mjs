import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { operators_raw_baseline_path } from "./operators_raw_baseline_path.mjs";
import { functions_operators_raw_names } from "./functions_operators_raw_names.mjs";
export async function functions_operators_raw_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: a function may not newly spell a comparison or a sum as an operator.");
  ("Every other gate that reads a body reads the shape the canonicalizing pass");
  ("leaves. A function the pass has never run over is therefore compared against");
  ("nothing - the fold sees no site, the duplicate sweeps see no twin - so one raw");
  ("function hides every copy of itself. That is not a style rule wearing a gate; it");
  ("is the one thing that makes the other gates blind, and it is invisible while it");
  ("is happening.");
  ("The repair is a command the writer already has, so this is self-serve: run the");
  ("canonicalizing pass over the named function and the gate goes green. It is the");
  ("rule the repo already states in writing - run that pass after editing a file -");
  ("and what it adds is that forgetting now says so.");
  ("Measured against what the repo already carried rather than against zero. A few");
  ("of the ones here keep plain javascript on purpose - the drivers, and the");
  ("functions that stand for the operators and so cannot use themselves - and which");
  ("of them that is true of is a judgement, not this gate's to make. The record only");
  ("has to stop the number growing.");
  let offenders = await functions_operators_raw_names();
  let path = operators_raw_baseline_path();
  let name_write = fn_name("functions_operators_raw_baseline_write");
  let r = await baseline_names_gate_generic(
    offenders,
    path,
    text_combine_multiple([
      "these functions spell a comparison or a sum as an operator, so every body-reading gate is blind to them - run ",
      fn_name("function_auto_checked"),
      " over each one",
    ]),
    name_write,
  );
  return r;
}
