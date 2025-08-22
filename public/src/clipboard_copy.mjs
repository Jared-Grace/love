export async function clipboard_copy(text) {
  const clipboard = await import("clipboardy");
  await clipboard.default.write(text);
}
