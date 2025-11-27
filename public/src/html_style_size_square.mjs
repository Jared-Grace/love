import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function html_style_size_square(body, square_size) {
  html_style_assign(body, {
    height: square_size,
    width: square_size,
  });
}
