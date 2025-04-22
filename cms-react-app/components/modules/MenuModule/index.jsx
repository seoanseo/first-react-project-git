import React, { useState, useEffect } from "react";
import { Island } from "@hubspot/cms-components";
import MenuBar from "../../islands/MenuBar.jsx?island";
import Layout from "../../Layout.jsx";

export function Component({ fieldValues }) {
  const { pickedMenu } = fieldValues;
  const [menuData, setMenuData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    async function fetchMenuData() {
      try {
        // *** REPLACE WITH YOUR ACTUAL HUB SPOT MENU FETCHING FUNCTION ***
        const data = await window.HubSpotCMS.getMenu(pickedMenu);
        setMenuData(data.items || []); // Safely access items
      } catch (err) {
        setError(err);
        console.error("Error fetching menu data:", err);
      } finally {
        setIsLoading(false);
      }
    }

    if (pickedMenu) {
      fetchMenuData();
    } else {
      setIsLoading(false); // If no menu, don't load
    }
  }, [pickedMenu]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Layout>
      <Island module={MenuBar} navLinks={menuData} brandColor={{ color: "black" }} />
    </Layout>
  );
}

export { fields } from "./fields.jsx";

export const meta = {
  label: `The Menu Module`,
  description: `A module that displays a menu bar with links and submenus.`,
};