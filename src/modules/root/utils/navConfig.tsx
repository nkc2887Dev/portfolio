import { paths } from "@/routes/paths";
import { SvgColor } from "@/components/svg-color";
import { Github, Instagram, Linkedin } from "lucide-react";

export const icon = (name: string) => (
  <SvgColor src={`./assets/icons/root/${name}.svg`} />
);

export const ICONS: Record<string, JSX.Element> = {
  home: icon("home"),
  resume: icon("ic_file"),
  about: icon("about"),
  contact: icon("ic-user"),
  menu: icon("ic-menu-item"),
  linkedin: <Linkedin className="w-5 h-5 text-blue-600" />,
  instagram: <Instagram className="w-5 h-5 text-red-400" />,
  github: <Github className="w-5 h-5 text-neutral-800" />,
};

export const navConfig: {
  subheader: string;
  items: {
    title: string;
    href: string;
    icon: JSX.Element;
    openNewPage?: boolean;
  }[];
}[] = [
  {
    subheader: "",
    items: [
      { title: "Home", href: paths.roots.root, icon: ICONS.home },
      { title: "Resume", href: paths.roots.resume, icon: ICONS.resume },
      { title: "About Me", href: paths.roots.about, icon: ICONS.about },
      { title: "Contact", href: paths.roots.contact, icon: ICONS.contact },
    ],
  },
  {
    // subheader: "Socials",
    subheader: "Find With Me",
    items: [
      {
        title: "Linkedin",
        href: "https://www.linkedin.com/in/naresh-chudasama-1599a9175/",
        icon: ICONS.linkedin,
        openNewPage: true,
      },
      {
        title: "Github",
        href: "https://github.com/nkc2887Dev/",
        icon: ICONS.github,
        openNewPage: true,
      },
      {
        title: "Instagram",
        href: "https://www.instagram.com/nk.chudasama/",
        icon: ICONS.instagram,
        openNewPage: true,
      },
    ],
  },
];
