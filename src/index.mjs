import { app } from "./app.mjs";
import PORT from "./config/index.mjs";

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
