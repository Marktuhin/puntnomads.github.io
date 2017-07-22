const React = require('react');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
const Project = require('./Project');
const Main = require('./Main');
const ScrollToTop = require('./ScrollToTop');

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <ScrollToTop>
            <Switch>
              <Route exact path='/' component={Main}/>
              <Route path="/simon-game" 
              render={()=>
              <Project 
              name="Simon Game"
              image='simon_game'
              alt='Simon Game'
              description="This is a JavaScript recreation of the classic 1980s memory game 'Simon'. The winner is 
              declared after 20 successive turns. If you make a mistake, you have to take the turn again (unless 
              in 'Strict' mode, where the game will start from the beginning)."
              technology="Developed using JavaScript, with external websites providing the embedded sounds."
              github='SimonGame'
              preview='SimonGame' />}/>
              <Route path="/tic-tac-toe-game" 
              render={()=>
              <Project 
              name="Tic Tac Toe Game"
              image='tic_tac_toe_game'
              alt='Tic Tac Toe Game'
              description="This game is won by having 3 Xs or 3 Os in a horizontal, vertical, or diagonal row. 
              This game will restart until you have had enough. I believe I made the computer very hard to beat, 
              so have a go."
              technology="Developed using JavaScript/jQuery."
              github='TicTacToeGame'
              preview='TicTacToeGame' />}/>
              <Route path="/pomodoro-clock" 
              render={()=>
              <Project 
              name="Pomodoro Clock"
              image='pomodoro_clock'
              alt='Pomodoro Clock'
              description="The app allows you to work for a set interval and then take breaks. Traditionally, that 
              means working 25 minutes and taking a 5 minute break. The app can be paused and you can reset the timer."
              technology="Developed using JavaScript."
              github='PomodoroClock'
              preview='PomodoroClock' />}/>
              <Route path="/javascript-calculator" 
              render={()=>
              <Project 
              name="JavaScript Calculator"
              image='javascript_calculator'
              alt='JavaScript Calculator'
              description="This is a calculator build with web technologies. Users can do normal operations like 
              addition, subtraction, multiplication and division. They can also chain commands, use the modulo 
              operator and clear the display.The last answer is stored."
              technology=""
              github='JavaScriptCalculator'
              preview='JavaScriptCalculator' />}/>
              <Route path="/wikipedia-viewer" 
              render={()=>
              <Project 
              name="Wikipedia Viewer"
              image='wikipedia_viewer'
              alt='Wikipedia Viewer'
              description="Users can search for any term and the top 10 results from Wikipedia are displayed. The 
              display consists of a title, a short description and a link to the main Wikipedia page. Also a random 
              Wikipedia is opened if a button is clicked."
              technology="Developed using JavaScript/jQuery and the Wikipedia Mediawiki API."
              github='WikipediaViewer'
              preview='WikipediaViewer' />}/>
              <Route path="/local-weather" 
              render={()=>
              <Project 
              name="Local Weather"
              image='local_weather'
              alt='Local Weather'
              description="The page get geolocation data from the users browser and then displays the local weather to
               the user. The user is shown his city, the temperature, current weather type (e.g. rain, cloud, sun snow)
                and a background image based on the current weather type."
              technology="Developed using JavaScript/jQuery and the Open Weather API."
              github='LocalWeather'
              preview='LocalWeather' />}/>
              <Route path="/random-quote-machine" 
              render={()=>
              <Project 
              name="Random Quote Machine"
              image='random_quote_machine'
              alt='Random Quote Machine'
              description="The user is shown a quote from Confucius and can click a button to see a new random quote 
              from Confucius. They can tweet the quote that is being displayed as Twitter is opened in a new page."
              technology="Developed using JavaScript/jQuery."
              github='RandomQuoteMachine'
              preview='RandomQuoteMachine' />}/>
              <Route path="/tribute-page" 
              render={()=>
              <Project 
              name="Tribute Page"
              image='tribute_page'
              alt='Tribute Page'
              description="This is a tribute page to Elon Musk. It has a timeline of his life and a link to a 
              Wikipedia page about him. There is a nice quote about him on the page."
              technology="Developed with HTML and CSS."
              github='ElonMuskTributePage'
              preview='ElonMuskTributePage' />}/>
              <Route render={function () { return <p>Not Found</p> }} />
            </Switch>
          </ScrollToTop>  
        </Router>
      </div>
    )
  }
}

module.exports = App;
