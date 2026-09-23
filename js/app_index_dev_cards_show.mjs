import { arguments_assert } from "./arguments_assert.mjs";
import { host_local_network_is } from "./host_local_network_is.mjs";
import { property_get } from "./property_get.mjs";
export async function app_index_dev_cards_show(root) {
  "The front page's working cards, fetched by name and only on a machine on this same network, so the public page never carries them.";
  "The address is written out rather than built, so the bundler sees it and splits it off into a piece of its own rather than leaving a file nothing was ever written to.";
  arguments_assert(arguments, 1);
  let wanted = host_local_network_is();
  if (wanted) {
    let module = await import("./app_index_dev_cards_draw.mjs");
    let fn = property_get(module, "app_index_dev_cards_draw");
    await fn(root);
  }
}
