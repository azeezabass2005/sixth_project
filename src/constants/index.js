import { money, desk, shipping, design, axioslogo, forbeslogo, fortunelogo,samsunglogo, } from "../assets"

const navLinks = [
    {
        linkName: 'OFFICE FURNITURE',
        linkAddress: 'office-furniture'
    },
    {
        linkName: 'DESIGN SERVICES',
        linkAddress: 'design-services'
    },
    {
        linkName: 'FREE INSTALLATION',
        linkAddress: 'free-installation'
    }
]

const differences = [
    {
        differenceName: 'Contract-Grade Office Furniture',
        description: 'Bliss makes desks, chairs and table more that inspire and support your team.',
        img:design,
    },
    {
        differenceName: 'Fast Design And Furnishing',
        description: 'Visualize your office with a free plan in 72 hours. Get furnished in 5-15 days.',
        img:design,
    },
    {
        differenceName: 'Free Shipping And Installation',
        description: 'Build your business, not furiture. Design delivery and installation are free.',
        img:shipping,
    },
    {
        differenceName: 'Buy Direct And Save 40%+',
        description: 'We sell direct to save you 40% vs comparable contract lilnes. No hidden fees.',
        img:money,
    },
]

const whereFeatured = [
    {
        name: 'axios',
        logo: axioslogo,
    },
    {
        name: 'forbes',
        logo: forbeslogo,
    },
    {
        name: 'fortune',
        logo: fortunelogo,
    },
    {
        name: 'samsung',
        logo: samsunglogo,
    },
]

export {
    navLinks,
    differences,
    whereFeatured,
}