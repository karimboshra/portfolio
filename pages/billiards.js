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
		
          <img className="" width="150" height="150" src="billiards/logo.png" alt="Game Logo" />
          <h3 className="mt-3">Billiards</h3>
          <p className="flex-start">A physics-based Billiards silumation made with Java</p>
		  
          <h4 className='textleft bottomBorder'>Description</h4>
		  <p className='textleft'>This program is a billiards simulation written in Java. It includes a
		  custom physics engine in the back-end. The purpose of this simulation is to show the physics
		  behind the classic game of billiards that we learned in our
		  science courses during college. The game has multiple layers beneath the
		  classic ball to ball contact pastime. The game itself includes the simulation
		  of a real game, along with a sandbox mode allowing the player to play around
		  with physics related aspects such as the
		  friction on the table and the mass of the balls.</p>
		  <p className='bottomBorder'> </p>
		  <br></br><br></br>
		  
		  <h4 className='textleft bottomBorder'>Contribution</h4>
		  <p className='textleft'>As part of a team of four, my contribution towards the project consisted of developing half of the back-end physics of our custom physics engine. Mainly the following elements:<br></br>
		  - Friction Modifier<br></br>
		  - Cushioning<br></br>
		  - Table Elevation<br></br>
		  - Stopping Effect<br></br>
		  - Shot Input<br></br>
		  - Fixes relating to incorrect clipping with high-velocity shots</p>
		  <p className='bottomBorder'> </p>
		  <br></br><br></br>
		  
		  <h4 className='textleft bottomBorder'>Media</h4>
		  <p className='textleft'>8 Ball pool game mode</p>
		  <video width="960" height="540" controls >
            <source src="billiards/8ball.mp4" type="video/mp4" />
          </video>
		  <br></br><br></br><br></br>
		  <p className='textleft'>Sandbox game mode</p>
		  <video width="960" height="540" controls >
            <source src="billiards/sandbox.mp4" type="video/mp4" />
          </video>
		  <br></br><br></br><br></br>
		  <img src="billiards/game1.png" width="1000" height="500" alt="Unknown"/>
			<p>   </p>
		  <img src="billiards/game2.png" width="1000" height="500" alt="Unknown"/>
		  <p className='bottomBorder'> </p>
		  <br></br><br></br>

		  <h4 className='textleft bottomBorder'>Documentation</h4>
		  <object data="billiards/documentation.pdf" type="application/pdf" width="100%" height="700px">
		  <p>Unable to display PDF file. <a href="billiards/documentation.pdf">Download</a> instead.</p>
		  </object>
		  <p className='bottomBorder'> </p>
		  <br></br><br></br>
		  
		  <h4 className='textleft bottomBorder'>Project Management Plan</h4>
		  <object data="billiards/pmp.pdf" type="application/pdf" width="100%" height="700px">
		  <p>Unable to display PDF file. <a href="billiards/pmp.pdf">Download</a> instead.</p>
		  </object>
		  <p className='bottomBorder'> </p>
		  <br></br><br></br>
		  
		  <h4 className='textleft bottomBorder'>Presentation Slides</h4>
		  <object data="billiards/slides.pdf" type="application/pdf" width="100%" height="600px">
		  <p>Unable to display PDF file. <a href="billiards/slides.pdf">Download</a> instead.</p>
		  </object>
		  <p className='bottomBorder'> </p>
		  <br></br><br></br>
		  
        </div>
        <Footer/>
      </div>
    </Fragment>
  );
}