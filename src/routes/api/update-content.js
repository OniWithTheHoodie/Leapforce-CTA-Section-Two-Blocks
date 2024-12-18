// import express from "express";
// import fs from "fs/promises";
// import cors from "cors";

// const app = express();

// app.use(cors({
//     origin: 'http://localhost:5173'
// }));
// app.use(express.json());

// app.post("$lib/update-content", async (req, res) => {
//     const updatedContent = req.body;
//     try {
//         await fs.writeFile("content.json", JSON.stringify(updatedContent, null, 2));
//         res.status(200).send("Content updated successfully");
//     } catch (err) {
//         res.status(500).send("Error saving content");
//     }
// });

// app.listen(3000, () => console.log("Server is running on http://localhost:3000"));
// // 