
import Chefs from './components/chefs/Chefs';
import Cuisine from './components/diff-cuisine/Cuisine';
import Heading from './components/Heading';
import Nav from './components/Nav';
import TopContainer from './components/TopContainer';

function App() {
  return (
    <div>
      <Nav />
      <TopContainer />
      <Cuisine />
      <Heading cName = "TOP CHEFS"/>
      <Chefs />
    </div>
  );
}

export default App;
