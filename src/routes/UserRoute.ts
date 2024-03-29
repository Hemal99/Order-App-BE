import express, { Request, Response, NextFunction } from "express";
import {
  UserSignUp,
  UserLogin,
  UserResetPassword,
  AddRequest,
  GetRequest,
  EditRequest,
  DeleteRequest,
  ChangeRequestTicketStatus,
  GetAllRequest,
  ApproveOrRejectRequestTicket,
  AddCounter,
  GetAllUsers,
  DeleteUser,
  GetCurrentRequesterEntries,
  GetAllLogs,
  GetAllLogsByRequester,
  GetLogsByRequestId,
  GetAllRequestWithRejectedStatus,
  GetAllPastRequest,
  GetPastRequesterEntries,
} from "../controllers/UserController";

import { Authenticate } from "../middleware";

const router = express.Router();

/* ------------------- SignUp / Create Customer --------------------- */
router.post("/signup", UserSignUp);

/* ------------------- Login --------------------- */
router.post("/login", UserLogin);

/* ------------------- Forget Password --------------------- */
router.post("/reset-password", UserResetPassword);

/* ------------------- add counter --------------------- */
router.post("/add-counter", AddCounter);

/* ------------------- Authentication --------------------- */
router.use(Authenticate);

/* ------------------- Add Request --------------------- */
router.post("/add-request", AddRequest);

/* ------------------- Get Request  --------------------- */
router.get("/get-request/:id", GetRequest);

/* ------------------- Get All Request  --------------------- */
router.get("/get-all-request", GetAllRequest);

/* ------------------- Edit Reqiest --------------------- */
router.put("/edit-request/:id", EditRequest);

/* ------------------- Delete Request --------------------- */

router.delete("/delete-request/:id", DeleteRequest);

/* ------------------- Change Status --------------------- */

router.put("/change-status/:id", ChangeRequestTicketStatus);

router.put("/approve-or-reject-request/:id", ApproveOrRejectRequestTicket);

router.get("/get-all-users", GetAllUsers);

router.delete("/delete-user/:id", DeleteUser);

router.get("/get-all-current-request", GetAllRequest);

router.get("/get-current-requests-by-requester-id", GetCurrentRequesterEntries);

router.get("/get-all-past-request", GetAllPastRequest);

router.get("/get-past-requests-by-requester-id", GetPastRequesterEntries);

router.get("/get-all-logs", GetAllLogs);

router.get("/get-all-logs-by-requester", GetAllLogsByRequester);

router.get("/get-logs-by-request-id/:id", GetLogsByRequestId);

router.get(
  "/get-all-request-with-rejected-status",
  GetAllRequestWithRejectedStatus
);

export { router as UserRoute };
