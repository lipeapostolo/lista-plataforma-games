import { Game } from "./game";
import { Plataforma } from "./plataforma";

fdescribe('Plataforma', () => {

    const jsonGame = {
        "path": { "_text": "./San Francisco Rush - Extreme Racing.PBP" },
        "name": { "_text": "San Francisco Rush : Extreme Racing" },
        "desc": { "_text": "San Francisco Rush Extreme Racing for the PlayStation is based on the 1996 hit arcade game by Atari Games. Players will race through locations based on San Francisco cities, rural areas, and suburban neighborhoods. Environments can also be cycled through day, night, and snow conditions in order to add some variety and challenge to the racing action. Players can alter their view of their car from a third-person perspective to a first-person view looking through the windshield. There are eight available cars to choose from that vary in speed and control as well as four difficulty levels (Beginner, Advanced, Expert, and Extreme). The higher the difficulty, the more control is sacrificed in order to increase the maximum speed. Car colors can also be customized to your liking, and there is a choice between manual and automatic gear transmissions."},
        "image": { "_text": "./images/San Francisco Rush - Extreme Racing.png" },
        "video": { "_text": "./videos/San Francisco Rush - Extreme Racing.mp4" },
        "marquee": [
            { "_text": "./marquee/San Francisco Rush - Extreme Racing.png" },
            { "_text": "./marquee/San Francisco Rush - Extreme Racing.png" }
        ],
        "releasedate": { "_text": "19980401T000000" },
        "developer": { "_text": "Climax Entertainment" },
        "publisher": { "_text": "Midway Home Entertainment" },
        "genre": { "_text": "Corrida, Pilotagem" },
        "players": {},
        "lang": { "_text": "en" }
    };
   
    it('Deveria criar Plataforma', () => {

        //when
        let plataforma = new Plataforma() 
        plataforma.nome = "Play";
        plataforma.listaGame = [
            new Game(jsonGame),
            new Game(jsonGame),
        ]
        
        //then
        expect(plataforma.nome === "Play").toBeTrue();
        expect(plataforma.listaGame.length === 2).toBeTrue();
    });
});