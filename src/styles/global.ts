import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --primary: #f0f2f5;
  --secondary: #f0f2f5;

  --danger: #f0f2f5;
  --warning: #f0f2f5;
  --success: #f0f2f5;
  --infor: #f0f2f5;

  --text-title: #f0f2f5;
  --text-body: #f0f2f5;
  
  --background: #f0f2f5;
  --shape: #f0f2f5;
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size: 16px; (fonte padrão para desktop)
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Lexend', sans-serif;
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;