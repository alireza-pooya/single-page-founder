const firstSvg  = "M2046.5 0H0.5V807C176.833 761.5 633.1 697.8 1047.5 807C1461.9 916.2 1886.17 843.5 2046.5 793.5V0Z";
const secondSvg = "M2046.5 0H0.5V807C163 837 635.933 926.433 1047.5 807C1414.5 700.5 1872.5 763.5 2046.5 793.5V0Z";

const svg = document.querySelector('.headerSvg');
let animate = false;

const timeline = anime.timeline({
    duration: 15000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutQuad'
})

timeline.add({
    targets: '.svgPath',
    d: [
        { value: secondSvg }
    ]
})