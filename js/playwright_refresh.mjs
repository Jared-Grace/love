export async function playwright_refresh(page) {
  let context = page.context();
  await context.clearCookies();
  function lambda() {
    localStorage.clear();
    sessionStorage.clear();
  }
  await page.evaluate(lambda);
  await page.reload({
    waitUntil: "domcontentloaded",
  });
}
