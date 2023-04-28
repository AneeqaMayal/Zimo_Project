import {StyleSheet} from 'react-native';

const primaryColor = '#242A38';
const secondaryColor = '#ffffff';

const container = StyleSheet.create({
  main_View:{
    flex: 1, backgroundColor: '#242A38'
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {
  container,
};

//////Added Updated Styles

// const primaryColor = '#198754'
const secondryColor = '#FFFFFF';
const textColor = '#606060';
const textColorDim = '#BBBBBB';
const transparent = '#00000000';
const white = '#FFFFFF';
const black = 'black';
const dimPrimaryColor = '#F5FFFC';


const headings = StyleSheet.create({
  h1: {...textFont, fontSize: 30, color: textColor},
  h1s: {fontSize: 30, color: textColor, fontFamily: 'Hello Valentica Regular'},
  h2: {...mediumTextFont, fontSize: 24, color: textColor},
  h2b: {...boldTextFont, fontSize: 24, color: textColor},
  h3: {...mediumTextFont, fontSize: 22, color: textColor},
  h4: {...mediumTextFont, fontSize: 20, color: textColor},
  h4b: {...boldTextFont, fontSize: 20, color: textColor},
  h5: {...textFont, fontSize: 18, color: textColor},
  h5b: {...boldTextFont, fontSize: 18, color: textColor},
  h5M: {...mediumTextFont, fontSize: 18, color: textColor},
  h6: {...textFont, fontSize: 16, color: textColor},
  h6M: {...mediumTextFont, fontSize: 16, color: textColor},
  h7: {...mediumTextFont, fontSize: 14, color: textColor},
  h7M: {...mediumTextFont, fontSize: 14, color: textColor},
  h8: {...textFont, fontSize: 12, color: textColor},
  h8M: {...mediumTextFont, fontSize: 12, color: textColor},
  h9: {...textFont, fontSize: 10, color: textColor},
  sh6: {...stylishTextFont, fontSize: 30, color: textColor},
});
const Colors = {
  gray: '#929292',
  lightgrey: '#F4F4F4',
  darkgrey: '#515151',
  golden: '#FFD213',
  black: '#000000',
  lightsky: '#D4FFF2',
  lightGreen: '#F5FFFC',
  redFaded: 'rgba(255,0,0,0.4)',
  red: 'rgb(155,0,0)',
  iconColor: '#198754',
};


const shadow = StyleSheet.create({
  whiteShadow: {
    shadowColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});

export {
  textColorDim,
  dimPrimaryColor,
  secondryColor,
  white,
  textColor,
  headings,
  shadow,
  transparent,
  Colors,
  black,
};
