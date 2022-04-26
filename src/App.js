import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
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
              <NavLink href="/online">Online Orders</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/store">In Store Purchases</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
                </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                  </DropdownItem>
                <DropdownItem>
                  Option 2
                  </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                  </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>

      <Header />
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/online' element={<OnlineList />} />
        <Route path='/store' element={<InStoreList />} />
      </Routes>
    </BrowserRouter>    
    </div>
  )
}

export default App;
