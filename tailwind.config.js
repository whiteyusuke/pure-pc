/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  purge: {
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  },
  theme: {
    extend: {
      fontFamily: {
        default: '-apple-system,BlinkMacSystemFont,"Segoe UI","Hiragino Sans","Hiragino Kaku Gothic ProN",Meiryo,sans-serif',
      },
      colors: {
        'font-gray': '#747474',
        'font-thin-gray': '#888787',
        'border-gray': '#E2E2E2',
        'border-thin-gray': '#D4D4D4',
        'border-dark-gray': '#E0E0E0',
        'back-gray': '#EFEFEF',
        'number-1': '#FFCC21',
        'new-icon': '#FFF000',
        'light-blue': '#47AFFF',
        'border-red': '#E71212',
        'dark-gray': '#BDBDBD',
        'status-red': '#e81212',
        'light-yellow': '#FFF001',
        orange: '#FF7E00',
        red: '#FF0000',
        primary: '#FD306A',
        secondary: '#E81212',
        blue: '#47AFFF',
        base: '#333333',
        yellow: '#FDC130',
        green: '#58B000',
      },
      width: {
        50: '50px',
        190: '190px',
        1100: '1100px',
        680: '680px',
      },
      height: {
        30: '30px',
        36: '36px',
        46: '46px',
        50: '50px',
        'underline': '2px',
      },
      borderRadius: {
        2: '2px',
        4: '4px',
        8: '8px',
        12: '12px',
        30: '30px',
        half: '50%'
      },
      borderWidth: {
        46: '46px',
        5: '5px',
        6: '6px'
      },
      fontSize: {
        fz10: '10px',
        fz12: '12px',
        fz14: '14px',
        fz16: '16px',
        fz18: '18px',
        fz20: '20px',
        fz24: '24px',
        fz28: '28px',
        fz30: '30px',
        fz34: '34px',
      },
      lineHeight: {
        lh10: '10px',
        lh12: '12px',
        lh14: '14px',
        lh16: '16px',
        lh17: '17px',
        lh18: '18px',
        lh20: '20px',
        lh23: '23px',
        lh24: '24px',
        lh25: '25px',
        lh28: '28px',
        lh43: '43px',
        lh49: '49px',
      },
      spacing: {
        'negative4': '-4px',
        2: '2px',
        4: '4px',
        5: '5px',
        6: '6px',
        8: '8px',
        10: '10px',
        12: '12px',
        15: '15px',
        16: '16px',
        20: '20px',
        24: '24px',
        28: '28px',
        36: '36px',
        40: '40px',
      },
      zIndex: {
        1: 1,
        10: 10,
        100: 100,
        1000: 1000,
        '-1': '-1',
        '-10': '-10',
        '-100': '-100',
        '-1000': '-1000',
      },
      cursor: {
        ponter: 'pointer'
      },
      inset: {
        4: '4px',
        6: '6px',
        8: '8px',
        'underline': '-3px',
        half: '50%',
      },
      opacity: {
        6: '0.6',
        8: '0.8',
        9: '0.9',
      },
      transformOrigin: {
        'underline': 'left top'
      },
    }
  },
  variants: {},
  plugins: [],
}
