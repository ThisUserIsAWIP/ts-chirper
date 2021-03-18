import * as express from 'express';
import store from "../chirpstore"
let router = express.Router();



router.get("/:id?", (req, res) => {
    let id = Number(req.params.id);
    console.log({id})
    if (!isNaN(id)) {
        let chirp = store.GetChirp(id)
        let chirpArray = [{
            id,
            author: chirp.author,
            text: chirp.text
        }]
        res.json(chirpArray);
    } else {
        let allChirps = store.GetChirps()
        let allChirpArray = Object.keys(allChirps).map(chirp => {
            return {
                id: chirp,
                author: allChirps[chirp].author,
                text: allChirps[chirp].text
            }
        })
        allChirpArray.pop()
        res.json(allChirpArray);
    }
});

router.post("/", (req, res) => {
    console.log('chirp router hit')
    store.CreateChirp(req.body);
    res.sendStatus(200);
});

router.put("/:id", (req, res) => {
    let id = req.params.id;
    let chirp = store.GetChirp(id);

    if (Object.keys(chirp).length === 0) {
        res.sendStatus(404);
        return;
    }

    store.UpdateChirp(id, req.body);

    res.sendStatus(200);
});

router.delete("/:id", (req, res) => {
    let id = req.params.id;
    store.DeleteChirp(id);
    res.sendStatus(200);
});


export default router;