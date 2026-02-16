import { Router } from "express";
import { errorHandler, healthCheck, notFound } from "../controllers/index.js";
import walletHistoryRouter from "./walletHistory.routes.js";

const router = Router();

router.get("/", healthCheck);

router.use("/wallet-history", walletHistoryRouter);

router.all("*", notFound);

router.use(errorHandler);

export default router;
