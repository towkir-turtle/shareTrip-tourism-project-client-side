import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home/Home";
import Flights from "./pages/Flights/Flights";
import TravelAdvisory from "./pages/TravelAdvisory/TravelAdvisory";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./pages/Footer/Footer";
import PackageDetails from "./pages/PackageDetails/PackageDetails";
import Login from "./pages/Login/Login";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./pages/Private/PrivateRoute";
import MyOrders from "./pages/MyOrders/MyOrders";
import ManageAllOrders from "./pages/ManageAllOrders/ManageAllOrders";
import AddNewService from "./pages/AddNewService/AddNewService";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/flights">
              <Flights></Flights>
            </Route>
            <Route path="/travelAdvisory">
              <TravelAdvisory></TravelAdvisory>
            </Route>
            <PrivateRoute path="/packageDetails/:packageId">
              <PackageDetails></PackageDetails>
            </PrivateRoute>
            <Route path="/myOrders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route path="/addNewService">
              <AddNewService></AddNewService>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
