import { js_list_type } from "./js_list_type.mjs";
import { js_binding_names } from "./js_binding_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { less_than } from "./less_than.mjs";
import { list_all } from "./list_all.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { not } from "./not.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { list_add } from "./list_add.mjs";
export function js_duplicate_elements(ast, size) {
  "Every name an ordered register in this file holds twice.";
  "The sibling of the check next door over sets of settings, and the fault is the quieter of the two. A record given one name twice throws the first entry away; a register given one name twice keeps both, and whatever reads it does the thing twice and says nothing about having done so.";
  "It is the way work goes wrong here rather than a way somebody writes badly. Somebody writes a unit and somebody else notices it is not registered, and the two of them register it seconds apart. Both edits are right, both land, and what is left is a register longer than the set of things it stands for.";
  "Only names are compared, never written words or numbers - a register of names stands for things that get run or read, so holding one twice is always a mistake, while a list of words or numbers may perfectly well say the same thing twice and mean it.";
  let duplicates = [];
  let vs = js_list_type(ast, "ArrayExpression");
  let locals = js_binding_names(ast);
  function local_is(name) {
    let r = list_includes(locals, name);
    return r;
  }
  for (let v of vs) {
    let elements = property_path_get_2(v, "node", "elements");
    ("A short list is passed over, and that is what tells a register apart from a handful of things written side by side. A run of the same name twice is ordinary in the small: a padding written either side of a word, a cycle stepping through nothing and then something and then nothing again, the same reading handed to both halves of a pair. None of those is a register and none of them is wrong.");
    let short = less_than(elements.length, size);
    if (short) {
      continue;
    }
    ("A list holding anything but names is passed over too, and that is what tells a register apart from a long thing being spelled out. Text built up a piece at a time is the common one: the pieces between the names are written words, and a name standing either side of one of them is the same name doing two different jobs rather than one job listed twice.");
    let all_named = list_all(elements, js_identifier_is);
    if (not(all_named)) {
      continue;
    }
    let names = list_map_property(elements, "name");
    ("A list one of whose places holds the do-nothing name is passed over as well, and that is what tells a register apart from a list standing beside another one. A register never names doing nothing - a thing that is not to be done is simply left out of it - so a list that does name it has one place for each place of something else, and a name written twice there is that one thing wanted at two of those places rather than listed twice. The cycle of stylings handed to a sentence built a piece at a time is the shape: nothing, dark, nothing, green, nothing, green, one for each piece of the sentence.");
    let positional = list_includes(names, fn_name("noop"));
    if (positional) {
      continue;
    }
    ("A list made only of names this file sets itself is passed over too, and that is what tells a register apart from a line spelled out a piece at a time. A register names units that live somewhere else and get run or read from there; a name set a few lines up holds a value made here - a character, a colour - and a line of code such as ! ( ! ( true ) ) wants the same character at two places of it, with a matching list of colours wanting the same colour at two places too. Measured 2026-09-15: those two lists were the whole of what this check found.");
    ("★ A NAME THIS FILE SETS ITSELF IS EVERY NAME THIS FILE BINDS, WHICH IS WHAT THE SENTENCE ABOVE ALWAYS SAID AND NOT WHAT WAS ASKED FOR. The reading was built from variable declarations alone, so a function declared a few lines up and a parameter named at the top of the line both read as units living elsewhere, and two lists went down as offenders for holding a name twice on purpose: a run of colours, one per piece of a line of code, whose repeated places are a parameter; and a list of drawing steps, one per screen of a lesson, two of whose places ask for the same break between groups and two of whose steps are declared functions. Both are the shape this exemption was written for, and both escaped it by a hand-rolled gathering being narrower than the sentence over it.");
    ("The asymmetry is worth saying out loud, because it runs the other way here from everywhere else this reading is used. A caller asking which names are the file's own in order to leave them alone is in danger from a name MISSING - what is left looks like the repo's, and gets treated as the repo's. This caller subtracts in order to EXEMPT, so a name wrongly present costs a fault not found. Widening it is therefore the lenient direction, and it is right only because the reason given above does not distinguish the kinds: a value made here is made here whether a let, a parameter or a declared function holds it. What founded this check is untouched - a register of imported repo functions, which this reading excludes by design.");
    let all_local = list_all(names, local_is);
    if (all_local) {
      continue;
    }
    let seen = [];
    for (let name of names) {
      let twice = list_includes(seen, name);
      if (twice) {
        list_add_if_not_includes(duplicates, name);
      }
      list_add(seen, name);
    }
  }
  return duplicates;
}
