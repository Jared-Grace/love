import { marker } from "./marker.mjs";
export function bind() {
  marker("1");
  let fn = page.keyboard.type.bind(page.keyboard);
  return fn;
}
