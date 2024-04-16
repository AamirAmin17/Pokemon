import Head from "next/head";
import React, { FC, useContext } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { useLanguage } from "../context/Language/LanguageContext";
import { Dropdown } from "flowbite-react";

interface Props {
  children: React.ReactNode;
  title: string;
}

const Layout: FC<Props> = ({ children, title }) => {
  const { selectedLanguage, allLanguages, changeLanguage } = useLanguage();

  return (
    <div className="">
      <Head>
        <title>{title}</title>
        <meta name="description" content="This pokedex is powered by next.js" />
        <link rel="icon" href="/pokedex.png" />
      </Head>

      <header className="bg-slate-900 pb-10 mb-10 pt-5">
        <a>
          <div className="flex justify-center text-6xl text-center text-amber-400">
            <div className="flex flex-col justify-center">
              <Link href={"/"}>
                <AiFillHome
                  className="place-self-center mr-10 cursor-pointer"
                  size={50}
                />
              </Link>
            </div>

            <h1 className="align-bottom">{title}</h1>
          </div>
        </a>
      </header>

      <main className="container mx-auto">{children}</main>

      <footer className="flex justify-center items-center mt-10 ">
        Powered by {"Aamir Muhammad Amin"}
      </footer>
    </div>
  );
};

export default Layout;
