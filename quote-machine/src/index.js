import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const quoteGroup = [
    {quotes: "Be yourself; everyone else is already taken.", author:"Oscar Wilde"},
    {quotes: "You've gotta dance like there's nobody watching.", author:"William W. Purkey"},
    {quotes: "Be the change that you wish to see in the world.", author:"Mahatma Gandhi"},
    {quotes: "We accept the love we think we deserve.", author:"Stephen Chbosky"},
    {quotes: "Without music, life would be a mistake.", author:"Friedrich Nietzsche"},
    {quotes: "It is never too late to be what you might have been.", author:"George Eliot"},
    {quotes: "Everything you can imagine is real.", author:"Pablo Picasso"},
    {quotes: "Do what you can, with what you have, where you are.", author:"Theodore Roosevelt"},
   ];

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function getRandomNumber(){
  return Math.floor(Math.random()*hex.length);
}


// function getColor() {
//   let num = "#";

//   for (let i=0; i<6; i++){
//     num = num + hex[getRandomNumber()];
//   }
// return num;
// }
// ;

// const Color = {
//   backgroundColor: getColor(),
// }


class Wrapper extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      quotes : quoteGroup[this.randomNumber()].quotes,
      author : quoteGroup[this.randomNumber()].author,
      background: {backgroundColor: this.getColor()},
      colour: {color: this.getColor()}
      }

      this.handleChange = this.handleChange.bind(this);
        
    }

    randomNumber() {
      return Math.floor(Math.random()*quoteGroup.length);
    } 

    getColor() {
      let num="#"
      for (let i=0; i<6; i++){
        num = num + hex[getRandomNumber()];
      }
    return num;
    };
    
    handleChange() {
      let finalQuote = quoteGroup[this.randomNumber()].quotes;
      let finalAuthor = quoteGroup[this.randomNumber()].author;
      this.setState({
        quotes: finalQuote,
        author: finalAuthor,
        background: {backgroundColor: this.getColor()},
        colour: {color: this.getColor()}
      })
    }
  
  
    
  render() {

    return (
      <section className="container-fluid" style={this.state.background}>
          <div id="quote-box" className="card bg-white">
            <blockquote id="text" className='pt-4' style={this.state.colour} >
              {this.state.quotes}
            </blockquote>
            <p id="text" style={this.state.colour} > {this.state.author}</p>
            <button id="new-quote" type="button" className='btn btn-outline-light' style={this.state.background} onClick={this.handleChange}> Next Quote </button>
            <div>
              <a id="tweet-quote" className="btn btn-outline-light" href="https://www.twitter.com" role="button" style={this.state.background}><span class="fa fa-twitter"></span></a>
            </div>
            
          </div>
      </section>
      
     
      )
  }

}
  
ReactDOM.render(
  <React.StrictMode>
    <Wrapper />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
