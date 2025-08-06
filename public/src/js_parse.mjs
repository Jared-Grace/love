import * as acorn from 'acorn';
export function js_parse(code){const ast = acorn.parse(code, { ecmaVersion: 2020 });return ast}