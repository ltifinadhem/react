import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <body>

<body style="background-color: rgb(221, 246, 247);">


  <!--  <div  id = "About" style="text-align:right">
    <ul>
    <a> <li>About</li></a>  
    <a><li>projects</li></a>
    <a><li>  contact</li></a>   
    </ul>
     </head> 
     <main>
     <section>
         <section>about </section>
         <section>project</section>
         <section> contact</section>
     </section>
     </main>
      -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
        <a class="nav-item nav-link" href="#about">About</a>
        <a class="nav-item nav-link" href="#Work">Work</a>
        <a class="nav-item nav-link" href="#Resume">Resume</a>
        <a class="nav-item nav-link" href="#contact">contact</a>
      </div>
    </div>
  </nav>

  <center>
    <h1> I'm Nadheeeem </h1>
  </center>

  <main>
    <div class="flex">
      <div>

        <h1 id="about">About</h1>
        <form action="">
          <label for="">qqqq</label>
          <input type="text">
          <button>ajouter</button>
        </form>

        <img src="aaa.png" />
      </div>

      <div>
        <h1 id="Work" style="font-family: 'Times New Roman', Times, serif;font-size: inherit;">Work</h1>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/qov1ewOhzn8" frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


      </div>
    </div>
    <section>
      <div class="grid-container">
        <h1 id="Resume">Resume</h1>
<div>
<div class="grid-item">1</div>
<div class="grid-item">2</div>
<div class="grid-item">3</div>  
<div class="grid-item">4</div>
<div class="grid-item">5</div>
<div class="grid-item">6</div>
</div>
      <!--<iframe class="item2" width="560" height="315" src="https://www.youtube.com/embed/MCRHFbNZg0A"
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
        <img class="item3" src="aa.png" />-->
        <div>
          <br>
          <h1 id="contact"
            style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: medium;">
            contact</h1>
          <form action="">
            <label for="">qqqq</label>
            <input type="text">
            <button>ajouter</button>
          </form>

        </div>


  </main>


</body>
    </div>
  );
}

export default App;
