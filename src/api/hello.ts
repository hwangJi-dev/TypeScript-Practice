import { Router, Request, Response } from "express";
import request from "request";
import { check, validationResult } from "express-validator";
import config from "../config";

import Hello from "../models/Hello";
import { IHelloInputDTO } from "../interfaces/IHello";

const router = Router();

/**
 * @route GET api/hello
 * @desc Get hello
 * @access Public
 */
router.get("/", async function (req: Request, res: Response) {
    try {
        res.json("hello");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Err");
    }
});
module.exports = router;