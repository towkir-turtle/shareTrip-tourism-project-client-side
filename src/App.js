import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home/Home";
import Footer from "./pages/Footer/Footer";
import PackageDetails from "./pages/PackageDetails/PackageDetails";
import Login from "./pages/Login/Login";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./pages/Private/PrivateRoute";
import AddNewPackage from "./pages/AddNewPackage/AddNewPackage";
import ManageAllPackages from "./pages/ManageAllPackages/ManageAllPackages";
import MyPackages from "./pages/MyPackages/MyPackages";

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
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/packageDetails/:packageId">
              <PackageDetails></PackageDetails>
            </PrivateRoute>
            <PrivateRoute path="/myPackages">
              <MyPackages></MyPackages>
            </PrivateRoute>
            <PrivateRoute path="/manageAllPackages">
              <ManageAllPackages></ManageAllPackages>
            </PrivateRoute>
            <PrivateRoute path="/addNewPackage">
              <AddNewPackage></AddNewPackage>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
