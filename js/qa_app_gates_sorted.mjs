export function qa_app_gates_sorted(failed, named, reach) {
  "Sorts the gates that were red at one commit into the ones that reach what one app ships and the ones that cannot, from the names alone";
  "This is the whole judgement a deployment turns on, and it is pure: two lists in, two lists out, no gate run and no file read. Its caller has to spend fourteen minutes judging a commit before it can ask anything, which is why every fault in this sorting so far had to be found by hand on a real afternoon rather than by asking it a question. Separated out, it can be asked as many questions as anyone likes.";
  "Three faults have been found in it in two days, and all three were silent. A guard that read for a shape that no longer occurred set aside sixteen unproven gates; a reader that stopped at the first line of a complaint made sixteen more of them name nobody; a reader that counted ordinary English made every gate name something every app ships. Wrong in the letting-out direction and wrong in the holding-back direction both look exactly like working.";
  "Which gates are set aside is DERIVED and never declared. A gate's own complaint names the functions it is complaining about; the app's reach names what it carries; a complaint whose names all fall outside that reach is a complaint about something else. No list here says which gates matter to which app, because such a list is a judgement that can be wrong in silence and would want revisiting every time a gate or an app changed.";
  "Naming nothing counts against the app. It may well be about somewhere else, but nothing here can show that, and the direction to be wrong in is the one that stops a deploy rather than the one that lets a break through. It is one condition with two spellings - absent from the record, or present holding nothing - and both are counted, because checking only for the absent one once meant the rule applied to nothing at all.";
  let blocking = [];
  let elsewhere = [];
  for (let gate of failed) {
    let names = property_get_or_null(named, gate);
    let unnamed = list_empty_is_or_null(names);
    if (unnamed) {
      list_add(blocking, {
        gate,
        why: "named no function, so it cannot be placed",
        names: [],
      });
      continue;
    }
    let mine = list_intersection(names, reach);
    let none = list_empty_is(mine);
    if (none) {
      ("Whether the gate's own function is shipped is carried for the reader rather than used, because a gate reaching an app is not the same as a gate being ABOUT it - the sorting is done on what the complaint named");
      let carried = list_includes(reach, gate);
      list_add(elsewhere, {
        gate,
        names,
        gate_itself_shipped: carried,
      });
      continue;
    }
    list_add(blocking, {
      gate,
      why: "names something this app ships",
      names: mine,
    });
  }
  let r = {
    blocking,
    elsewhere,
  };
  return r;
}
