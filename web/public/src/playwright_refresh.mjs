export async function playwright_refresh(page) {
  const context = page.context();
  await context.clearCookies();
  function lambda() {
    localStorage.clear();
    sessionStorage.clear();
  }
  await page.evaluate(lambda);
  await page.reload();
}
