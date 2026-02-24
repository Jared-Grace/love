export function http_generic_options_default(options) {
  const method = options.method || "GET";
  const body = options.body || null;
  let r = {
    method,
    body,
  };
  return r;
}
