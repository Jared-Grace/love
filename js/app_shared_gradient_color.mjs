import { color_between } from "./color_between.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
export function app_shared_gradient_color(index, count) {
  "the first language leads in the strong brand blue (37, 99, 235); each further language fades toward the muted deemphasized slate (100, 116, 139) so the deemphasized languages sit back — never to black, which would overpower on light and vanish on dark";
  let last = subtract(count, 1);
  let t = 1;
  if (greater_than(last, 0)) {
    t = divide(index, last);
  }
  let brand = app_shared_color_brand_blue_rgb();
  let deemphasized = [100, 116, 139];
  let color = color_between(t, brand, deemphasized);
  return color;
}
