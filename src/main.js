import { createApp, provide } from "vue";

import { router } from "./routes/main";
import { store } from "./store/store";
import App from "./App.vue";
import "./index.css";

const app = createApp(App);
app.use(router);
app.use(store);

app.mount("#app");
