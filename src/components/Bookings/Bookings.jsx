import Search from "@/components/Search/Search";
// import SearchResults from "@/componentsSearchResults.js";
// import FakeBookings from "@/data/fakeBookings.json";

const Bookings = () => {
  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
    // create filter search
  };

  return (
    <main className="bookings">
      <Search search={search} />
      {/* <SearchResults results={FakeBookings} /> */}
    </main>
  );
};

export default Bookings;
