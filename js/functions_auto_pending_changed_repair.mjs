export async function functions_auto_pending_changed_repair() {
  "Runs the canonicalizing pass over exactly the functions being edited that still need it, and says which ones it could not settle.";
  "It finds its own set, so nothing has to be listed for it. That is what makes it safe to run before every commit: asked when there is nothing to do, it does nothing and says so.";
  "Nothing is committed here, and that is deliberate rather than an omission. These files are named precisely because somebody is in the middle of editing them, and a hand edit leaves no note of itself - so a commit made here would sweep half-written work under the name of a pass that did not write it, which is the one thing a commit message in this repo must never say. Run the pass, then commit your own work.";
  "Each function is asked again on its own after the pass rather than the whole set being asked again at the end. Asking the set again would be a proof that proves nothing the moment a commit lands anywhere nearby, since a committed file is no longer being edited and so leaves the set whether the pass helped it or not.";
  arguments_assert(arguments, 0);
  let pending = await functions_auto_pending_changed();
  let repaired = [];
  let remaining = [];
  for (let f_name of pending) {
    await function_auto_checked(f_name);
    async function ask() {
      let answer = await function_auto_pending_is(f_name);
      return answer;
    }
    let still = await catch_null_async(ask);
    if (still) {
      list_add(remaining, f_name);
    } else {
      list_add(repaired, f_name);
    }
  }
  let r = {
    repaired,
    remaining,
  };
  return r;
}
