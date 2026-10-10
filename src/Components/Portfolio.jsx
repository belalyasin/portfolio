/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
// import image from "../images/design-desk.jpeg";
import image from "../images/red.jpg";
// import image from "../images/programming.png";

const imageAltText = "";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Technical Support System",
    description:
      "Support chat system: a Laravel 11 API with Sanctum and roles, and an Angular front end. Customers and staff chat with live updates, quick replies and user management.",
    url: "https://github.com/belalyasin/technical-support-system-api",
  },
  {
    title: "Expense Management",
    description:
      "Node.js, Express and MongoDB API with an Angular client: JWT sign-in, expense categories, a monthly dashboard and statistics.",
    url: "https://github.com/belalyasin/expense-management-api",
  },
  {
    title: "Image Manager",
    description:
      "Node.js API and Angular front end for organising images into folders, with uploads, tags and Google sign-in.",
    url: "https://github.com/belalyasin/image-manager-api",
  },
  {
    title: "Fruit Market",
    description:
      "Laravel 10 admin panel and mobile API: catalogue management, cart, orders and OTP sign-up by phone.",
    url: "https://github.com/belalyasin/fruit-market",
  },
  {
    title: "Gym Management System",
    description:
      "Laravel 9 system for packages, sessions, coaches and attendance, with Stripe payments and role-based access.",
    url: "https://github.com/belalyasin/gym-management-system",
  },
  {
    title: "Chat System",
    description:
      "Chat app in Laravel 10, Inertia.js and Vue 3: one-to-one and group conversations, unread counts and messages that arrive without reloading.",
    url: "https://github.com/belalyasin/chat-system",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
