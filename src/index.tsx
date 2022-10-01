import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createGlobalStyle } from "styled-components";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* *{
    -ms-overflow-style: none;
} */
::-webkit-scrollbar {
    display: none;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  line-height: 1.2;
  background-color: #1b1b1b;
  
}
a {
  text-decoration:none;
  color:inherit;
}
hr {
  width: 90%;
  color: gray;
  border: 1px solid
}


h3 {
  background: gray;
  color: #fff;
  font-size: 36px;
  line-height: 508px;
  margin: 10px;
  padding: 2%;
  position: relative;
  text-align: center;
  
}
.variable-width .slick-slide p {

  color: #fff;
  margin: 5px;
  line-height: 100px;
  text-align: center;
}
.center .slick-center h3 {
  color: #e67e22;
  opacity: 1;
  transform: scale(1.08);
}
.center h3 {
  opacity: 0.8;
  transition: all 300ms ease;
}
.content {
  padding: 20px;
  margin: auto;
  width: 90%;
}
.slick-slide .image {
  padding: 10px;
}
.slick-slide img {
  border: 5px solid #fff;
  display: block;
  margin: auto;
  
}
.slick-slide img.slick-loading {
  border: 0;
}
.slick-slider {
  margin: 30px auto 50px;
  width: 1240px;
  display:flex;
  justify-content:center;
  align-items:center;
  
}
.slick-dots {
  margin-left: 0;
}
.slick-dots li button:before {
    color: gray;
}
.slick-dots li.slick-active button:before {
    color:white !important;
}
.slick-thumb {
  bottom: -45px;
}
.slick-thumb li {
  width: 60px;
  height: 45px;
}
.slick-thumb li img {
  filter: grayscale(100%);
}
.slick-thumb li.slick-active img {
  filter: grayscale(0%);
}
@media (max-width: 768px) {
  h3 {
    font-size: 24px;
  }
  .center {
    margin-left: -40px;
    margin-right: -40px;
  }
  .center .slick-center h3 {
    color: #e67e22;
    opacity: 1;
    transform: scale(1);
  }
  .center h3 {
    opacity: 0.8;
    transform: scale(0.95);
    transition: all 300ms ease;
  }
}
.slick-vertical .slick-slide {
  height: 180px;
}
.slick-arrow {
}
.slick-arrow:hover {
}
.slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-slide div {
    cursor: pointer;
  }
/* .slick-prev {
  z-index: 100;
  left: 20px !important;
}
.slick-next {
  z-index: 100;
  right: 20px !important;

} */

`;

root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
