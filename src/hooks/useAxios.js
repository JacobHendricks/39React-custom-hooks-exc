import React, { useState, useEffect } from 'react';
import axios from 'axios';

function useAxios(baseUrl) {
  const [responses, setResponses] = useState([]);

  const addResponseData = async () => {
    const response = await axios.get(`${baseUrl}`);
    setResponses(responses => [...responses, response.data]);
  };

  const clearResponses = () => setResponses([]);

  return [responses, addResponseData, clearResponses];
}

export default useAxios;