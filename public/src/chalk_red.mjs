import { marker } from "./marker.mjs";
import { chalk_color } from "./chalk_color.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { import_install } from "./import_install.mjs";
export async function chalk_red(prompt) {
  marker("1");
  const color = "red";
  let v = await chalk_color(color, prompt);
  return v;
}
