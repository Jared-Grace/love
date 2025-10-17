import { reply_choice } from "../../../love/public/src/reply_choice.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function reply_choice_output(choices) {
  marker("1");
  return reply_choice(choices);
}
