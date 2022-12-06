class Pokemon{
    constructor(name, sprite, hp, moves){
        this.name = name;
        this.sprite = sprite;
        this.hp = hp;
        this.fullhp = fullhp;
        this.moves = moves;
    }
}

let pkmList = [
    //setting pokémon
    ['Dragonite', 'https://img.pokemondb.net/sprites/black-white/normal/dragonite.png', 332 ,[
        ['Earthquake', 'ground', 80, 1],
        ['Dragon Claw', 'dragon', 80, 1],
        ['Ice Punch', 'ice', 75, 1],
        ['Thunder', 'electric', 110, 0.70]
    ]],
    //setting second pokémon
    ['Chandelure', 'https://img.pokemondb.net/sprites/black-white/normal/chandelure.png', 324 ,[
        ['Fire Blast', 'fire', 110, 0.85],
        ['Shadow Ball', 'ghost', 80, 1],
        ['Hidden Power', 'ice', 60, 1],
        ['Dark Pulse', 'electric', 80, 1]
    ]],
    //setting third pokémon
    ['Lucario', 'https://img.pokemondb.net/sprites/black-white/normal/lucario.png', 282 ,[
        ['Blaze Kick', 'fire', 85, 0.90],
        ['Close Combat', 'fight', 120, 1],
        ['Dragon Pulse', 'dragon', 85, 1],
        ['Ice Punch', 'ice', 75, 1]
    ]]
];

let typeMatch = {
    'Dragonite': [['ground'], ['ice', 'rock', 'dragon'] ['water', 'fire', 'grass', 'fight', 'bug']],
    'Chandelure': [['normal', 'fire', 'fight'], ['water', 'ground', 'rock', 'ground', 'ghost', 'dark'] ['grass', 'ice', 'poison', 'steel', 'bug', 'fairy']],
    'Lucario': [['poison'], ['fire', 'fight', 'ground'], ['normal', 'grass', 'ice', 'bug', 'rock', 'dragon', 'dark', 'steel']],
}
