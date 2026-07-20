import { list_random_item } from "./list_random_item.mjs";
export function g_prayer_address() {
  "a random way to address God at the START of a prayer (DRY — one place for 'God,' / 'Father,' etc., used across prayer text like g_thanks and g_thanks_discernment) so the opener varies naturally";
  let addresses = [
    "God",
    "Father",
    "Lord",
    "Lord God",
    "Father in heaven",
  ];
  let address = list_random_item(addresses);
  return address;
}
