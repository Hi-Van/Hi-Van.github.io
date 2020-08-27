# [Portfolio Website // Now Deprecated](https://hi-van.github.io)


Table of Contents
=================

   * [Description](#description)
   * [Pages](#pages)
      * [Home](#about-me)
      * [Side Nav](#side-nav)
      * [Experience](#experience)
      * [Projects](#projects)
      * [About Me](#skills)
      * [Contact Info](#contact-info)


# Description

This website is built using HTML and CSS. It is made with the intention of being a way to host my personal projects and some information about myself.

# Pages:

### Home

<img src="./home.PNG" width="600"/>

This is the landing div on my website. It has a video div, color layer div, and content div. The HTML code for the home page can be found in the snippet below:

```
        <header class="v-header container" id="Home">
        
            <div class="video-fullscreen-wrap">
                <video autoplay muted loop id="backgroundVideo">
                    <source src="backgroundVideo.mp4" autoplay loop muted type="video/mp4">
                </video>
            </div>
            
            <div class="header-overlay"></div>
            
            <div class="header-content">
                <h1>VANOUPHON SIRISOUK</h1>
                <p>SOFTWARE DEVELOPER</p>
                <a href="#Experience"><button>MORE</button></a>
            </div>
        </header>
```

### Side Nav

<img src="./side-nav.PNG" width="150" height="400"/>

The side navigation uses two simple JavaScript functions ```openSideMenu()``` and ```closeSideMenu()```. The component consists of two different divs, the ```hamburger-menu``` div and the ```side-nav``` div. When the link in the ```hamburger-menu``` div is clicked, the ```onclick``` will trigger the ```opensideMenu()``` function to display the ```side-nav``` div. When the ```side-nav``` div is open, there is a link when clicked, will trigger an ```onClick``` and cuase the ```closeSideMenu()``` function to run:

```
        // HTML Code
        
        <nav class="navbar">
            <span class="open-slide">
                <a onclick="openSideMenu()">
                    <img src="hamburger-menu.svg" alt="" class="hamburger-menu">
                </a>
            </span>
        </nav>

        <div id="side-menu" class="side-nav">
            <a class="btn-close" onclick="closeSideMenu()">&times;</a>
            <a href="#Home">HOME</a>
            <a href="#Experience">EXPERIENCE</a>
            <a href="#Projects">PROJECTS</a>
            <a href="#About">ABOUT ME</a>
            <a href="#Info">INFO</a>
        </div>
        
        
        // JavaScript Code
        
        function openSideMenu() {
          document.getElementById('side-menu').style.zIndex = '3';
          document.getElementById('side-menu').style.width = '250px';
          document.getElementById('side-menu').style.opacity = '0.95';
        }
        
        function closeSideMenu() {
          document.getElementById('side-menu').style.zIndex = '-1';
          document.getElementById('side-menu').style.width = '0px';
          document.getElementById('side-menu').style.opacity = '0';
        }        
```

### Experience

<img src="./experience.PNG" width="600"/>

This page lists off my relevant experience. Each experience item has its own div container labelled as ```exp```, the code for which is shown below:

```
                    <div class="exp">
                        <h1><b>UNIVERSITY OF CONNECTICUT STAMFORD ENGINEER MAJORS</b> | FOUNDER</h1>
                        <h2>AUG 2019 - PRESENT | Stamford, CT</h2>
                        <p>- Collective body of students primarily in the School of Engineering at University of Connecticut Stamford regional campus</p>
                        <p>- Attracted a total of 40+ students</p>
                        <p>- Directed several teams of students, resulting in an overall reduction in stress & workload</p>
                        <p>- Lead a team of 13 collaborative students, decreasing time spent on assignments by 30% - 40% on avg.</p>
                    </div>
```

### Projects

<img src="./projects.PNG" width="600"/>

This page lists off all the current projects I had worked on at the time. All projects are contained in individual cards, the code for which can be found in the snippet below:
```
<div class="card">
                        <h1>!Picky 🥡 <b>[IN PROGRESS]</b></h1>
                        <p>Restaurant Locator Web App. Built using ReactJs, Google Maps API, Places API, Geocoding API, and Material UI</p>
                        <a href="https://github.com/Hi-Van/Not-Picky" target="_blank"><button>Code</button></a>
                        <a href="https://not-picky.herokuapp.com/" target="_blank"><button>Demo</button></a>
                    </div>
```

The project cards are contained within a parent div labelled ```cardContainer```. The ```cardContainer``` div also uses grid and autofit, with a breakpoint of 300px width per card. The CSS code can be found in the snippet below:

```
.cardContainer {
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2em;
}
```

### About Me

<img src="./about-me.PNG" width="600"/>

The about me page is styled to mimic a paper with a orange background. It contains divs labelled ```abtSection``` to contain information into separate sections. An example of how the ```abtSection``` is used is found in the snippet below:

```
                <div class="abtSection">
                    <h1>HOBBIES</h1>
                    <p><b>DESTINY</b> Would be a shame if we'd 1v1'd</p>
                    <p><b>PC BUILDING</b> Mine has RGB so it's faster</p>
                    <p><b>BREAKDANCING</b> I've yet to break myself, so I'm probably doing it wrong</p>
                    <p><b>MUSIC</b> I can play several instruments, just really badly</p>
                    <p><b>WORKING OUT</b> I like being healthy</p>
                    <p><b>ANIME</b> Still practicing my hand symbols for when the army tries to draft me</p>
                </div>
                        

```

Each ```abtScetion``` div is contained a parent div labelled ```page-content```, which uses grid and autofit with a 300px width breakpoint to promote more responsive design. The CSS code for ```page-content``` is found in the following snippet:
```
.page-content {
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2em;
}
```

### Contact Info

<img src="./info.PNG" width="600"/>

This component page displays a set of social links, contact information, as well as a legacy version of my resume. Each link is contained within a div labelled  ```contact```. An example of use from my website can be found in the snippet below:

```
               <div class="contact">
                   <h1>GITHUB</h1>
                   <a href="https://github.com/Hi-Van" target="blank_">https://github.com/Hi-Van</a>
               </div>
```

Each of the ```contact``` divs are contained within a parent div labelled ```infoContainer```. The ```infocontainer``` parent div uses grid and autofit with a breakpoint of 300px width per ```contact```. The exact CSS code for the ```infoContainer``` div can be found in the following snippet:
```
.infoContainer {
  margin-top: 10em;
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 4em;
}
```
