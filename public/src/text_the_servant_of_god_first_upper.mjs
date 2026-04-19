import { text_first_upper_to } from "../../../love/public/src/text_first_upper_to.mjs";
import { text_the_servant_of_god } from "../../../love/public/src/text_the_servant_of_god.mjs";
export function text_the_servant_of_god_first_upper() {
  let s2 = text_the_servant_of_god();
  const s3 = text_first_upper_to(s2);
  return s3;
}
