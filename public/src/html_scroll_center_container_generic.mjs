import { marker } from "../../../love/public/src/marker.mjs";
import { html_scroll_center_generic_wait } from "../../../love/public/src/html_scroll_center_generic_wait.mjs";
export async function html_scroll_center_container_generic(
  player_img_c,
  behavior,
) {
  marker("1");
  let el = await html_scroll_center_generic_wait(player_img_c);
  const containerRect = container.getBoundingClientRect();
  const tileRect = tileEl.getBoundingClientRect();
  const scrollLeft =
    container.scrollLeft +
    (tileRect.left - containerRect.left) -
    container.clientWidth / 2 +
    tileRect.width / 2;
  const scrollTop =
    container.scrollTop +
    (tileRect.top - containerRect.top) -
    container.clientHeight / 2 +
    tileRect.height / 2;
  container.scrollTo({
    left: scrollLeft,
    top: scrollTop,
    behavior,
  });
}
