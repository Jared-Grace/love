import { arguments_assert } from "./arguments_assert.mjs";
import { divide } from "./divide.mjs";
export async function app_g_dev_tools_open_verify_player_click(page) {
  "Click the player's own square on the map, the way a person tapping it would.";
  "THE PLAYER'S SQUARE IS THE ONLY IMAGE THE APP MAKES PULSE, so that style is what names it here - there is no other mark on it to find it by.";
  "THE CLICK LANDS ON THE SQUARE'S CENTRE BY COORDINATE rather than on the element, because the image itself takes no clicks. They pass through to the map, which works out which square was hit, so clicking the element would be clicking something that is not listening.";
  arguments_assert(arguments, 1);
  let player = page.locator('img[style*="pulseGlow"]').first();
  let box = await player.boundingBox();
  let x = box.x + divide(box.width, 2);
  let y = box.y + divide(box.height, 2);
  await page.mouse.click(x, y);
}
