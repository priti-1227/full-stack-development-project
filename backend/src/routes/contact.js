import { Router } from "express";
import Contact from "../models/Contact.js";

const router = Router();

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    const { name, phone, company, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: "Name and Email are required" });
    }
    const contact = await Contact.create({ name, phone, company, email });
    res.status(201).json({ ok: true, contact });
  } catch (err) {
    console.error("Error saving contact:", err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
