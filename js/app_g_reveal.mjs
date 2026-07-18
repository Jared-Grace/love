import { app_shared_glow_correct } from "./app_shared_glow_correct.mjs";
import { g_z } from "./g_z.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_g_reveal(correct) {
  "the base discernment reveal: the living-word GLOW + raise (God pointing to the choice); used for gold Scripture, which is already gold";
  app_shared_glow_correct(correct);
  html_style_assign(correct, {
    position: "relative",
    "z-index": g_z("raised"),
  });
}
