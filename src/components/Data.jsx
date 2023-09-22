import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/Firebase";
import React, { useState, useEffect } from "react";


function usePlacesList() {
  const [placesList, setPlacesList] = useState([]);

  useEffect(() => {
    // Query Firestore collection
    const fetchData = async () => {
      try {
        const placesCollection = collection(db, 'Places');
        const querySnapshot = await getDocs(placesCollection);
        const placesData = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          placesData.push(data);
        });
        setPlacesList(placesData);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);

  return placesList;
}

function Data() {
  const placesList = usePlacesList();

  useEffect(() => {
    if (placesList.length > 0) {
      console.log(placesList);
    }
  }, [placesList]);



}
export { usePlacesList };

export default Data;
