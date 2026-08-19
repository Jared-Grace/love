import { bfl_key } from "./bfl_key.mjs";
export async function bfl_http_options() {
  "the extra things every ask to Black Forest Labs carries - the key, and a note that JSON is wanted back";
  "it also says not to wait before asking. The wait exists to hold a wide sweep apart, and there is no sweep here: one picture is asked for, then the same one picture is asked after until it is drawn, so waiting first only makes the drawing take longer to arrive.";
  let key = await bfl_key();
  let options = {
    sleep: false,
    headers: {
      "x-key": key,
      accept: "application/json",
    },
  };
  return options;
}
