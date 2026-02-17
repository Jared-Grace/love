import { sleep } from "../../../love/public/src/sleep.mjs";
export async function html_move_animate_translate(
  offsetX,
  offsetY,
  e,
  duration,
) {
  const u = `translate(${offsetX}px, ${offsetY}px)`;
  e.style.transform = u;
  await sleep(duration);
}
