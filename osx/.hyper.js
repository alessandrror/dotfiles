// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

module.exports = {
  config: {
    // choose either  for receiving highly polished,
    // or  for less polished but more frequent updates
    updateChannel: 'stable',

    // default font size in pixels for all tabs
    fontSize: 10,

    // font family with optional fallbacks
    fontFamily: 'Fira Code Light',

    // default font weight: 'normal' or 'bold'
    fontWeight: 'normal',

    // font weight for bold characters: 'normal' or 'bold'
    fontWeightBold: 'bold',

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: 'rgba(248,28,229,1)',

    // terminal text color under BLOCK cursor
    cursorAccentColor: '#000',

    //  for |,  for _,  for █
    cursorShape: 'UNDERLINE',

    // set to  (without backticks and without quotes) for blinking cursor
    cursorBlink: true,

    // color of the text
    foregroundColor: '#fff',

    // terminal background color
    // opacity is only supported on macOS
    backgroundColor: 'rgba(0,0,0,1)',

    // terminal selection color
    selectionColor: 'rgba(0,0,0,1)',

    // border color (window, tabs)
    borderColor: '#000',

    // custom CSS to embed in the main window
    css: '',

    // custom CSS to embed in the terminal window
    termCSS: '',

    // if you're using a Linux setup which show native menus, set to false
    // default:  on Linux,  on Windows, ignored on macOS
    showHamburgerMenu: '',

    // set to  (without backticks and without quotes) if you want to hide the minimize, maximize and close buttons
    // additionally, set to  if you want them on the left, like in Ubuntu
    // default:  (without backticks and without quotes) on Windows and Linux, ignored on macOS
    showWindowControls: '',

    // custom padding (CSS format, i.e.: )
    padding: '0 6px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      black: '#000000',
      red: '#C51E14',
      green: '#1DC121',
      yellow: '#C7C329',
      blue: '#0A2FC4',
      magenta: '#C839C5',
      cyan: '#20C5C6',
      white: '#C7C7C7',
      lightBlack: '#686868',
      lightRed: '#FD6F6B',
      lightGreen: '#67F86F',
      lightYellow: '#FFFA72',
      lightBlue: '#6A76FB',
      lightMagenta: '#FD7CFC',
      lightCyan: '#68FDFE',
      lightWhite: '#FFFFFF',
    },

    // MaterialTheme: {
    //   // Set the theme variant,
    //   // OPTIONS: 'Darker', 'Palenight', ''
    //   theme: 'Palenight',

    //   // [Optional] Set the rgba() app background opacity, useful when enableVibrance is true
    //   // OPTIONS: From 0.1 to 1
    //   backgroundOpacity: '0.5',

    //   // [Optional] Set the accent color for the current active tab
    //   accentColor: '#64FFDA',

    //   // [Optional] Mac Only. Need restart. Enable the vibrance and blurred background
    //   // OPTIONS: 'dark', 'ultra-dark', 'bright'
    //   // NOTE: The backgroundOpacity should be between 0.1 and 0.9 to see the effect.
    //   vibrancy: 'ultra-dark'
    // },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    //
    // Windows
    // - Make sure to use a full path if the binary name doesn't work
    // - Remove  in shellArgs
    //
    // Bash on Windows
    // - Example: 
    //
    // PowerShell on Windows
    // - Example: 
    shell: '/bin/zsh',

    // for setting shell arguments (i.e. for using interactive shellArgs: )
    // by default  will be used
    shellArgs: ['--login'],

    // for environment variables
    env: {},

    // set to  for no bell
    bell: 'SOUND',

    // if  (without backticks and without quotes), selected text will automatically be copied to the clipboard
    copyOnSelect: false,

    // if  (without backticks and without quotes), hyper will be set as the default protocol client for SSH
    defaultSSHApp: true,

    // if  (without backticks and without quotes), on right click selected text will be copied or pasted if no
    // selection is present ( by default on Windows and disables the context menu feature)
    // quickEdit: true,

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // for advanced config flags please refer to https://hyper.is/#cfg
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   
  //   
  //   
  plugins: ['hyper-font-ligatures'],

  // in development, you can create a directory under
  //  and include it here
  // to load it and avoid it being ed
  localPlugins: [],

  keymaps: {
    // Example
    // 'window:devtools': 'cmd+alt+o',
  },
};
