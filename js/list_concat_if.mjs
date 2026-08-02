import { list_concat } from "./list_concat.mjs";
import { not } from "./not.mjs";
export function list_concat_if(list, list_extra, condition) {
  "the extra items joined on the end when the condition holds, and the plain list handed straight back when it does not. the shape a set of CHOICES takes whenever some of them are open only to somebody: an NPC who believes greets you with every word anyone would use PLUS four blessings, so the faith words are added rather than swapped in, and the difference between the two kinds of person is which options exist rather than which sentence is built. neither branch touches the list it received, so the same plain list can be offered to two different conditions without one of them growing the other's options";
  if (not(condition)) {
    return list;
  }
  let concated = list_concat(list, list_extra);
  return concated;
}
