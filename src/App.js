import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Landing from './components/Landing';
import List from './components/List'
import OnlineList from './components/OnlineList';
import InStoreList from './components/InStoreList'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const App = () => {

  return (
    <div className="App">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">My Sales Catalog</NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
          <NavItem>
              <NavLink href="/allorders">All Orders</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/online">Online Orders</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/store">In Store Purchases</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <Header />
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/allorders' element={<List />} />
        <Route path='/online' element={<OnlineList />} />
        <Route path='/store' element={<InStoreList />} />
      </Routes>
    </BrowserRouter>    
    </div>
  )
}

export default App;
