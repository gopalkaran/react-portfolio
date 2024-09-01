import JOB_PORTAL from "../../../assets/projects/job-portal.png";
import VOTE_DISHES from "../../../assets/projects/vote-dishes.png";
import NOTE_APP from "../../../assets/projects/note-app.png";
import UNPLANK from "../../../assets/projects/unplank.png";
import STRATMED from "../../../assets/projects/stratmed.png";
import PMS from "../../../assets/projects/pms.png";
import AIF from "../../../assets/projects/aif.png";
import SHOPPING_CART from "../../../assets/projects/shopping-cart.png";

export const projectsData = [
  {
    id: "p1",
    logo: AIF,
    projectName: "ALTERNATIVE INVESTMENT FUND",
    projectDescription: `As a software developer, my team and I led the development of an investment portal, empowering
      Relationship Managers (RMs) / Distributors to input essential client information securely. They can then
      guide clients through various investment options and plans customized to their needs. With intuitive
      interfaces and stringent security measures, RMs or Distributors can facilitate client consent for
      investment activities with ease. The portal also enables efficient management of client profiles and
      documentation, ensuring compliance with regulatory standards. This project underscores my expertise
      in software development and commitment to enhancing financial services accessibility.`,
    techStack: ["Typescript", "React", "Redux", "Formik", "Yup"],
    url: "https://aif-dev.kfintech.webileapps.io/login",
  },
  {
    id: "p2",
    logo: PMS,
    projectName: "PORTFOLIO MANAGEMENT SERVICES",
    projectDescription: `As a software developer, my team and I led the development of an investment portal, empowering
      Relationship Managers (RMs) to seamlessly guide clients into diverse investment strategies. Clients can
      provide consent through self-authorisation or authorised signatories, ensuring legal compliance and
      confidentiality. This project highlights my proficiency in software development, delivering an intuitive
      platform that enhances the efficiency of client interactions.`,
    techStack: ["Typescript", "React", "Redux", "Formik", "Yup"],
    url: "https://pmsdo-dev.kfintech.com/login",
  },
  {
    id: "p3",
    logo: STRATMED,
    projectName: "STRATMED PURCHASELITE",
    projectDescription: `Stradmed is an online group purchasing website where hospital and clinic can onboard and make order
      from pharma companies and medical device manufacturers. I worked on 50% of the front-end
      development from scratch.`,
    techStack: ["Typescript", "React", "Redux", "Formik", "Yup"],
    url: "https://purchase-lite.stratmed.com/auth/login",
  },
  {
    id: "p4",
    logo: UNPLANK,
    projectName: "UNPLANK (CONSUMER AND MERCHANT APP)",
    projectDescription: `Unplank is a frictionless point-of-sale interface that empowers merchants to acquire customers and take
      payment in-store, free of interchange fees and platform commissions. I worked on 50% of the front-end
      development from scratch.`,
    techStack: ["Javascript", "React", "Redux", "Formik", "Yup"],
    url: "https://www.unplank.com/",
  },

  {
    id: "p5",
    logo: SHOPPING_CART,
    projectName: "SHOPPING CART APP",
    projectDescription: `A small react app for displaying products. You can pick any number of items and each item can be picked more than once. On top of the product listing, there is a Cart. By clicking on it, you will be taken to the Cart Page, where you can see your order summary in tabular format. In Cart Page, you can increase and decrease number of items for any item.`,
    techStack: ["Typescript", "React", "React Router", "Redux"],
    url: "https://shopping-cart-mini.netlify.app/",
  },

  {
    id: "p6",
    logo: VOTE_DISHES,
    projectName: "VOTE DISHES APP",
    projectDescription: `A small react app for ranking dishes. Multiple users should be able to login into the app and vote for their
      favourite dishes and see the results of the poll. For login, use [username: 'akbar', password: 'akbar123'] or [username: 'amar', password: 'amar123'] `,
    techStack: ["Javascript", "React", "React Router", "Context API"],
    url: "https://vote-dishes-app.netlify.app/",
  },

  {
    id: "p7",
    logo: JOB_PORTAL,
    projectName: "JOB PORTAL",
    projectDescription: `There are three tabs, 1st tab displays all the candidates, 2nd tab displays shortlisted candidates, 3rd tab
      displays rejected candidates. By clicking on individual candidate you can either shortlist or reject a
      candidate.`,
    techStack: ["Javascript", "React", "React Router", "Context API"],
    url: "https://job-portal-assignment.netlify.app/",
  },

  {
    id: "p8",
    logo: NOTE_APP,
    projectName: "NOTE TAKING APP",
    projectDescription: `A Note Taking App built with CSS, React & Firebase ; You can create a new note, delete a particular note, view a particular note in a modal if the content of the note is too much to fit into the card, search a particular note by note title, you can edit a note. I have used firabase for storing the list of notes. and displayed the list of notes in a grid view.`,
    techStack: ["Javascript", "React", "Firebase"],
    url: "https://note-taking-application.netlify.app/",
  },
];
