

export const METADATA = {
  title: "Leban Joy Cardozo | Portfolio ",
  description:
    "I bridge the Gap between Design and Development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",
  siteUrl: "",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
 
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I Design and Develop Apps",
  "I Develop Dynamic user Experience",
  "I Design and Develop Motion",
  "I Develop Software",
];

export const EMAIL = "lebanjoycardozo@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/leban-cardozo/",
  github: "https://github.com/lebanmj",
  instagram: "https://www.instagram.com/leban_ljc/",
  facebook: "https://www.facebook.com/leban.cardozo.9",

 
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
 
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "redux",
    "next",
    "gsap",
   
    "svg",
    "html",
    "css",
    "sass",
    "tailwind",
    "bootstrap",
    "material-ui"
    
  ],
  backend: [
    'django','nodejs'

  ],
  database: [
    'mongodb'

  ],
  userInterface: ["figma", "sketch","canva"],
  other: ["git","lightroom",'chatgpt'],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

// timeline how many projects done

export const TIMELINE: Array<TimelineNodeV2> = [

  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Live Project",
    size: ItemSize.SMALL,
    subtitle:
      "Ecommerce Website (Store)",
    image: "/timeline/reactindia.svg",
    slideImage: "/timeline/emart.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Ecommerce Website (Admin)",
    size: ItemSize.SMALL,
    subtitle:
      "Ecommerce Website (Admin)",
    image: "/timeline/reactindia.svg",
    slideImage: "/timeline/emart-admin.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Software developer",
    size: ItemSize.SMALL,
    subtitle:
      "Intern at Dreamlogic infosystem -Panjim,Goa",
    image: '',
    slideImage: "/timeline/team.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Webathon Event",
    size: ItemSize.SMALL,
    subtitle:
      "Building dynamic Website for Restaurent + Parking management system",
      image: "/timeline/reactindia.svg",
    slideImage: "/timeline/webahton.jpeg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI/UX Designing  ",
    size: ItemSize.SMALL,
    subtitle:
      "A Hackathon Event which involved creating dynamic UI/",
    image: "/skills/figma.svg",
    slideImage: "/timeline/uiUX.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2019",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "dance Champion",
    size: ItemSize.SMALL,
    subtitle:
      "Dance Competeion Winner held in Bora higher Secomdary School -Goa",
    image: '',
    slideImage: "/timeline/dance.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  

];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
