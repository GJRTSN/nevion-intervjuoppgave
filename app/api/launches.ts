import axios from "axios";
import { Launch } from "@/app/types/launch";

export const getLaunches = async (): Promise<Launch[]> => {
  try {
    const response = await axios.get("https://api.spacexdata.com/v3/launches");
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
};

export const getLaunch = async (flightNumber: number): Promise<Launch> => {
  try {
    const response = await axios.get(
      `https://api.spacexdata.com/v3/launches/${flightNumber}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
};
