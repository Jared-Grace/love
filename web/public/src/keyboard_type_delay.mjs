import { each_async } from "./each_async.mjs";
import { sleep } from "./sleep.mjs";
import { keyboard_typing_delay } from "./keyboard_typing_delay.mjs";
import { string_list_to } from "./string_list_to.mjs";
export async function keyboard_type_delay(message, fn) {
  let list = string_list_to(message);
  async function lambda(item) {
    let delay_ms = keyboard_typing_delay();
    await sleep(delay_ms);
    await fn(item);
  }
  await each_async(list, lambda);
}
