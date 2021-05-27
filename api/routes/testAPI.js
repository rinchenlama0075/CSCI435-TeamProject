
//pro
const { Prohairesis } = require('prohairesis');
var express = require('express');
var router = express.Router();

//db
const database = new Prohairesis("mysql://b02a95136d2ffa:887aaeeb@us-cdbr-east-03.cleardb.com/heroku_aeff52ae7eb83ca?reconnect=true")


router.get('/', async (req, res) => {
    // res.send('API is working properly');
    body = await database.query('select * from pokemon;');
    res.send(body);
});


router.get('/moves', async (req, res) => {
    // res.send('API is working properly');
    body = await database.query('select * from moves;');
    res.send(body);
});
router.get('/firePokemon', async (req, res) => {
    // res.send('API is working properly');
    body = await database.query('select * from name_type_stats_table where (Type_1 = "fire" or Type_2="fire");');
    res.send(body);
});
router.get('/waterPokemon', async (req, res) => {
    // res.send('API is working properly');
    body = await database.query('select * from name_type_stats_table where (Type_1 = "water" or Type_2="water");');
    res.send(body);
});
router.get('/grassPokemon', async (req, res) => {
    // res.send('API is working properly');
    body = await database.query('select * from name_type_stats_table where (Type_1 = "grass" or Type_2="grass");');
    res.send(body);
});
router.get('/rockPokemon', async (req, res) => {
    // res.send('API is working properly');
    body = await database.query('select * from name_type_stats_table where (Type_1 = "rock" or Type_2="rock");');
    res.send(body);
});
router.get('/bugPokemon', async (req, res) => {
    // res.send('API is working properly');
    body = await database.query('select * from name_type_stats_table where (Type_1 = "bug" or Type_2="bug");');
    res.send(body);
});
router.get('/normalPokemon', async (req, res) => {
    // res.send('API is working properly');
    body = await database.query('select * from name_type_stats_table where (Type_1 = "normal" or Type_2="normal");');
    res.send(body);
});
router.get('/poisonPokemon', async (req, res) => {
    // res.send('API is working properly');
    body = await database.query('select * from name_type_stats_table where (Type_1 = "poison" or Type_2="poison");');
    res.send(body);
});
router.get('/electricPokemon', async (req, res) => {
    // res.send('API is working properly');
    body = await database.query('select * from name_type_stats_table where (Type_1 = "electric" or Type_2="electric");');
    res.send(body);
});
router.get('/groundPokemon', async (req, res) => {
    // res.send('API is working properly');
    body = await database.query('select * from name_type_stats_table where (Type_1 = "ground" or Type_2="ground");');
    res.send(body);
});
router.get('/fairyPokemon', async (req, res) => {
    // res.send('API is working properly');
    body = await database.query('select * from name_type_stats_table where (Type_1 = "fairy" or Type_2="fairy");');
    res.send(body);
});
router.get('/fightingPokemon', async (req, res) => {
    // res.send('API is working properly');
    body = await database.query('select * from name_type_stats_table where (Type_1 = "fighting" or Type_2="fighting");');
    res.send(body);
});
router.get('/psychicPokemon', async (req, res) => {
    // res.send('API is working properly');
    body = await database.query('select * from name_type_stats_table where (Type_1 = "psychic" or Type_2="psychic");');
    res.send(body);
});
router.get('/ghostPokemon', async (req, res) => {
    // res.send('API is working properly');
    body = await database.query('select * from name_type_stats_table where (Type_1 = "ghost" or Type_2="ghost");');
    res.send(body);
});
router.get('/icePokemon', async (req, res) => {
    // res.send('API is working properly');
    body = await database.query('select * from name_type_stats_table where (Type_1 = "ice" or Type_2="ice");');
    res.send(body);
});
router.get('/dragonPokemon', async (req, res) => {
    // res.send('API is working properly');
    body = await database.query('select * from name_type_stats_table where (Type_1 = "dragon" or Type_2="dragon");');
    res.send(body);
});


module.exports = router;
