const colors = {
  blue: '#275b71',
  darkGrey: '#555555',
  lightGrey: '#A9A3A3',
  white: '#FFF',
};

const fonts = {
  raleway: '\'Raleway\', sans-serif;',
  openSans: '\'Open Sans\', sans-serif;',
};

const animations = {
  fadeIn0_1: `@-o-keyframes fadeIn0_1 { 0% { opacity: 0; } 100% { opacity: 0.1; } }
  @-moz-keyframes fadeIn0_1 { 0% { opacity: 0; } 100%{ opacity: 0.1; } }
  @-webkit-keyframes fadeIn0_1 { 0% { opacity: 0; } 100% { opacity: 0.1; } }
  @keyframes fadeIn0_1 { 0% { opacity: 0; } 100% { opacity: 0.1; } }`,
  fadeInFull: `@-o-keyframes fadeInFull { 0% { opacity: 0; } 100% { opacity: 1; } }
  @-moz-keyframes fadeInFull { 0% { opacity: 0; } 100%{ opacity: 1; } }
  @-webkit-keyframes fadeInFull { 0% { opacity: 0; } 100% { opacity: 1; } }
  @keyframes fadeInFull { 0% { opacity: 0; } 100% { opacity: 1; } }`,
  slightFadeInOut: `@-o-keyframes slightFade { 0% { opacity:0.4; } 50% { opacity:0.75; } 100% { opacity:0.4; } }
  @-moz-keyframes slightFade { 0% { opacity:0.4; } 50% { opacity:0.75; } 100% { opacity:0.4; } }
  @-webkit-keyframes slightFade { 0% { opacity:0.4; } 50% { opacity:0.75; } 100% { opacity:0.4; } }
  @keyframes slightFade { 0% { opacity:0.4;} 50%  { opacity:0.75; } 100%  { opacity:0.4; } }`,
  deepFadeInOut: `@-o-keyframes deepFade { 0% { opacity:0; } 50% { opacity:1; } 100% { opacity:0; } }
  @-moz-keyframes deepFade { 0% { opacity:0; } 50% { opacity:1; } 100% { opacity:0; } }
  @-webkit-keyframes deepFade { 0% { opacity:0; } 50% { opacity:1; } 100% { opacity:0; } }
  @keyframes deepFade { 0% { opacity:0;} 50%  { opacity:1; } 100%  { opacity:0; } }`,
  spin: `@-o-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
  @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
  @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
  @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }`,
};

export { colors, fonts, animations };
