import { function_auto_declined_is } from "./function_auto_declined_is.mjs";
import { functions_locals_unread } from "./functions_locals_unread.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function functions_locals_unread_names() {
  "Every name bound and never read in this repo, written as the function it sits in and then the name, one line each, in the functions the repair for it will actually open.";
  "The function alone would not be enough to measure against a record. A function already known to bind one name nothing reads could quietly start binding a second, and a record holding only the function would call that already known - so the pair is what is written down, and a new name in an old offender fails like any other new one.";
  "A space joins the two because neither half may contain one, so the pair can always be read back apart. That matters more than it looks: the record is compared as text, and a joiner that could appear inside either half would make two different pairs share one line.";
  "How many functions were opened comes through unchanged, because this is only a way of writing down what the sweep found and changing the shape of the answer would lose the one thing that tells a clean run from a blind one.";
  "A function that asked in its own words to be left alone is dropped, because the repair drops it too. The record this feeds refuses to grow, on purpose, so a declining function that starts binding a name nothing reads would turn the gate red with nothing anybody could run: the repair passes it over, and the record will not take it. That is not a standard being held, it is a gate that cannot be answered. The sweep next door still reports every one of them, which is where somebody goes to read one.";
  "Its neighbour was found sitting exactly like that and fixed the same way - a browser-serialized lambda lifted out of a parent that was already declining. This one is the only other family built on the same repair, so it is the only other place the mismatch can be.";
  let swept = await functions_locals_unread();
  let walked = property_get(swept, "walked");
  let offenders = property_get(swept, "offenders");
  let names = [];
  for (let offender of offenders) {
    let f_name = property_get(offender, "name");
    let asked_off = await function_auto_declined_is(f_name);
    if (asked_off) {
      continue;
    }
    let unread = property_get(offender, "unread");
    for (let local of unread) {
      let pair = text_combine_multiple([f_name, " ", local]);
      list_add(names, pair);
    }
  }
  let r = {
    walked,
    names,
  };
  return r;
}
