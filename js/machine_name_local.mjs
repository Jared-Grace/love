import { machine_name } from "./machine_name.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_combine } from "./text_combine.mjs";
export function machine_name_local() {
  "The name another device on the same network can reach this machine by - the machine's own name with the word that the local-network name service answers for added on the end.";
  "This is the name a phone has to use, because a phone asking for localhost asks itself. Everything that only ever works when it is opened on the machine it was built on is hiding behind that difference.";
  "It is lowered to small letters, and that is not tidying. A browser sends the address a page came from in small letters whatever was typed, and anything that decides by comparing that text against a list is comparing letter by letter - so a name kept the way the machine spells it would be written down in a form that never arrives.";
  let name = machine_name();
  let lowered = text_lower_to(name);
  let r = text_combine(lowered, ".local");
  return r;
}
