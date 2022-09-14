import "./ExpenseItem.css";

function ExpenseItem() {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const monthnames = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const d = new Date();
  let day = weekday[d.getDay()];
  let date = d.getDate();
  let month = monthnames[d.getMonth()];
  let year = d.getFullYear();

  return (
    <div>
      <div>
        Today's date is {day}, {month} {date}, {year}
      </div>
      <div>
        <h2>Car Insurance</h2>
        <div>$294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
