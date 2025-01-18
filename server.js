const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const app = express();
const port = 3600;

app.use(cors());
app.use(express.json());

const serviceAccount = require('./le-coqui-firebase-adminsdk-tsq42-8f9148501c.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

app.put("/update-user", async (req, res) => {
    const { uid, email, displayName, cleanedPhoneNumber } = req.body;
    console.log(req.body);
    let newPhoneNumber;
    if (cleanedPhoneNumber === '') {
        newPhoneNumber = '+330000000000';
    } else {
        newPhoneNumber = '+33' + cleanedPhoneNumber.replace(/\s+/g, '');
    }
    if (!uid) {
        return res.status(400).json({ error: "L'UID est requis pour mettre à jour l'utilisateur." });
    }
    try {
        console.log("Mise à jour de l'utilisateur...");
        console.log(newPhoneNumber);


        await admin.auth().updateUser(uid, {
            email: email,
            displayName: displayName,
            phoneNumber: newPhoneNumber,
        });
        console.log("User updated");

        res.status(200).json({ message: "Utilisateur mis à jour avec succès." });
    } catch (error) {
        console.error("Erreur lors de la mise à jour de l'utilisateur :", error);
        res.status(500).json({ error: "Erreur lors de la mise à jour de l'utilisateur." });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
