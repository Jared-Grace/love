export async function playwright_refresh(page) {
  const context = page.context();
  await context.clearCookies();
  function lambda() {
    try {
      localStorage.clear();
      sessionStorage.clear();
    } catch {}
  }
  await page.evaluate(lambda);
  await page.reload();
}
