export async function folder_exists_ensure(dir) {
  let fs = await import("fs");
  await fs.promises.mkdir(dir, {
    recursive: true,
  });
}
