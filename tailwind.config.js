const plugin = require("tailwindcss/plugin")
const _ = require("lodash");

const gradient = plugin(function({ addUtilities, e, theme, variants }) {
    const gradients = theme("gradients", {})
    const gradientVariants = variants("gradients", [])

    const utilities = _.map(gradients, ([start, end], name) => ({
        [`.bg-gradient-${e(name)}`]: {
            backgroundImage: `linear-gradient(to right, ${start}, ${end})`,
        },
    }))

    addUtilities(utilities, gradientVariants)
})


module.exports = {
    theme: {
        gradients: theme => ({
            primary: [theme("colors.primary"), theme("colors.secondary")],
        }),
        themes: {
            dark: {
                bg: "#111",
                "color-default": "#eee",
                "color-1": "#c35fde",
                "color-2": "#adbfef",
                border: "#718096",
                primary: "#1A202C",
                bgalt: "#2D3748",
            },
        },
        colors: {
            bg: "#fff",
            bgalt: "#f5f5f5",
            "color-default": "#333",
            "color-1": "#8e24aa",
            "color-2": "#673ab7",
            "color-3": "#687187",
            primary: "#f55555",
            secondary: "#6888df",
            link: "#0a71c5",
            white: "#fff",
            black: "#000"
        },
        extend: {
            fontSize: {
                '7xl': '5rem'
            },
            spacing: {
                '1px': '1px',
                '2px': '2px'
            }
        },
    },
    variants: {},
    plugins: [require(`tailwind-theme-switcher`), gradient],
}

