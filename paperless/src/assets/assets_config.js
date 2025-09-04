import logo from "./logo.svg";
import header from "./header_img.svg";
import sun from "./sun.svg";
import moon from "./moon.svg";
import header_dark from "./header_img_dark.svg";
import dark_logo from "./dark_logo.svg";
import eclipse from "./eclipse.png";
import login from "./login_thumbnail.svg";
import signin from "./signin_thumbnail.svg";
import search from "./search.png";
import addFile from "./addFile.svg";
import file from "./file.svg";
import favorites from "./favorites.svg";
export const assets = {
  logo,
  header,
  sun,
  moon,
  dark_logo,
  header_dark,
  eclipse,
  login,
  signin,
  search,
  addFile,
  file,
  favorites,
};

//samples of recently added PDFS;
export const recentlyAdded = [
  {
    img: file,
    title: "certificate",
    date: "12-09-2021",
  },
  {
    img: file,
    title: "certificate",
    date: "12-09-2021",
  },
  {
    img: file,
    title: "certificate",
    date: "12-09-2021",
  },
];

//all documents added in paperless;
export const documents = [
  { img: file, text: "Birth certificate" },
  { img: file, text: " Title Deed" },
  { img: file, text: "National ID" },
  { img: file, text: "Slip" },
];
