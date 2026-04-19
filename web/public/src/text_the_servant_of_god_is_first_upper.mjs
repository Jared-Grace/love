import { text_first_upper_to } from "../../../love/public/src/text_first_upper_to.mjs";
import { text_the_servant_of_god } from "../../../love/public/src/text_the_servant_of_god.mjs";
export function text_the_servant_of_god_is_first_upper() {
  let t = text_the_servant_of_god() + " is";
  let u = text_first_upper_to(t);
  return t;
}
