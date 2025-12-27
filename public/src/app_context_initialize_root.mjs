export function app_context_initialize_root(root, fn) {
  let context = {
    root,
  };
  fn(context);
}
