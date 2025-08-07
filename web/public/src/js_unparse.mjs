import { generate } from 'astring';
export function js_unparse(ast) {
const output = generate(ast);  return output;
}
