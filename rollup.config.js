import commonjs from 'rollup-plugin-commonjs';

export default {
    input: 'index.js',
    output: {
        file: 'index.es.js',
        format: 'esm'
    },
    plugins: [commonjs()]
};
