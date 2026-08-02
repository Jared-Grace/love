import { fn_name } from "./fn_name.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { function_auto_checked } from "./function_auto_checked.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { functions_operators_raw } from "./functions_operators_raw.mjs";
import { list_add } from "./list_add.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_operators_raw_repair() {
  "Puts every function that still spells its operators as symbols through the canonicalizing pass, in exactly the functions that still do";
  ("A function that has never been through that pass is invisible to the fold gate, because the gate matches one body against another and an uncanonicalized body matches nothing. So the gate reports a tidy repo while saying nothing at all about those functions - it is not that they are clean, it is that they were never asked. Four of them were canonicalized by hand and one real duplication surfaced immediately: ",
    fn_name("list_all"),
    " had ",
    fn_name("list_filter_size"),
    " written out inside it, and had been sitting green");
  ("Asking the same question again afterwards is the only honest way to say it worked, since a pass that changes nothing looks identical to one that succeeded");
  ("Each function is committed the moment it is canonicalized rather than all of them at the end, because a run this wide lasts long enough that somebody else's sweep takes the files first, and what it leaves behind then says nothing about how they were changed");
  ("The checked form is the one called, not the bare one: the bare pass throws on a file it cannot process, which would throw past this loop and discard every function already paid for, and a refusal changes no file so the commit for it finds nothing to make");
  ("This is deliberately not wired into any gate. The set is wide enough that running it touches most of the repo at once, and with many hands editing the same working directory that is a decision about timing rather than about correctness - so it is offered as a command and never as a thing that happens on its own");
  await ai_git_noted();
  let offenders = await functions_operators_raw();
  let repaired = [];
  for (let offender of offenders) {
    let name = property_get(offender, "f_name");
    let args = [name];
    await function_call_commit(function_auto_checked, args);
    list_add(repaired, name);
  }
  let left = await functions_operators_raw();
  function name_of(one) {
    let n = property_get(one, "f_name");
    return n;
  }
  let names = list_map(left, name_of);
  let r = {
    repaired,
    remaining: names,
  };
  return r;
}
