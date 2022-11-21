const withTM = require('next-transpile-modules')([
    'three',
    '@react-three/fiber',
    '@react-three/cannon',
    '@react-three/drei',
    'gsap',
    'locomotive-scroll'
]);
const withImages = require('next-images');

module.exports = withTM(withImages());
