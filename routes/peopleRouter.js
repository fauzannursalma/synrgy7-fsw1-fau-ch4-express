const router = require("express").Router();
const { idChecker } = require("../middlewares/errorHandler");
const {
  getPeople,
  getPeopleById,
  createPeople,
  deletePeople,
  updatePeople,
  uploadImageHandler,
  cdnUploadImageHandler,
} = require("../services/peopleService");
const upload = require("../middlewares/uploadHandler");
const cdnUpload = require("../middlewares/cdnUploadHandler");

router.get("/", getPeople);
router.get("/:id", idChecker, getPeopleById);
router.post("/create", createPeople);
router.delete("/:id", idChecker, deletePeople);
router.put("/:id", idChecker, updatePeople);
router.post("/upload", upload.single("image"), uploadImageHandler);
router.post("/upload/cdn", cdnUpload.single("image"), cdnUploadImageHandler);

module.exports = router;
