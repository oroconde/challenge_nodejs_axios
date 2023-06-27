import axios from "axios";

export const apiExterno = async () => {
  try {
    const apiKey = "aSuperSecretKey";
    const response = await axios.get("https://echo-serv.tbxnet.com/", {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
// apiExterno();
  