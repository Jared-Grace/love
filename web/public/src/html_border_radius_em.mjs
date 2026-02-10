import { html_border_radius } from "../../../love/public/src/html_border_radius.mjs";
export function html_border_radius_em(border_radius, component) {
  const border_radius_em = border_radius + "em";
  html_border_radius(component, border_radius_em);
}
