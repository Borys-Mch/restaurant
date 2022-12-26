import { dish1, dish2, dish3, dish4 } from "../assets";

export const navBar = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "events",
    title: "Events",
  },
  {
    id: "gallery",
    title: "Gallery",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const footerNavigation = [
  {
    id: "menu",
    title: "Menu",
  },
  {
    id: "about",
    title: "About us",
  },
  {
    id: "contact",
    title: "Contact us",
  },
  {
    id: "maindishes",
    title: "Main dishes",
  },
];

export const footerDishes = [
  {
    id: "fish",
    title: "Fish & Viggies",
  },
  {
    id: "tofu",
    title: "Tofu Chili",
  },
  {
    id: "egg",
    title: "Egg & Cocumber",
  },
  {
    id: "lumpia",
    title: "Lumpia w/Suace",
  },
];

export const dishes = [
  {
    slug: "lumpia",
    title: "Lumpia with Suace",
    descr:
      "Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor",
    price: "14",
    img: `${dish1}`,
  },
  {
    slug: "fish",
    title: "Fish and Veggie",
    descr:
      "Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor",
    price: "10",
    img: `${dish2}`,
  },
  {
    slug: "tofu",
    title: "Tofu Chili",
    descr:
      "Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor",
    price: "12",
    img: `${dish3}`,
  },
  {
    slug: "egg",
    title: "Egg and Cocumber",
    descr:
      "Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor",
    price: "11",
    img: `${dish4}`,
  },
];
