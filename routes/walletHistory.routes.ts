import { Router } from "express";
import {
  getWalletHistory,
  healthCheck,
} from "../controllers/index.js";

const walletHistoryRouter = Router();

walletHistoryRouter.get("/", healthCheck);
walletHistoryRouter.post("/", getWalletHistory);

export default walletHistoryRouter;
