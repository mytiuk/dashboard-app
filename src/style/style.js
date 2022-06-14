const light = {
  '--color1': '#287bff',
  '--color2': '#fff',
  '--color3': '#999',
  '--color4': '#222',
   '--bg': '#fff',
   '--tg': '#000',
   '--shd': 'rgba(0, 0, 0, 0.1)',
   '--st': '#fff'
}

const dark = {
  '--color1': '#000',
  '--color2': '#D5D6D6',
  '--color3': '#999',
  '--color4': '#d5d5d5',
  '--bg': '#333',
  '--tg': '#fff',
  '--shd': 'rgba(0, 0, 0, 0.2)',
  '--st': '#000'
}

export const themeHandler = (turn) => {
  let style = {}

  if(turn) {
   style = dark
   
  } else {
    style = light
  }
  return style
}