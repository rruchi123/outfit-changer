const dresses = [
  // Pink Gown
  {
    svg: `
      <path d="M80 200 Q150 360 220 200 Q270 440 150 500 Q30 440 80 200 Z" fill="#ff8ecb" stroke="#e75480" stroke-width="4"/>
      <ellipse cx="150" cy="205" rx="35" ry="20" fill="#fff0fa" opacity="0.5"/>
      <ellipse cx="150" cy="178" rx="28" ry="23" fill="#ff8ecb" stroke="#e75480" stroke-width="2"/>
      <rect x="136" y="198" width="28" height="14" rx="7" fill="#e75480"/>
    `
  },
  // Blue Dress
  {
    svg: `
      <path d="M90 210 Q150 360 210 210 Q250 430 150 490 Q50 430 90 210 Z" fill="#7ecbff" stroke="#497cbe" stroke-width="4"/>
      <ellipse cx="150" cy="215" rx="32" ry="15" fill="#e0f7ff" opacity="0.4"/>
      <ellipse cx="150" cy="185" rx="25" ry="20" fill="#7ecbff" stroke="#497cbe" stroke-width="2"/>
      <rect x="138" y="205" width="24" height="12" rx="6" fill="#6ab7ff"/>
    `
  }
];

function changeDress(index) {
  document.getElementById('dress-group').innerHTML = dresses[index].svg;
}
window.onload = function() { changeDress(0); };