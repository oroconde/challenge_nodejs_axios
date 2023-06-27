import { apiExterno } from "../services/service.mjs";

export const callApi = (req, res) => {
  const result = apiExterno;
  result
    .then((response) => {
      res.send(JSON.parse(response));
    })
    .catch((err) => {
      throw err;
    });
};