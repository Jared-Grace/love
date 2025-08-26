import { marker } from "./marker.mjs";
import { js_dollar_f } from "./js_dollar_f.mjs";
import { js_dollar_s } from "./js_dollar_s.mjs";
import { js_dollar_g } from "./js_dollar_g.mjs";
import { js_dollar_a } from "./js_dollar_a.mjs";
import { js_dollar_rf } from "./js_dollar_rf.mjs";
import { js_dollar_rt } from "./js_dollar_rt.mjs";
import { js_dollar_r } from "./js_dollar_r.mjs";
import { js_dollar_ie } from "./js_dollar_ie.mjs";
import { js_dollar_i } from "./js_dollar_i.mjs";
export function js_dollar_choices() {
  marker("choices");
  let choices = [
    {
      name: "i",
      fn: js_dollar_i,
    },
    {
      name: "ie",
      fn: js_dollar_ie,
    },
    {
      name: "r",
      fn: js_dollar_r,
    },
    {
      name: "rt",
      fn: js_dollar_rt,
    },
    {
      name: "rf",
      fn: js_dollar_rf,
    },
    {
      name: "a",
      fn: js_dollar_a,
    },
    {
      name: "g",
      fn: js_dollar_g,
    },
    {
      name: "s",
      fn: js_dollar_s,
    },
    {
      name: "f",
      fn: js_dollar_f,
    },
    {
      name: "x",
      fn: js_dollar_x,
    },
  ];
  return choices;
}
