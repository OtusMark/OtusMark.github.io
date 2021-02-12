export type ThemeType = typeof theme;

export const theme = {
    color: {
        primary: '#99d0fb',
        black: '#010606',
        white: '#fff'
    },
    font: {
        source: `https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Roboto&display=swap`,
        family: {
            default: `'Roboto', sans-serif;`,
            montserrat: `'Montserrat', sans-serif;`
        },
        size: {
            default: '16px', // https://type-scale.com/ - Major third
            fs1: '1.25rem', // 20.00px
            fs2: '1.563rem', // 25.00px
            fs3: '1.953rem', // 31.25px
            fs4: '2.441rem', // 39.06px
            fs5: '3.052rem' // 48.83px
        }
    },
    mediaQueries: {
        smallMax: '480px',
        mediumMax: '768px',
        bigMax: '960px'
    }
};