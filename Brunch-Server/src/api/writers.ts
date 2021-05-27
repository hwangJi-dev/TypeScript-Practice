import express, { Request, Response } from "express";
import { check, validationResult } from "express-validator";

const router = express.Router();
import Writer from "../models/Writer";

/**  작가 정보 조회 기능
 * @route get /writers
 * @desc load writer's information
 * @access Public
 */

router.get(
    "/",
    async (req: Request, res: Response) => {
        try {
            const writer = await Writer.find() //find => 전체 정보, findOne => 전체 중 특정 값 조회

            if(!writer) {
                return res.status(400).json({ msg: "작가정보를 조회할 수 없습니다." });
            }
            res.json(writer); //작가 정보를 응답으로 담아 보냄
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Server Error")
        }
    }
);
module.exports = router;

