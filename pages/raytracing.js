import React, { Fragment } from 'react';
import getConfig from 'next/config'
import Link from 'next/link';
import { Footer } from '../components/Footer';
import { links, SEO, navigation } from '../config/config';
import { Header } from '../components/Header';
import { Nav } from '../components/Navbar';

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
		
          <img className="" width="150" height="150" src="raytracing/logo.png" alt="Game Logo" />
          <h3 className="mt-3">Ray Tracer</h3>
          <p className="flex-start">A ray tracer made from scratch with C++</p>
		  
          <h4 className='textleft bottomBorder'>Description</h4>
		  <p className='textleft'>Description</p>
          <img src="exodus/logo.png" alt="Unknown"/>
		  <p className='textleft'>Description</p>
		  <p className='bottomBorder'> </p>
		  <br></br><br></br>
		  
		  <h4 className='textleft bottomBorder'>Technologies Used</h4>
		  <p className='textleft'>Description</p>
		  <p className='bottomBorder'> </p>
		  <br></br><br></br>
		  
		  <h4 className='textleft bottomBorder'>Contribution</h4>
		  <p className='textleft'>Description</p>
		  <p className='bottomBorder'> </p>
		  <br></br><br></br>
		  
		  <h4 className='textleft bottomBorder'>Links & Documents</h4>
		  <p className='textleft'>Description</p>
		  <p className='bottomBorder'> </p>
		  <br></br><br></br>
		  
		  <h4 className='textleft bottomBorder'>Media</h4>
		  <p className='textleft'>Description</p>
		  <p className='bottomBorder'> </p>
		  <br></br><br></br>

		  <h4 className='textleft bottomBorder'>Feature 1</h4>
		  <p className='textleft'>Description</p>
		  <p className='bottomBorder'> </p>
		  <br></br><br></br>
		  
		  <h4 className='textleft bottomBorder'>Feature 2</h4>
		  <p className='textleft'>Description</p>
		  <p className='bottomBorder'> </p>
		  <br></br><br></br>
		  
        </div>
        <Footer/>
      </div>
    </Fragment>
  );
}