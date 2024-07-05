import express, { Router, Request, Response } from "express";
import { getAirports } from "../controller/airports";

const router: Router = express.Router();

router.get("/", async (_req: Request, res: Response) => {
    const airports = await getAirports()

    return res.send(airports)
})

export default router;
