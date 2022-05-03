const DEFAULT_THEME = {
    // put the default values of any config you want themed
    // just as if you were to extend tailwind's theme like normal https://tailwindcss.com/docs/theme#extending-the-default-theme
    colors: {
        primary: {
            base: "#194BFB",
            dim: "#003CBE",
            100: "#E8EDFF",
            200: "#BFCDFF",
            300: "#95ADFF",
            400: "#436CFF"
        },
        secondary: {
            base: "#1A202C",
            100: "#F2F6FF",
            200: "#D8E3F8",
            300: "#96A3BE",
            400: "#5D6A83"
        },
        success: {
            base: "#22C55E",
            light: "#4ADE80",
            dark: "#16A34A",
        },
        error: {
            base: "#FF7171",
            light: "#FF4747",
            dark: "#DD3333",
        },
        gray: {
            50: "#FAFAFA",
            100: "#F7FAFC",
            200: "#EDF2F7",
            300: "#E2E8F0",
            400: "#CBD5E0",
            500: "#A0AEC0",
            600: "#718096",
            700: "#2A313C",
            800: "#232B38",
            900: "#1A202C"
        },
        orange: "#FF784B",
        amber: "#FFC837",
        purple: "#936DFF"
    },
    fontWeight: {
        extrabold: 800,
        semibold: 600,
        medium: 500,
        regular: 400
    },
    fontSize: {
        xl: '18px',
        lg: '16px',
        md: '14px',
        sm: '12px',
        xs: '10px'
    },
    borderRadius: {
        btnlg: '12px',
        btnsm: '8px'
    }
}
const THEMES = {
    defaultTheme: {
        extend: {
            ...DEFAULT_THEME
        }
    },
    themes: [
        {
            name: "light",
            extend: {
                ...DEFAULT_THEME
            }
        }
    ]
}


module.exports = THEMES;