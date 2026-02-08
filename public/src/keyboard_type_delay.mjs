import { each_async } from "../../../love/public/src/each_async.mjs";
import { sleep } from "../../../love/public/src/sleep.mjs";
import { keyboard_typing_delay } from "../../../love/public/src/keyboard_typing_delay.mjs";
import { text_list_to } from "../../../love/public/src/text_list_to.mjs";
export async function keyboard_type_delay(message, fn) {
  let list = text_list_to(message);
  async function lambda(item) {
    let delay_ms = keyboard_typing_delay();
    await sleep(delay_ms);
    await fn(item);
  }
  await each_async(list, lambda);
}
