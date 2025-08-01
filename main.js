const projects = [
  {
    id: -1,
    title: "Document generation and distribution system",
    description: `In one of my projects at Netcompany, I designed and built a document generation and distribution system for one of the largest banks in the Nordics. I worked closely with the client and later took full ownership of the system during handover as a track lead.`,
    resource: "media/bank.webp",
    resourceSmall: "media/bank_small.webp",
    video: false,
    tech: ["Java", "Spring Boot", "Azure", "Azure SQL", "Docker", "OmniDocs"],
  },
  {
    id: 0,
    title: "ExtLect",
    description: `In a team of 4 system developers and 1 information architect we developed this web app ordered by Malmö University. The university lacked a systematical way for students to find and join external lectures (guest lectures) and because of this the number of visitors were low. It was also difficult for the staff to manage the lectures as mails had to be sent forth and back. The result was this web app where students and staff at Malmö University can login to find and manage external lectures. To attract students, certificates are generated for participated lectures. `,
    resource: "media/exlect.webp",
    resourceSmall: "media/exlect_small.webp",
    video: false,
    link: "https://extlect.mau.se",
    tech: ["Next.js", "Material UI", "MongoDB", "Docker"],
  },
  {
    id: 1,
    title: "Multi-Target Pathfinding: Evaluating A-star Versus BFS",
    description: `This project was developed during my bachelor thesis at Malmö University. The aim was to compare the performance of the Breadth-First Search (BFS) algorithm and the A* algorithm in multi-target pathfinding. A simulation framework was developed in Java providing controlled simulation of the algorithms. The results showed that the BFS algorithm was faster than the A* algorithm in most multi-target cases, with the exition of very large grids.`,
    resource: "media/thesis_video.mp4",
    resourceSmall: "media/thesis_video_small.mp4",
    thumbnail: "media/thumbnails/thesis.webp",
    video: true,
    link: "https://github.com/sime3134/pathfinding_simulation",
    tech: ["Java"],
  },
  {
    id: 2,
    title: "Where did I put that?",
    description: `I developed this Android application during a course at Umeå University. The app is designed to help the user remember where they put their belongings. The user can add several addresses, rooms, storage units and posessions to the app to later find them using the search function or browing through all locations.`,
    resource: "media/where.mp4",
    resourceSmall: "media/where_small.mp4",
    thumbnail: "media/thumbnails/where.webp",
    video: true,
    link: "https://github.com/sime3134/WhereDidIPutThat",
    tech: ["Kotlin", "Android"],
  },
  {
    id: 3,
    title: "g-calendar-fetcher",
    description: `A simple JavaScript library designed to simplify the process of fetching, parsing, and displaying events from Google Calendar ical URLS.`,
    resource: "media/calendarfetcher.webp",
    resourceSmall: "media/calendarfetcher_small.webp",
    video: false,
    link: "https://github.com/sime3134/g-calendar-fetcher",
    tech: ["JavaScript"],
  },
  {
    id: 4,
    title: "Southern Gospel Boys Website",
    description: `Website developed for the Southern Gospel Boys band. The website is built with plain HTML, CSS and Javascript. On this website I use my g-calendar-fetcher javascript library to display the bands upcoming events. This lets the band easily update their events in Google Calendar and have them automatically displayed on the website without other expensive services.`,
    resource: "media/sgb.webp",
    resourceSmall: "media/sgb_small.webp",
    video: false,
    link: "https://southerngospelboys.se",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 5,
    title: "root_access",
    description: `A multiplayer game crafted by a team of 5 during a 48-hour Global Game Jam. Comprising 2 developers, 2 artists, and a sound designer, we designed it from scratch in Java to run on a local network, supporting two players. In this game, participants aim to hack into a villain's computer through collaborative efforts to deduce the correct password. The twist? Each player sees only half the password on their screen. Without peeking at each other's displays, they must verbally share their half to piece together the full password before time expires. Success leads to progressively harder levels, enhancing the challenge.`,
    resource: "media/root_video.mp4",
    resourceSmall: "media/root_video_small.mp4",
    thumbnail: "media/thumbnails/root.webp",
    video: true,
    link: "https://github.com/sime3134/rootaccess_game",
    tech: ["Java"],
  },
  {
    id: 6,
    title: "Puzzle Quest",
    description: `Game developed from scratch in Java for a university project. This was a fun project where we challenged ourselves by building the game completely from scratch in Java instead of using a game engine like Unity or similar. On top of the actual game we also developed an editor for the game maps to use in the game. My biggest achievement was the pathfinding system where I used A* with object pooling and threading to let the NPC traverse the game map.`,
    resource: "media/puzzle_video.mp4",
    resourceSmall: "media/puzzle_video_small.mp4",
    thumbnail: "media/thumbnails/puzzle.webp",
    video: true,
    link: "https://github.com/sime3134/PuzzleQuest",
    tech: ["Java"],
  },
];

const togglePage = (pageName, flex, back) => {
  window.scrollTo(0, 0);

  const startPage = document.getElementById("start-page");
  const aboutPage = document.getElementById("about-page");
  const contactPage = document.getElementById("contact-page");
  const projectsPage = document.getElementById("projects-page");
  const freelancePage = document.getElementById("freelance-page");
  const pageElement = document.getElementById(`${pageName}-page`);
  const aboutButtons = document.querySelectorAll(".about-button");
  const contactButtons = document.querySelectorAll(".contact-button");
  const projectsButtons = document.querySelectorAll(".projects-button");
  const freelanceButtons = document.querySelectorAll(".freelance-button");
  const pageButtons = document.querySelectorAll(`.${pageName}-button`);
  const innerContainer = document.getElementsByClassName("container")[0];
  const startPageNav = document.getElementById("start-page-nav");
  if (pageName === "start") {
    startPageNav.style.display = "block";
  } else {
    startPageNav.style.display = "none";
  }
  startPage.style.display = "none";
  aboutPage.style.display = "none";
  contactPage.style.display = "none";
  projectsPage.style.display = "none";
  freelancePage.style.display = "none";
  pageElement.style.display = flex ? "flex" : "block";
  innerContainer.style.minHeight = pageName === "start" ? "70vh" : "20vh";
  back ? history.pushState({ page: pageName }, pageName, `?${pageName}`) : null;
  aboutButtons.forEach((button) => {
    button.classList.remove("active");
  });
  contactButtons.forEach((button) => {
    button.classList.remove("active");
  });
  projectsButtons.forEach((button) => {
    button.classList.remove("active");
  });
  freelanceButtons.forEach((button) => {
    button.classList.remove("active");
  });
  if (pageName !== "start") {
    pageButtons.forEach((button) => {
      button.classList.add("active");
    });
  }
};

window.addEventListener("popstate", function (event) {
  if (event.state) {
    if (event.state.page === "about") {
      togglePage("about", false, false);
    } else if (event.state.page === "contact") {
      togglePage("contact", true, false);
    } else if (event.state.page === "projects") {
      togglePage("projects", true, false);
    } else if (event.state.page === "freelance") {
      togglePage("freelance", true, false);
    } else {
      togglePage("start", true, false);
    }
  }
});

const openEnlargenedImage = (src) => {
  const imageWrapper = document.querySelector(".enlargened-image");
  const image = document.querySelector(".enlargened-image-content");

  image.src = src;
  imageWrapper.classList.add("display-on-desktop");
};

const displayModal = (projectId) => {
  const modal = document.getElementsByClassName("modal")[0];
  const project = projects.find((project) => project.id === projectId);
  const modalImage = document.getElementsByClassName("modal-image")[0];
  const modalVideo = document.getElementsByClassName("modal-video")[0];
  const modalTitle = document.getElementsByClassName("modal-title")[0];
  const modalDescription = document.getElementsByClassName("modal-text")[0];
  const modalLinkWrapper =
    document.getElementsByClassName("modal-link-wrapper")[0];
  const modalLink = document.getElementsByClassName("modal-link")[0];
  const chips = document.getElementsByClassName("modal-chips")[0];

  modalImage.src = !project.video ? project.resourceSmall : "";
  modalVideo.src = project.video ? project.resource : "";
  if (project.video) {
    modalImage.style.display = "none";
    modalVideo.style.display = "block";
    modalVideo.poster = project.thumbnail;
  } else {
    modalImage.style.display = "block";
    modalVideo.style.display = "none";
    modalImage.setAttribute("data-bigSrc", project.resource);
  }
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalLinkWrapper.style.display = "flex";
  if (project.linkComingSoon) {
    modalLink.textContent = "Link coming soon...";
  } else if (project.link) {
    modalLink.href = project.link;
    modalLink.textContent = project.link;
  } else {
    modalLinkWrapper.style.display = "none";
  }
  chips.innerHTML = "";
  project.tech.forEach((tech) => {
    const chip = document.createElement("div");
    chip.classList.add("chip");
    const colorClass =
      tech
        .toLowerCase()
        .replace(/\s/g, "")
        .replace(".", "")
        .replace("#", "sharp") + "-color";
    chip.classList.add(colorClass);
    chip.textContent = tech;
    chips.appendChild(chip);
  });

  modal.setAttribute("tabindex", "0");
  modal.focus();
  modal.style.display = "block";
};

const addProjects = () => {
  const projectContainer = document.getElementsByClassName("projects")[0];

  for (let project of projects) {
    const projectElement = document.createElement("article");
    projectElement.classList.add("project");

    const projectMedia = project.video
      ? document.createElement("video")
      : document.createElement("img");
    projectMedia.classList.add("project-media");
    projectMedia.innerHTML = project.video
      ? "Your browser does not support the video tag."
      : "";

    const projectTitle = document.createElement("h5");
    projectTitle.textContent = project.title;
    projectTitle.classList.add("project-title");

    projectMedia.src = project.resourceSmall;
    projectMedia.alt = project.title + " media";
    if (project.video) {
      projectMedia.loop = true;
      projectMedia.muted = true;
      projectMedia.autoplay = true;
      projectMedia.playsInline = true;
      projectMedia.poster = project.thumbnail;
    } else {
      projectMedia.loading = "lazy";
    }
    projectElement.addEventListener("click", () => {
      displayModal(project.id);
    });

    projectElement.ariaLabel = `open project modal for ${project.title}`;
    projectElement.appendChild(projectMedia);
    projectElement.appendChild(projectTitle);
    projectContainer.appendChild(projectElement);
  }
};

const closeMenu = () => {
  const menu = document.getElementById("menu-nav");
  menu.style.display = "none";
};

window.onload = () => {
  const imageWrapper = document.querySelector(".enlargened-image");
  const closeImageButton = document.querySelector(".close-enlargened-image");
  const aboutButtons = document.querySelectorAll(".about-button");
  const contactButtons = document.querySelectorAll(".contact-button");
  const projectsButtons = document.querySelectorAll(".projects-button");
  const freelanceButtons = document.querySelectorAll(".freelance-button");
  const modal = document.getElementsByClassName("modal")[0];
  const modalClose = document.getElementsByClassName("modal-close")[0];
  const modalImage = document.getElementsByClassName("modal-image")[0];
  const menuButtons = document.querySelectorAll(
    ".material-symbols-outlined.menu-icon"
  );
  const closeMenuButton = document.querySelector(
    ".material-symbols-outlined.close-icon"
  );

  addProjects();
  if (window.location.href.includes("?about")) {
    togglePage("about", false, true);
  } else if (window.location.href.includes("?contact")) {
    togglePage("contact", true, true);
  } else if (window.location.href.includes("?projects")) {
    togglePage("projects", true, true);
  } else if (window.location.href.includes("?freelance")) {
    togglePage("freelance", true, true);
  } else {
    togglePage("start", true, true);
  }

  imageWrapper.addEventListener("click", () => {
    imageWrapper.classList.remove("display-on-desktop");
  });
  closeImageButton.addEventListener("click", () => {
    imageWrapper.classList.remove("display-on-desktop");
  });
  aboutButtons.forEach((button) => {
    button.addEventListener("click", () => {
      togglePage("about", false, true);
      closeMenu();
    });
  });
  contactButtons.forEach((button) => {
    button.addEventListener("click", () => {
      togglePage("contact", true, true);
      closeMenu();
    });
  });
  projectsButtons.forEach((button) => {
    button.addEventListener("click", () => {
      togglePage("projects", true, true);
      closeMenu();
    });
  });
  freelanceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      togglePage("freelance", true, true);
      closeMenu();
    });
  });
  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
  menuButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const menu = document.getElementById("menu-nav");
      menu.style.display = "flex";
    });
  });
  closeMenuButton.addEventListener("click", () => {
    closeMenu();
  });
  modalImage.addEventListener("click", () => {
    openEnlargenedImage(modalImage.attributes["data-bigSrc"].value);
  });

  document.addEventListener("fullscreenchange", function () {
    const videos = document.getElementsByTagName("video");
    for (let video of videos) {
      if (document.fullscreenElement) {
        video.style.objectFit = "contain";
      } else {
        video.style.objectFit = "cover";
      }
    }
  });

  //Wave hand every 2 seconds
  const icon = document.querySelector(".waving-hand");

  function triggerWave() {
    icon.classList.remove("waving");
    void icon.offsetWidth;
    icon.classList.add("waving");
  }

  setInterval(triggerWave, 2000);
};
