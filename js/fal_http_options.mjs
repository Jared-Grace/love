import { text_combine } from "./text_combine.mjs";
import { fal_key } from "./fal_key.mjs";
export async function fal_http_options() {
  "the extra things every ask to fal carries - the key, and a note that JSON is wanted back";
  "it also says not to wait before asking, for the same reason the Black Forest Labs one does: one picture is asked for at a time, so pausing before the ask only makes that one picture take longer to arrive.";
  "the key rides in an Authorization header spelled Key and then the key. Nearly every other service spells that same header Bearer, so the wrong word is the likely mistake here rather than an unlikely one - and what comes back when it is wrong is a plain refusal that does not say which word it objected to.";
  let key = await fal_key();
  let options = {
    sleep: false,
    headers: {
      Authorization: text_combine("Key ", key),
      accept: "application/json",
    },
  };
  return options;
}
