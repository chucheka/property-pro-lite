import multer from 'multer';
// import Datauri from 'datauri';
// import path from 'path';

// const storage = multer.memoryStorage();
// const multerUploads = multer({ storage }).single('image');

// const dUri = new Datauri();
// const dataUri = (req) => {
// 	dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);
// };

// export { multerUploads, dataUri };
const uploads = multer({
	storage: multer.diskStorage({}),
	fileFilter: (req, file, cb) => {
		if (!file.mimetype.match(/jpe|jpeg|png|gif$i/)) {
			cb(new Error('File is not supported'), false);
			return;
		}
		cb(null, true);
	}
});

export default uploads;
