import { Theme } from 'theme-ui';

const theme: Theme = {
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    fonts: {
        body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        heading: 'inherit',
        monospace: 'Menlo, monospace',
    },
    fontSizes: [8, 12, 14, 16, 20, 24, 32, 48, 64, 96],
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
        gray: '#7c7c7c',
        unavailable: '#FF0000',
        available: '#00FF10',
        error: '#FF0000',
    },
    buttons: {
        base: {
            cursor: 'pointer',
            borderRadius: 1,
            '&:hover': {
                bg: 'text',
            },
            '&:disabled': {
                bg: 'muted',
                color: 'text',
                cursor: 'not-allowed',
            },
        },
        primary: {
            variant: 'buttons.base',
            color: 'background',
            bg: 'primary',
        },
        secondary: {
            variant: 'buttons.base',
            color: 'background',
            bg: 'secondary',
        },
        tiny: {
            variant: 'buttons.primary',
            p: 0,
        },
        text: {
            variant: 'buttons.base',
            bg: 'background',
            color: 'primary',
            px: 2,
            py: 1,
            '&:hover': {
                color: 'text',
            },
            '&:disabled': {
                color: 'gray',
                cursor: 'not-allowed',
            },
        },
    },
    cards: {
        primary: {
            py: 2,
            px: 4,
            borderRadius: 4,
            boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
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
        smallText: {
            fontSize: 2,
        },
    },
    forms: {
        input: {
            borderRadius: 1,
        },
        select: {
            borderRadius: 1,
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
            columnGap: 1,
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
            px: 0,
            py: 0,
        },
        parkingFloor: {
            gridTemplateColumns: ['1', 'auto 300px'],
            h2: { m: 0 },
            px: 2,
            py: 2,
            border: 'solid 2px gray',
            borderRadius: 2,
        },
        vehicleListGrid: {
            textAlign: 'left',
            gridTemplateColumns: ['1fr 1fr 1fr 1fr 1fr auto'],
            gridTemplateRows: 'auto',
            rowGap: 2,
            gridAutoRows: 'auto',
            alignItems: 'center',
        },
    },
};

export default theme;
