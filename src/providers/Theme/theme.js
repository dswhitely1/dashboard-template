import { createMuiTheme } from '@material-ui/core';

const hexToRgb = input => {
  const color = input.replace('#', '');
  const hexRegex = /[0-9A-Fa-f]/g;
  if (!hexRegex.test(color) || (color.length !== 3 && color.length !== 6)) {
    throw new Error('input is not a valid hex color.');
  }
  const first = color.length === 3 ? color[0] + color[0] : color[0] + color[1];
  const middle = color.length === 3 ? color[1] + color[1] : color[2] + color[3];
  const last = color.length === 3 ? color[2] + color[2] : color[4] + color[5];
  return `${parseInt(first, 16)}, ${parseInt(middle, 16)}, ${parseInt(
    last,
    16
  )}`;
};
const drawerWidth = {
  default: 260,
  mini: 80,
};
const transition = {
  transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
};
const containerFluid = {
  paddingRight: 15,
  paddingLeft: 15,
  marginRight: 'auto',
  marginLeft: 'auto',
  '&:before,&:after': {
    display: 'table',
    content: '" "',
  },
  '&:after': {
    clear: 'both',
  },
};
const containerDefault = {
  ...containerFluid,
  '@media (min-width: 768px)': {
    width: '750px',
  },
  '@media (min-width: 992px)': {
    width: '970px',
  },
  '@media (min-width: 1200px)': {
    width: '1170px',
  },
};
const container = {
  default: containerDefault,
  fluid: containerFluid,
};
const font = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: 300,
  lineHeight: 1.5,
};
const primaryColor = ['#9c27b0', '#ab47bc', '#8e24aa', '#af2cc5', '#7b1fa2'];
const warningColor = [
  '#ff9800',
  '#ffa726',
  '#fb8c00',
  '#ffa21a',
  '#f57c00',
  '#faf2cc',
  '#fcf8e3',
];
const dangerColor = [
  '#f44336',
  '#ef5350',
  '#e53935',
  '#f55a4e',
  '#d32f2f',
  '#ebcccc',
  '#f2dede',
];
const successColor = [
  '#4caf50',
  '#66bb6a',
  '#43a047',
  '#5cb860',
  '#388e3c',
  '#d0e9c6',
  '#dff0d8',
];
const infoColor = [
  '#00acc1',
  '#26c6da',
  '#00acc1',
  '#00d3ee',
  '#0097a7',
  '#c4e3f3',
  '#d9edf7',
];
const secondaryColor = ['#e91e63', '#ec407a', '#d81b60', '#eb3573', '#c2185b'];
const grayColor = [
  '#999',
  '#777',
  '#3C4858',
  '#AAAAAA',
  '#D2D2D2',
  '#DDD',
  '#555555',
  '#333',
  '#eee',
  '#ccc',
  '#e4e4e4',
  '#E5E5E5',
  '#f9f9f9',
  '#f5f5f5',
  '#495057',
  '#e7e7e7',
  '#212121',
  '#c8c8c8',
  '#505050',
];
const blackColor = '#000';
const whiteColor = '#FFF';
const twitterColor = '#55acee';
const facebookColor = '#3b5998';
const googleColor = '#dd4b39';
const linkedinColor = '#0976b4';
const pinterestColor = '#cc2127';
const youtubeColor = '#e52d27';
const tumblrColor = '#35465c';
const behanceColor = '#1769ff';
const dribbbleColor = '#ea4c89';
const redditColor = '#ff4500';
const palette = {
  primary: primaryColor,
  secondary: secondaryColor,
  warning: warningColor,
  danger: dangerColor,
  success: successColor,
  info: infoColor,
  gray: grayColor,
};
const paletteTwo = {
  black: blackColor,
  white: whiteColor,
  twitter: twitterColor,
  facebook: facebookColor,
  google: googleColor,
  linkedIn: linkedinColor,
  pinterest: pinterestColor,
  youtube: youtubeColor,
  tumblr: tumblrColor,
  behance: behanceColor,
  dribbble: dribbbleColor,
  reddit: redditColor,
  github: grayColor[6],
};
const colorBoxShadow = key => ({
  boxShadow: `0 4px 20px 0 rgba(${hexToRgb(
    blackColor
  )},0.14), 0 7px 10px -5px rgba(${hexToRgb(palette[key][0])}, 0.4)`,
});
const boxShadow = {
  default: {
    border: 0,
    borderRadius: 3,
    boxShadow: `0 10px 20px -12px rgba(${hexToRgb(
      blackColor
    )}, 0.42), 0 3px 20px 0 rgba(${hexToRgb(
      blackColor
    )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(blackColor)}, 0.2)`,
    padding: '10px 0',
    transition: 'all 150ms ease 0s',
  },
  normal: {
    boxShadow: `0 10px 30px -12px rgba(${hexToRgb(
      blackColor
    )}, 0.42), 0 4px 25px 0 rgba(${hexToRgb(
      blackColor
    )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(blackColor)}, 0.2)`,
  },
  primary: colorBoxShadow('primary'),
  secondary: colorBoxShadow('secondary'),
  success: colorBoxShadow('success'),
  info: colorBoxShadow('info'),
  warning: colorBoxShadow('warning'),
  danger: colorBoxShadow('danger'),
};
const cardHeaderColor = key => ({
  background: `linear-gradient(60deg, ${palette[key][1]}, ${palette[key][2]})`,
  ...boxShadow[key],
});
const cardHeader = {
  primary: cardHeaderColor('primary'),
  secondary: cardHeaderColor('secondary'),
  success: cardHeaderColor('success'),
  info: cardHeaderColor('info'),
  warning: cardHeaderColor('warning'),
  danger: cardHeaderColor('danger'),
};
const card = {
  display: 'inline-block',
  position: 'relative',
  width: '100%',
  margin: '25px 0',
  boxShadow: `0 1px 4px 0 rgba(${hexToRgb(blackColor)}, 0.14)`,
  borderRadius: 6,
  color: `rgba(${hexToRgb(blackColor)}, 0.87)`,
  background: whiteColor,
};
const actions = {
  margin: '0 20px 10px',
  paddingTop: 10,
  borderTop: `1px solid ${palette.gray[8]}`,
  height: 'auto',
  ...font,
};
const header = {
  margin: '-20x 15px 0',
  borderRadius: 3,
  padding: 15,
};
const title = {
  color: grayColor[2],
  textDecoration: 'none',
  fontWeight: 300,
  marginTop: 30,
  marginBottom: 35,
  minHeight: 32,
  fontFamily: font.fontFamily,
  '& small': {
    color: grayColor[1],
    fontSize: '65%',
    fontWeight: 400,
    lineHeight: 1,
  },
};
const cardTitle = {
  ...title,
  marginTop: 0,
  marginBottom: 3,
  minHeight: 'auto',
  '& a': {
    ...title,
    marginTop: '.625rem',
    marginBottom: '0.75rem',
    minHeight: 'auto',
  },
};
const subTitle = {
  marginTop: '-.375rem',
};
const cardLink = {
  '& $cardLink': {
    marginLeft: '1.25rem',
  },
};
const cards = { card, actions, header, title: cardTitle, subTitle, cardLink };
const tooltip = {
  padding: '10px 15px',
  minWidth: 130,
  color: whiteColor,
  lineHeight: 1.7,
  background: `rgba(${hexToRgb(grayColor[6])}, 0.9)`,
  border: 'none',
  opacity: '1 !important',
  boxShadow: `0 8px 10px 1px rgba(${hexToRgb(
    blackColor
  )}, 0.14), 0 3px 14px 2px rgba(${hexToRgb(
    blackColor
  )}, 0.12), 0 5px 5px -3px rgba(${hexToRgb(blackColor)}, 0.2)`,
  maxWidth: 200,
  textAlign: 'center',
  fontFamily: '"Helvetica Neue", "Helvetica", "Arial", sans-serif',
  fontSize: 12,
  fontStyle: 'normal',
  fontWeight: 400,
  textShadow: 'none',
  textTransform: 'none',
  letterSpacing: 'normal',
  wordBreak: 'normal',
  wordSpacing: 'normal',
  wordWrap: 'normal',
  whiteSpacing: 'normal',
  lineBreak: 'auto',
};
const styles = { tooltip, title };
const dashboard = {
  hexToRgb,
  drawerWidth,
  transition,
  container,
  font,
  palette,
  paletteTwo,
  boxShadow,
  cardHeader,
  cards,
  styles,
};
const theme = { dashboard };
// @ts-ignore
export default createMuiTheme(theme);
