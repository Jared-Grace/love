import { emoji_wave } from "./emoji_wave.mjs";
import { emoji_cross } from "./emoji_cross.mjs";
import { marker } from "./marker.mjs";
export function app_reply_main() {
  marker("1");
  let choices = [
    {
      text: "greetings",
      response:
        emoji_wave() +
        " Greetings in the name of our LORD Jesus Christ " +
        emoji_cross(),
    },
  ];
}
