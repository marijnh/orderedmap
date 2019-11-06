import commonjs from 'rollup-plugin-commonjs';

export default {
    input: 'index.js',
    output: {
        file: 'index.mjs',
        format: 'esm'
    },
    plugins: [commonjs()]
};
