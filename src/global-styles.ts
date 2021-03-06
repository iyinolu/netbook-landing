import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root {
        --primary-blue: #217BF4;
        --secondary-blue: #e7f2fe;

        --primary-dark-blue: #0A093D;
        --secondary-dark-blue: #20202D;

        --text-light-gray: #8C8C8C;
        --text-white: #E7E7E7;

        --paragraph-color-1: #656464;
        --paragraph-color-hover-1: #2B2B39;

        --app-download-section-bg: #E5F0FD;

        --footer-bg-color-1: #2B2B39;
    }
    html, body, ul {
        margin: 0;
        padding: 0;
    }
    *, *::before, *::after {
        box-sizing: border-box;
    }
    body {
        font-family: Inter, san-serif
    }
    button {
        border-style: unset;
        padding: 0;
    }
    ul {
        list-style-type: none;
    }
    h1,h2,h3,h4,h5,h6 {
        margin: 0;
    }
    p {
        margin: 0;
    }
    section {
        position: relative;
    }

    .drop-fade-in-animation {
        animation: dropfadein 1s ease;
    }

    .slide-right-in-animation {
        animation: slideright 1s ease;
    }

    @keyframes dropfadein {
        from {
            opacity: 0;
            transform: translate(0px, 90px);
        }
        to {
            opacity: 1;
            transform: translate(0px, 0px);
        }   
    }

    @keyframes slideright {
        from {
            opacity: 0;
            transform: translate(-90px, 0px);
        }
        to {
            opacity: 1;
            transform: translate(0px, 0px);
        }   
    }
`
