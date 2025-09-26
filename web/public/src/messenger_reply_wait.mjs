export async function messenger_reply_wait(page) {
  const s = 'p[dir="auto"]';
  let p = await page.waitForSelector(s, {
    timeout: 10000,
  });
}
