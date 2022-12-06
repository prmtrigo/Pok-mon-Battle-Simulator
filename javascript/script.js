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

function spawn(){
    let p = pkmList[Math.floor(Math.random()*pkmList.length)];
    let pkm =  new Pokemon(p[0], p[1], p[2], p[3]);

    if(bool){
        for(i=0; i<4;i++){
            document.getElementById('m'+i).value = pkm.moves[i][0];
        }
    }
    return pkm;
}

//spawning the first pokémon
let pk1 = spawn(true)
s1 = document.createElement('img');
s1.src = pk1.sprite
document.getElementById('pk1').appendChild(s1);
document.getElementById('current_hp').innerHTML = '<p>HP: ' + pk1.hp + '/' + pk1.fullhp + '</p>'

//spawning the second pokémon
let pk2 = spawn(false)
s2 = document.createElement('img');
s2.src = pk2.sprite
document.getElementById('pk2').appendChild(s2);
document.getElementById('current_hp').innerHTML = '<p>HP: ' + pk2.hp + '/' + pk2.fullhp + '</p>'

for(i=0; i<4; i++){
    let btn =  document.getElementById('m'+i);
    let move = pk1.moves[i];
    function addHandler(btn, move, pk1, pk2){
        btn.addEventListener('click',function(e){
            attack(move, pk1, pk2, 'hp2', '');
            setTimeout(attack,2000, pk2.moves[Math.floor(Math.random()*3)], pk2, pk1, 'hp1', 'Foe ');
        })
    }
    addHandler(btn, move, pk1, pk2);
}

function attack(move, attacker, receiver, hp, owner){
    

}

function checkWinner(){

}
