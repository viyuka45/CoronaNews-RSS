import React, { Component } from 'react';
import './App.css';
import logo from "./conoraNews3.jpeg"
import world from "./world.jpg"
import covidImage from "./coronga.jpg"
import city from "./city.jpg"

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      isLoading:true,
      linksBR: [],
      linksWorld: []
    }
  }


  componentDidMount() {
    this.fetchData()
  }
  
   fetchData = () => {
      return fetch('http://newsapi.org/v2/top-headlines?country=br&category=health&apiKey=d5f03b19c406467db2c6819caf8479c1')
      .then(response => response.json())    
      .then(parsedJSON => parsedJSON.articles.map(news => ({
        title: `${news.title}`,
        description: `${news.description}`,
        url: `${news.url}`,
        image: `${news.urlToImage}`
      })))
      .then(linksBR => this.setState ({
        linksBR,
        isLoading: false
      }))
      .catch(error => console.log('parsing failed', error))

      .then( () => {
        return fetch('http://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=d5f03b19c406467db2c6819caf8479c1')
        .then(response => response.json())    
        .then(parsedJSON => parsedJSON.articles.map(news => ({
          title: `${news.title}`,
          description: `${news.description}`,
          url: `${news.url}`,
          image: `${news.urlToImage}`
        })))
        .then(linksWorld => this.setState ({
          linksWorld,
          isLoading: false
        }))
        .catch(error => console.log('parsing failed', error))
   }
  
      )}






  render () {
  return (
    <div className="container-fluid p-0">

      {/*navbar*/}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"><img src={logo} className="img-fluid"/></a>

  <div className="nav justify-content-center w-100" id="navbarNav">

    <ul className="nav justify-content-center">
      <li className="nav-item active" >
        <a className="nav-link" href="#">Home <span className="sr-only" >(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Brasil</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Mundo</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://covid19.who.int/?gclid=Cj0KCQjwnv71BRCOARIsAIkxW9HSfJGspT2WPeQ3Aj_aWzg_kjsfESWOLpP_Ibt81Y6G0pqnyocI0KsaAri_EALw_wcB">Grafico</a>
      </li>

    </ul>
  </div>
</nav>


    {/*slider*/}
      <section id="carouselSection" className="carousel slide" data-ride="carousel" data-interval="3000">
        <ol className="carousel-indicators">
          <li data-target="#carouselSection" data-slide-to="0" className="active"></li>
          <li data-target="#carouselSection" data-slide-to="1" ></li>
          <li data-target="#carouselSection" data-slide-to="2"></li>
        </ol>
            {/*slides*/}
        <div className="carousel-inner" role="listBox">
          <div className="carousel-item active">
            <div className="view">
              <a href="https://www.saude.gov.br/">
                <img src={covidImage} alt="Responsive image" className="d-block w-100 img-fluid" />        
              </a>
              <div className="mask rbga-black-light"></div>
            </div>
          <div className="carousel-caption">
              <h3 nameClass="h3-responsive">Novo Corona Virus</h3>
              <p>Tudo o que voce precisa saber</p>
          </div>
         </div>


          <div className="carousel-item ">
            <div className="view">
              <a href="https://www.who.int/">
                <img src={world} alt="Responsive image" className="w-100 img-fluid" />        
              </a>
              <div className="mask rbga-black-light"></div>
            </div>
          <div className="carousel-caption">
              <h3 nameClass="h3-responsive">Mundo contra o Corona</h3>
              <p>As principais noticias da Organizacao Mundial de Saude</p>
          </div>
         </div>


          <div className="carousel-item ">
            <div className="view">
              <a href="https://exame.abril.com.br/economia/6-numeros-mostram-o-dramatico-impacto-do-coronavirus-na-economia/">
                <img src={city} alt="Responsive image" className="w-100 img-fluid" />        
              </a>
              <div className="mask rbga-black-light"></div>
            </div>
          <div className="carousel-caption">
              <h3 nameClass="h3-responsive">Pandemia e economia</h3>
              <p>O impacto do virus na economia mundial</p>
          </div>
         </div> 

          
        </div>
            {/*controles do sliders */}
        <div className="carousel-control-next" href="#carouselSection" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </div>
        <div className="carousel-control-prev" href="#carouselSection" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Prev</span>
        </div>

      </section>


{/*Brazil rss*/}
    <br></br>
    <h1 className="d-flex justify-content-center">Brasil</h1>
    <br></br>
      <section className="container">
        <ul className="list-unstyled">

          {
            this.state.linksBR.map(rss => {
              return (
          
            <a href={rss.url} >
            <li className="media pt-2">
            <img src={rss.image} alt={rss.url} className="mr-3" width="200" height="100"/>
            <div className="media-body">
              <h5 className="mt-0 mb-1">{rss.title}</h5>
              <p></p>
              <p>{rss.description}</p>
            </div> 
            </li>
          </a>
         

              )
            })
          }

        </ul>
      </section>

{/*World rss */}
 <br></br>
<h1 className="d-flex justify-content-center">Mundo</h1>
<br></br>
      <section className="container">
        <ul className="list-unstyled">

          {
            this.state.linksWorld.map(rss => {
              return (

          <a href={rss.url}>

          <li className="media pt-2">
            <img src={rss.image} alt={rss.url} className="mr-3" width="200" height="100"/>
            <div className="media-body">
              <h5 className="mt-0 mb-1">{rss.title}</h5>
              <p></p>
              <p>{rss.description}</p>
            </div>
          </li>
          </a>

              )
            })
          }

        </ul>
      </section>



     <footer className="container col-12 d-flex pt-3 justify-content-around footer bg-dark text-light text-center">
     <i className="fab fa-instagram"></i>
     </footer>
    </div>
  );
}
}
export default App;
