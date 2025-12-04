import app from "./app.js";
import menuOrderRoutes from "./routes/menuOrderRoutes.js";
import reservationRoutes from "./routes/reservationRoute.js";

app.use("/api/reservation", reservationRoutes);
app.use("/api/menu", menuOrderRoutes);

app.listen(process.env.PORT, ()=>{
    console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
})
