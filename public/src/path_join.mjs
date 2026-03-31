export function path_join(segments) {
  if (!segments || !segments.length) throw new Error('Missing segments');

  const parts = [];
  let isAbsolute = false;

  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i];
    if (!seg) continue;

    // Check for absolute path only in the first non-empty segment
    if (i === 0) {
      if (seg.startsWith('/') || /^[a-zA-Z]:[\\/]/.test(seg)) {
        isAbsolute = true;
      }
    }

    // Split on both forward and backward slashes
    const split = seg.split(/[\\/]+/);
    for (let s of split) {
      if (s === '' || s === '.') continue;
      if (s === '..') {
        if (parts.length && parts[parts.length - 1] !== '..') {
          parts.pop();
        } else {
          parts.push('..');
        }
      } else {
        parts.push(s);
      }
    }
  }

  // Join with forward slash
  const joined = parts.join('/');

  // Add leading slash if absolute
  return isAbsolute ? '/' + joined : joined;
}