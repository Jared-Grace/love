import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { g_img_square_size_css } from "../../../love/public/src/g_img_square_size_css.mjs";
export function app_g_tutorial_style(tutorial) {
  const square_size = `calc(` + g_img_square_size_css() + `*.4)`;
  html_style_assign(tutorial, {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: square_size,
    animation: "upDown 1.25s infinite ease-in-out alternate",
  });
}
