import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  try {
    const form = formidable({ multiples: true });
    const data = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve({ fields, files });
      });
    });

    const { name, email, phone, motivation } = data.fields;
    const cv = data.files.cv ? data.files.cv[0] : null;
    const motivationLetter = data.files.motivationLetter ? data.files.motivationLetter[0] : null;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "tonemail@gmail.com", // ✅ remplace par ton email
        pass: "ton-mot-de-passe-ou-app-password", // ⚠️ un "mot de passe d'application" Gmail
      },
    });

    const attachments = [];
    if (cv)
      attachments.push({
        filename: cv.originalFilename,
        path: cv.filepath,
      });
    if (motivationLetter)
      attachments.push({
        filename: motivationLetter.originalFilename,
        path: motivationLetter.filepath,
      });

    const mailOptions = {
      from: email,
      to: "ilyaskhyari@gmail.com", // ✅ ton adresse de réception
      subject: "Nouvelle candidature Rotaract",
      text: `
        Nom : ${name}
        Email : ${email}
        Téléphone : ${phone}
        Motivation : ${motivation}
      `,
      attachments,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Candidature envoyée avec succès !" });
  } catch (error) {
    console.error("Erreur:", error);
    return NextResponse.json({ success: false, message: "Erreur lors de l'envoi." }, { status: 500 });
  }
}
