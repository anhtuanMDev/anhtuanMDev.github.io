import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Metadata, favicon, Open Graph */}
                <link rel="icon" href="/logo.png" />
                <link rel="shortcut icon" href="/logo.png" />
                <link rel="apple-touch-icon" href="/logo.png" />
                <meta name="description" content="A curated collection of my projects, showcasing my skills, creativity, and the impact I’ve made through my work." />
                <meta property="og:title" content="Alex Vin Portfolio" />
                <meta property="og:description" content="A curated collection of my projects, showcasing my skills, creativity, and the impact I’ve made through my work." />
                <meta property="og:url" content="https://alexvin.com" />
                <meta property="og:site_name" content="Alex Vin" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:image" content="/logo.png" />
                <meta property="og:image:width" content="800" />
                <meta property="og:image:height" content="600" />
                <title>Alex Vin Portfolio</title>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}
