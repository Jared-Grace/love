import { log } from "../../../love/public/src/log.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { html_scroll_center_generic_wait } from "../../../love/public/src/html_scroll_center_generic_wait.mjs";
export async function html_scroll_center_container_generic(
  player_img_c,
  behavior,
  container,
) {
  marker("1");
  let e = await html_scroll_center_generic_wait(player_img_c);
  let container_e = html_component_element_get(container);
  await new Promise(function lambda(r) {
    let v = requestAnimationFrame(r);
    return v;
  });
  const containerRect = container_e.getBoundingClientRect();
  const tileRect = e.getBoundingClientRect();
  const scrollLeft =
    container_e.scrollLeft +
    (tileRect.left - containerRect.left) -
    container_e.clientWidth / 2 +
    tileRect.width / 2;
  const scrollTop =
    container_e.scrollTop +
    (tileRect.top - containerRect.top) -
    container_e.clientHeight / 2 +
    tileRect.height / 2;
  const s = {
    left: scrollLeft,
    top: scrollTop,
    behavior,
  };
  container_e.scrollTo(s);
  log({
    s,
    container_e,
  });
  console.log(
    container_e.scrollHeight,
    container_e.scrollWidth,
    container_e.clientHeight,
    container_e.clientWidth,
  );
}
