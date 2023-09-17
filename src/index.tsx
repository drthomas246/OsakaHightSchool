import React from "react";
import { createRoot } from "react-dom/client";

import Components from "./components";

const container = document.getElementById("app") as Element;
const root = createRoot(container);
root.render(<Components />);
