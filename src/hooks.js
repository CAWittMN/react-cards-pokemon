import { useState } from "react";
import axios from "axios";

const useFlip = () => {
  const [isFacingUp, setIsFacingUp] = useState(true);
  const flipCard = () => {
    setIsFacingUp((isUp) => !isUp);
  };
  return [isFacingUp, flipCard];
};

const useAxios = (url, formatter = (data) => data) => {
  const [data, setData] = useState([]);
  const addData = async (restOfUrl = "") => {
    const response = await axios.get(url + restOfUrl);
    setData((data) => [...data, formatter(response.data)]);
  };
  const clearData = () => setData([]);
  return [data, addData, clearData];
};

export { useFlip, useAxios };
