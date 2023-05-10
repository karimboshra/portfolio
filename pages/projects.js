import React, { Fragment } from 'react';
import getConfig from 'next/config'
import Link from 'next/link';
import { Footer } from '../components/Footer';
import { links, SEO, navigation } from '../config/config';
import { Header } from '../components/Header';
import image from './lucp2.png';
import { Nav } from '../components/Navbar';
//import video from './chunky.mp4';

const { publicRuntimeConfig } = getConfig()

export default function Home() {
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav
        title={navigation.name}
        links={navigation.links}
      />
      <div className="d-flex flex-column justify-content-between bg-secondary min-vh-100">
        <div className="py-5 px-5 container text-center">
          <img className="" width="150" height="150" src={links.image} alt="profile of hashirshoaeb" />
          <h3 className="mt-3">{links.title}</h3>
          <p className="flex-start">{links.description}</p>
          <p className='textleft bottomBorder'>This is a test2</p>
          <img src={image.src} alt="Jean-Francois smoking a fat cogie" />
          <video width="750" height="500" controls >
            <source src="/Videos/chunky.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="">
          <p>Peni</p>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}


function Button({ title, link }) {
  return (
    <div className="row justify-content-center">
      <div className="card card-work mx-sm-4 my-2" style={{ width: "20rem" }}>
        <Link href={link}>
          <a target="_blank" rel="noreferrer">
            <h4 className="text-primary py-3 px-3">{title}</h4>
          </a>
        </Link>
      </div>
    </div>
  );
}

