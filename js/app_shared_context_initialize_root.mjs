export async function app_shared_context_initialize_root(root, fn) {
  let context = {
    root,
  };
  await fn(context);
}
