export async function playwright_locator_wait(locator) {
  await locator.first().waitFor({
    state: "attached",
  });
}
