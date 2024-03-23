import Bookings from "@/components/Bookings/Bookings.jsx";
import Footer from "@/components/Footer/Footer";
import "./App.scss";
import AppHeader from "../AppHeader/AppHeader.jsx";
import Restaurant from "@/components/Restaurant/Restaurant.jsx";
import Deck from "../Deck/Deck";
import BookingForm from "../BookingForm/BookingFrom.jsx";

const App = () => (
  <div>
    <AppHeader />
    <Deck />
    <Bookings />
    <Restaurant />
    <BookingForm />
    <Footer />
  </div>
);

export default App;
