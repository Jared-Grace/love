import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_container_blue_medium_background_color } from "./app_shared_container_blue_medium_background_color.mjs";
import { app_shared_container_background_color } from "./app_shared_container_background_color.mjs";
import { app_shared_color_yellow_pastel } from "./app_shared_color_yellow_pastel.mjs";
import { app_shared_color_pink_pastel } from "./app_shared_color_pink_pastel.mjs";
import { app_shared_color_gray_light } from "./app_shared_color_gray_light.mjs";
export function app_receipts_colors() {
  "The colours a purchase can be marked with, blue first because a new purchase is blue. A colour has no meaning of its own here: the people using the folder decide one between them, such as green for a receipt already looked at.";
  "Each has a key, which is what is kept and sent and so must never change, a name to say it by, and the colour itself.";
  arguments_assert(arguments, 0);
  let colors = [
    {
      key: "blue",
      name: "Blue",
      color: app_shared_container_blue_medium_background_color(),
    },
    {
      key: "green",
      name: "Green",
      color: app_shared_container_background_color(),
    },
    {
      key: "yellow",
      name: "Yellow",
      color: app_shared_color_yellow_pastel(),
    },
    {
      key: "pink",
      name: "Pink",
      color: app_shared_color_pink_pastel(),
    },
    {
      key: "gray",
      name: "Gray",
      color: app_shared_color_gray_light(),
    },
  ];
  return colors;
}
