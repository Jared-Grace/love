import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { git_message_hand_made } from "./git_message_hand_made.mjs";
import { equal } from "./equal.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { function_aliases } from "./function_aliases.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { null_is } from "./null_is.mjs";
export async function git_call_message(f_name, args) {
  "The message a commit carries is the command that produced it — the name that";
  "was run, then what it was run on. A log of these reads as a record of how the";
  "repo was built, and a message that names nothing is itself the signal that no";
  "named unit did that change.";
  "Nothing is stripped out of it. Characters a shell would read as punctuation used";
  "to be turned into spaces here, and back when the commit was built by pasting the";
  "message into a line of command text between two quote marks, that was right: a";
  "quote ended the quoted run early and a dollar or a semicolon was read rather than";
  "written. The commit is spawned from a list of words now, so the message arrives as";
  "one word no matter what is in it, and stripping only lost the arguments it was";
  "meant to be recording — a rename of a parameter written with dollars logged as a";
  "command whose arguments cannot be run again.";
  "A SHORT NAME TYPED AT THE KEYBOARD IS SPELLED OUT HERE, because an alias key is";
  "not an identity: pointing it somewhere else is one command, and every commit ever";
  "messaged with that key then reads as a change made by whatever it points at today.";
  "The gate that finds those commits can only find them, never mend them, so the log";
  "was growing offenders faster than anybody could answer for them.";
  "It is done at this one place on purpose. Every commit this repo makes is worded";
  "here, by hand or by command, so a caller cannot forget - and a caller that already";
  "holds a full name hands one in and gets it back unchanged.";
  "THE HAND-MADE WORD IS LEFT ALONE FIRST AND BY ITSELF. It is registered as an alias";
  "key like any other, so spelled out it would become the name of whatever it reaches,";
  "and the one message the convention asks for where nothing named made the change";
  "would be the only message this ever rewrote.";
  "A word that already names a live function is left alone too, which is the same";
  "test the gate makes and is made here for the same reason: a name and a key are";
  "allowed to be spelled the same, and the name is the one that is not re-pointable.";
  arguments_assert(arguments, 2);
  let by_hand = git_message_hand_made();
  let spelled = f_name;
  let hand_made = equal(f_name, by_hand);
  if (not(hand_made)) {
    let f_names = await functions_names();
    let live = list_includes(f_names, f_name);
    if (not(live)) {
      let aliases = await function_aliases();
      let target = property_or_null(aliases, f_name);
      let free = null_is(target);
      if (not(free)) {
        spelled = target;
      }
    }
  }
  let joined = [spelled].concat(args).join(" ");
  return joined;
}
