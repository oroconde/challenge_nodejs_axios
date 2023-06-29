import { apiExterno } from "../services/service.mjs";

export const callApi = async (req, res) => {
  try {
    const datas = req.params;
    const called = await apiExterno(datas);
    if (called) {
      res.status(200).json(called);
    } else {
      res.status(404).json({ msg: "datas not found" });
    }
  } catch (error) {
    throw error;
  }
};

// export const callApi = (req, res) => {
//   const result = apiExterno;

//   result
//     .then((response) => {
//       res.send(JSON.parse(response));
//     })
//     .catch((err) => {
//       throw err;
//     });
// };
