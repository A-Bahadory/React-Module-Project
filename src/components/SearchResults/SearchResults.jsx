import React, { useState } from "react";
import dayjs from "dayjs";

function SearchResults({ results }) {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (index) => {
    if (selectedRow === index) {
      setSelectedRow(null);
    } else {
      setSelectedRow(index);
    }
  };

  return (
    <table>
      <thead>
        <tr style={{ backgroundColor: "lightgreen" }}>
          <th>Id</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Room Id</th>
          <th>Check In</th>
          <th>Check Out</th>
          <th>Number of Nights</th>
        </tr>
      </thead>
      <tbody>
        {results.map((item, index) => {
          const startDate = dayjs(item.checkInDate);
          const endDate = dayjs(item.checkOutDate);
          const daysDifference = endDate.diff(startDate, "day");

          const isSelected = selectedRow === index;
          const rowStyle = {
            textAlign: "center",
            backgroundColor: "lightblue",
          };
          if (isSelected) {
            rowStyle.backgroundColor = "red";
          }

          return (
            <tr
              key={index}
              style={rowStyle}
              onClick={() => handleRowClick(index)}
            >
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.firstName}</td>
              <td>{item.surname}</td>
              <td>{item.email}</td>
              <td>{item.roomId}</td>
              <td>{item.checkInDate}</td>
              <td>{item.checkOutDate}</td>
              <td>{daysDifference}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default SearchResults;
