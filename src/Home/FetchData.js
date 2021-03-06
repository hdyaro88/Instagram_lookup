import axios from "axios";
import { FilterData } from "./FilterData";

export const fetchData = async (query, loadingHandler) => {
  var temp = query;
  if (temp.charAt(0) === "@") temp = temp.substring(1);
  try {
    loadingHandler({ status: true, message: "Please wait...." });
    const options = {
      method: "GET",
      url: "https://instagram-bulk-profile-scrapper.p.rapidapi.com/clients/api/ig/ig_profile",
      params: { ig: temp, response_type: "long", corsEnabled: "true" },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "instagram-bulk-profile-scrapper.p.rapidapi.com",
      },
    };
    const res = await axios.request(options);
    if (res) {
      console.log(res.data[0]);
      const data = FilterData(res?.data[0]);
      return data;
    }
  } catch (err) {
    console.log(err);
  } finally {
    loadingHandler({ status: false, message: null });
  }
};
