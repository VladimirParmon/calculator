export enum RouterPaths {
  MAIN = 'main',
  SETTINGS = 'settings',
  WILDCARD = '*'
}

export enum Themes {
  LIGHT = 'Light theme',
  DARK = 'Dark theme'
}

const mediaThresholds = {
  toColumn: '1200px',
  buttonsChange: '700px',
  headerChange: '600px'
};

export const lightTheme = {
  primary: '#ffffff',
  secondary: '#e5e5e5',
  accent: '#36454F',
  fontColor: '#000000',
  media: mediaThresholds
};

export const darkTheme = {
  primary: '#808080',
  secondary: '#d3d3d3',
  accent: '#36454F',
  fontColor: '#ffffff',
  media: mediaThresholds
};

export const buttons = [
  'C',
  '7',
  '8',
  '9',
  '*',
  '-',
  '4',
  '5',
  '6',
  '/',
  '+',
  '1',
  '2',
  '3',
  '%',
  '.',
  '(',
  '0',
  ')',
  '=',
  '<='
];
