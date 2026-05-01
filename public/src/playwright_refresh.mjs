export async function playwright_refresh(page) {
  const context = page.context();
  await context.clearCookies();
  let v = page.url();
  await page.goto(v, {
    waitUntil: "domcontentloaded",
    timeout: 15000,
  });
  function lambda() {
    try {
      localStorage.clear();
      sessionStorage.clear();
    } catch {}
  }
  await page.evaluate(lambda);
  await page.waitForTimeout(300);
}
