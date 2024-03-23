import { useEffect, useState } from "react";
import Search from "@/components/Search/Search";
import SearchResults from "@/components/SearchResults/SearchResults.jsx";
import FakeBookings from "@/data/fakeBookings.json";

const Bookings = () => {
  const search = (searchVal) => {
    const filteredBookings = bookings.filter((booking) => {
      const firstName = booking.firstName.toLowerCase();
      const surname = booking.surname.toLowerCase();
      return firstName.includes(searchVal) || surname.includes(searchVal);
    });
    setBookings(filteredBookings);
  };

  const [bookings, setBookings] = useState(FakeBookings);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://hotel-react.glitch.me/delayed")
      .then((response) => {
        console.log(response);
        if (response.ok) {
          setIsLoading(false);
          return response.json();
        }
        console.log("About to generate error");
        throw new Error("Something went wrong");
      })
      
      .catch((error) => {
        console.log(error);
      });
  });

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <main className="bookings">
      <Search search={search} />
      <SearchResults results={bookings} />
    </main>
  );
};

export default Bookings;
