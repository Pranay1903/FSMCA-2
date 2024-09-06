import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.8.21/v1/currencies/${currency}.json`
        );
        
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
  
        const result = await response.json();
        setData(result[currency]);
      } catch (e) {
        console.error(`Error fetching currency data: ${e.message}`);
        setData({ error: 'Failed to load currency data' });  // Setting error state
      }
    };
  
    fetchData();
  }, [currency]);
  

  return data;
}

export default useCurrencyInfo;