import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NotificationsProvider } from "@mantine/notifications"
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider>
          <NotificationsProvider autoClose={3000}>
            <App />
          </NotificationsProvider>
    </MantineProvider>
  </React.StrictMode>
);
