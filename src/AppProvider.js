import React from "react";
import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
const AppWrapper = ({ children }) => <AppProvider>{children}</AppProvider>;

export default AppWrapper;
