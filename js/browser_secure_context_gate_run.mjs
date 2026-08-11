import { arguments_assert } from "./arguments_assert.mjs";
import { browser_secure_context_all } from "./browser_secure_context_all.mjs";
import { browser_secure_context_baseline_path } from "./browser_secure_context_baseline_path.mjs";
import { browser_secure_context_hint } from "./browser_secure_context_hint.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { fn_name } from "./fn_name.mjs";
export async function browser_secure_context_gate_run() {
  "QA gate: no new file reaches for one of the browser's https-only things without asking first whether the browser gave it.";
  "A browser hands those out on https and on localhost, and on any other address it does not hand them out at all. The word after the dot is simply absent, so the call throws where it stands, and because it stands on the way to the first paint the page goes white with nothing written on it.";
  "That is not a worry about what could happen. A phone opened this repo's dev page by the machine's name on the home network - the only way a phone can, having no localhost of its own - and got a white screen, because one function three lines long asked the browser for a fresh identifier and the browser had none to give. Every address the machine serving it ever used was localhost, so the whole class was invisible until somebody held a phone.";
  "Measured against what the repo already carried rather than against zero, because a use already written may well be on a page that is only ever https, and deciding that is a decision with a person in it. The rule binds what is written from now on.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let offenders = await browser_secure_context_all();
  let path = browser_secure_context_baseline_path();
  let hint = browser_secure_context_hint(
    "this file reaches for something the browser hands out only over https, so on any other address the call throws where it stands and the page dies before it is drawn - see ",
  );
  let f_name = fn_name("browser_secure_context_baseline_write");
  let r = await baseline_names_gate_generic(offenders, path, hint, f_name);
  return r;
}
