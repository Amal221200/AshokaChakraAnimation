const circle = document.querySelector('#circle')

// let spoke = '';

// for (let mul = 0; mul < 12; mul++) {
//     spoke += `
//     <div style="transform: rotate(${15 * mul}deg);" class='spoke'>
//     </div>
//     `;
// }

// circle.innerHTML = spoke


for (let mul = 0; mul<12; mul++){
    const spoke = document.createElement('div');
    spoke.className = 'spoke';
    spoke.style.transform = `rotate(${mul*15}deg)`;
    circle.appendChild(spoke);
}

