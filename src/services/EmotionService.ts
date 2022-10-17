import axios from "axios";

const URL = "http://localhost:22167/api/emotion";
export const fetchOffers = (): any[] => [""];

export const getEmotionByPhrase = async (phrase: string) => {
  try {
    const { data } = await axios.post(URL, { message: phrase });
    return data;
  } catch (e) {
    console.log("error", e);
  }
};

export const getEmotions = () => [
  { emotion: "amor", selected: false },
  { emotion: "contento", selected: false },
  { emotion: "enfado", selected: false },
  { emotion: "miedo", selected: false },
  { emotion: "sorpresa", selected: false },
  { emotion: "tristeza", selected: false },
];
