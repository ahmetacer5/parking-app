import { Theme } from 'theme-ui';

const theme: Theme = {
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    fonts: {
        body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        heading: 'inherit',
        monospace: 'Menlo, monospace',
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
    radii: [0, 4, 8, 16, 32, 64],
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.125,
    },
    colors: {
        text: '#000',
        background: '#fff',
        primary: '#07c',
        secondary: '#30c',
        muted: '#f6f6f6',
        unavailable: '#FF0000',
        available: '#00FF10',
    },
    buttons: {
        primary: {
            color: 'background',
            bg: 'primary',
            cursor: 'pointer',
            '&:hover': {
                bg: 'text',
            },
        },
        secondary: {
            cursor: 'pointer',
            color: 'background',
            bg: 'secondary',
        },
        tiny: {
            variant: 'buttons.primary',
            p: 0,
        },
    },
    text: {
        default: {
            color: 'text',
            fontSize: 3,
        },
        caps: {
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
        },
        heading: {
            fontFamily: 'heading',
            fontWeight: 'heading',
            lineHeight: 'heading',
        },
        availabilityNumber: {
            variant: 'styles.h3',
            m: 0,
        },
        tableCell: {
            fontSize: 2,
            lineHeight: 'heading',
        },
    },
    styles: {
        root: {
            fontFamily: 'body',
            lineHeight: 'body',
            fontWeight: 'body',
        },
        h1: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 5,
        },
        h2: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 4,
        },
        h3: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 3,
        },
        h4: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 2,
        },
        h5: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 1,
        },
        h6: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 0,
        },
        p: {
            color: 'text',
            fontFamily: 'body',
            fontWeight: 'body',
            lineHeight: 'body',
        },
        a: {
            color: 'primary',
        },
        pre: {
            fontFamily: 'monospace',
            overflowX: 'auto',
            code: {
                color: 'inherit',
            },
        },
        code: {
            fontFamily: 'monospace',
            fontSize: 'inherit',
        },
        table: {
            width: '100%',
            borderCollapse: 'separate',
            borderSpacing: 0,
        },
        th: {
            textAlign: 'left',
            borderBottomStyle: 'solid',
        },
        td: {
            textAlign: 'left',
            borderBottomStyle: 'solid',
        },
        img: {
            maxWidth: '100%',
        },
        availabilityCard: {
            gridTemplateColumns: 'repeat(4,auto)',
            columnGap: 3,
            svg: { height: '32px' },
            span: {
                fontSize: 4,
                fontWeight: 'bold',
            },
            div: {
                gridTemplateColumns: '1',
                rowGap: 2,
            },
            placeItems: 'center',
            textAlign: 'center',
            px: 3,
            py: 2,
        },
        parkingFloor: {
            gridTemplateColumns: ['1', 'auto 300px'],
            h2: { m: 0 },
            px: 4,
            py: 3,
            border: 'solid 2px gray',
            borderRadius: 2,
        },
    },
};

export default theme;
