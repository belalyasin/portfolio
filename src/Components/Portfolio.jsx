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

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Fruit Market web App",
    description:
      "Create and Edit and Read and Delete Category, Proudect, Sub Category and Nutrition, Update Profile the user and make Authentication by Phone Number.",
    url: "https://github.com/belalyasin/fruitmarket_app",
  },
  {
    title: "Gem Management web Project",
    description:
      "Add, Edit, Read and Delete User, Coach, TrainingSession, Session, Blog , Update User and Coach Profile.",
    url: "https://github.com/belalyasin/GemManagementProject",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://belalyasin.github.io/portfolio/#home",
    // url: "https://github.com/belalyasin/portfolio",
  },
  {
    title: "Chat System",
    description:
      "Add Login and Show Your Group and masseges and send massege and uploud Media.",
    url: "https://github.com/belalyasin/Chat_Sestem",
  },
  {
    title: "Image Manegar BackEnd (API)",
    description:
      "Create, uploude, Read, Move, Edit and Delete Folder, Uploude, Downloade, Read, Edit, Move and delete Image, Read, Update, Create, Deleate User and Update User Profile.",
    url: "https://github.com/belalyasin/ImageManegarBackEnd",
  },
  {
    title: "Image Manegar Front-End",
    description:
      "Create file, folder and auth service and model and add user model and update on topbar, user-inner,account,overview, file, folder, login, logout, register and document component.",
    url: "https://github.com/belalyasin/ImageManager",
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
