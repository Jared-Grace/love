export async function messenger_reply_wait(page) {
  const s = 'p[dir="auto"]';
  let message_box = await page.waitForSelector(s, {
    timeout: 30000,
  });
  return message_box;
}
