export async function folder_exists_ensure(dir) {
  let fs = await import("fs");
  let path = await import("path");
  await fs.promises.mkdir(dir, {
    recursive: true,
  });
  return path;
}
