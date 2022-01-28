import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "@nylas/components-agenda";

function App() {
  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  const diffTime = Math.abs(firstDayOfMonth - lastDayOfMonth);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return (
    <div>
      <div className="grid-container">
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
        <div>Sun</div>
        {Array(firstDayOfMonth.getDay())
          .fill(1)
          .map((_, i) => (
            <div key={i} />
          ))}
        {Array.from({ length: diffDays }, (_, i) => {
          const selected_date = new Date(
            today.getFullYear(),
            today.getMonth(),
            i + 1
          );
          return (
            <div key={selected_date.toISOString()}>
              {selected_date.getDate()}
              <nylas-agenda
                header_type="none"
                selected_date={selected_date}
                condensed_view={true}
                should_show_message_on_no_events=""
                id="4f115169-36e1-49a7-b4a4-ddd3cfa5cd7d"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
