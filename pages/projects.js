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
		
          <img className="" width="150" height="150" src={links.image} alt="Game Logo" />
          <h3 className="mt-3">Game Title</h3>
          <p className="flex-start">Game Description</p>
		  
          <h4 className='textleft bottomBorder'>SubHeading</h4>
		  <p className='textleft'>Description</p>
          <img src={image.src} alt="Unknown" />
		  <p className='textleft'>Description</p>
		  <p className='bottomBorder'> </p>
		  <br></br><br></br>
		  
		  <h4 className='textleft bottomBorder'>SubHeading</h4>
		  <p className='textleft'>Description</p>
          <video width="750" height="500" controls >
            <source src="/Videos/chunky.mp4" type="video/mp4" />
          </video>
		  <p className='textleft'>Description</p>
		  <p className='bottomBorder'> </p>
		  <br></br><br></br>
		  
        </div>
        <Footer/>
      </div>
    </Fragment>
  );
}