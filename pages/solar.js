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
		
          <img className=""  src="solar/logo.png" alt="Game Logo" />
          <h3 className="mt-3">Solar System</h3>
          <p className="flex-start">A real-time renderer made with OpenGL</p>
		  
          <h4 className='textleft bottomBorder'>Description</h4>
		  <p className='textleft'>This project is a real-time renderer using OpenGL. It is a simulation of a solar system (not
up to scale nor based on any real-life solar system). A solar system is composed of a set of
planets (spheres) that orbit around an object in the center (a sun or a planet). The
simulation runs in real-time, showing the movement of the planets around an orbit.

This OpenGL project lays the foundations for basic shading and general movement of
objects and the camera. The functions from this project may be used for the creation of a
simple computer game in the future.</p>
		  <p className='bottomBorder'> </p>
		  <br></br><br></br>
		  
		  <h4 className='textleft bottomBorder'>Download</h4>
		  <a href="https://drive.google.com/file/d/1bYOVt3B9wAU3ITbUy9-9q0LXVv4gPaJq/view?usp=share_link" className='textleft'>Download link (Google Drive)</a>
		  <p className='bottomBorder'> </p>
		  <br></br><br></br>
		  
		  <h4 className='textleft bottomBorder'>Features</h4>
		  <p className='textleft'>Sphere rendering - (Vertices, Indices, Texture Coordinates, Normals)</p>
		  <img src="solar/1.png" width="150" height="150" alt="Unknown"/>
		  <br></br><br></br><br></br>
		  <p className='textleft'>Multiple textures wrapped around spheres</p>
		  <img src="solar/2.png" width="150" height="150" alt="Unknown"/>
			<p>   </p>
		  <img src="solar/3.png" width="150" height="150" alt="Unknown"/>
		  <br></br><br></br><br></br>
		  <p className='textleft'>Continuously orbiting planets, planets spin around an axis</p>
		  <video width="960" height="540" controls >
            <source src="solar/orbit.mkv" type="video/mp4" />
          </video>
		  <video width="960" height="540" controls >
            <source src="solar/spin.mkv" type="video/mp4" />
          </video>
		  <br></br><br></br><br></br>
		  <p className='textleft'>Orbiting arc ball camera (Virtual trackball, pan around a planet)</p>
		  <video width="960" height="540" controls >
            <source src="solar/arcball.mkv" type="video/mp4" />
          </video>
		  <br></br><br></br><br></br>
		  <p className='textleft'>Object picking (Ray-Sphere intersection)</p>
		  <video width="960" height="540" controls >
            <source src="solar/picking.mkv" type="video/mp4" />
          </video>
		  <br></br><br></br><br></br>
		  <p className='textleft'>Smoothing of camera transitions using linear interpolation (lerp)</p>
		  <video width="960" height="540" controls >
            <source src="solar/lerp.mkv" type="video/mp4" />
          </video>
		  <br></br><br></br><br></br>
		  <p className='textleft'>Full demonstration</p>
		  <video width="960" height="540" controls >
            <source src="solar/Demonstration.mkv" type="video/mp4" />
          </video>
		  <p className='bottomBorder'> </p>
		  <br></br><br></br>
		  
		  <h4 className='textleft bottomBorder'>Difficulties and Tricks</h4>
		  <p className='textleft'><b>Sphere rendering:<br></br></b>
		  I ignorantly assumed that rendering spheres in OpenGL would be as easy as calling a function with the sphere&rsquo;s center and desired radius. Apparently, that is not the case if you are not using a library such as GLut. Luckily, I found online resources that describe how a sphere can be split into triangles and the math that generates its vertices, normals, texture coordinates, and indices.
		  </p>
		  <p className='textleft'></p>
		  <p className='textleft'><b>Background:</b><br></br>
		  Since outer space is supposed to be infinitely big and visible from all angles in three-dimensional space, having a static square background would ruin the immersion. A simple solution to this is to wrap the solar system with a sphere that has a space or stars texture on its inside face.
		  </p>
		  <p className='textleft'></p>
		  <p className='textleft'><b>Matrices, vectors, and 3D space:</b><br></br>
		  Almost all the objectives mentioned above relate directly to movement and placement in three-dimensional space. A proper separation and abstraction of the vectors and matrices involved, such as view, project, and model matrices, was very important. All relevant positions and movements relating to the camera and the spheres were put into their own classes.
		  </p>
		  <p className='textleft'></p>
		  <p className='bottomBorder'> </p>
		  <br></br><br></br>

        </div>
        <Footer/>
      </div>
    </Fragment>
  );
}