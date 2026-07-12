export async function messenger_reply_wait(page) {
  let s = 'p[dir="auto"]';
  let message_box = await page.waitForSelector(s, {
    timeout: 30000,
  });
  return message_box;
}
