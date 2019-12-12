import user from '../api/models/result';
import result from '../api/models/result';

const users = [{
    'username': 'user1',
    'password': 'test1',
},
{
    'username': 'user2',
    'password': 'test2',
},
];

const results=[
    {
        "match_id": "SFUVMNU",
        "result_id":"0001",
        "comp_id":"EPL",
        "no_of_goals": "6",
        "no_of_corner": "9",
        "no_of_yellowcards": "3",
        "no_of_fouls_committed": "23",
        "scoreline": "3-3",
        "scorers": [
            "J Fleck","L Mousset","O McBurnie","B Williams","M Greenwood","M Rashford"
        ]
    },
    {
        "match_id": "MNUVBHA",
        "result_id":"0002",
        "comp_id":"EPL",
        "no_of_goals": "4",
        "no_of_corner": "7",
        "no_of_yellowcards": "7",
        "no_of_fouls_committed": "24",
        "scoreline": "3-1",
        "scorers": [
            "A Pereira","D Dropper","M Rashford","L Dunk"
                ]
    },
    {
        "match_id": "CHEVMNU",
        "result_id":"0003",
        "comp_id":"CORABAO",
        "no_of_goals": "3",
        "no_of_corner": "9",
        "no_of_yellowcards": "4",
        "no_of_fouls_committed": "25",
        "scoreline": "1-2",
        "scorers": [
            "M Rashford","M Rashford","M Batshuayi "
                ]
    },
    {
        "match_id": "MNUVPNB",
        "result_id":"0004",
        "comp_id":"EUROPA",
        "no_of_goals": "3",
        "no_of_corner": "9",
        "no_of_yellowcards": "4",
        "no_of_fouls_committed": "25",
        "scoreline": "3-0",
        "scorers": [
            "M Rashford","M Greenwood","A Martial "
                ]
    },
    {
        "match_id": "SOUVMNU",
        "result_id":"0005",
        "comp_id":"EPL",
        "no_of_goals": "2",
        "no_of_corner": "5",
        "no_of_yellowcards": "3",
        "no_of_fouls_committed": "24",
        "scoreline": "1-1",
        "scorers": [
            "D james","J Vestergaard","K Danso(Red) "
                ]
    },
    {
        "match_id": "MNUVLIV",
        "result_id":"0006",
        "comp_id":"EPL",
        "no_of_goals": "2",
        "no_of_corner": "4",
        "no_of_yellowcards": "1",
        "no_of_fouls_committed": "20",
        "scoreline": "1-1",
        "scorers": [
            "M Rashford","A Lallana "
                ]
    },
    {
        "match_id": "BNMVMNU",
        "result_id":"0007",
        "comp_id":"EPL",
        "no_of_goals": "1",
        "no_of_corner": "14",
        "no_of_yellowcards": "7",
        "no_of_fouls_committed": "26",
        "scoreline": "1-0",
        "scorers": [
            "J King "
                ]
    },
    {
        "match_id": "NOCVMNU",
        "result_id":"0008",
        "comp_id":"EPL",
        "no_of_goals": "4",
        "no_of_corner": "11",
        "no_of_yellowcards": "4",
        "no_of_fouls_committed": "22",
        "scoreline": "1-3",
        "scorers": [
            "O Hernandez","S McTominay","M Rashford","A Martial"
                ]
    },
    {
        "match_id": "ASTVMNU",
        "result_id":"0009",
        "comp_id":"EUROPA",
        "no_of_goals": "3",
        "no_of_corner": "11",
        "no_of_yellowcards": "4",
        "no_of_fouls_committed": "22",
        "scoreline": "2-1",
        "scorers": [
            "D Shomko","D Bernard (OG)","J Lingard"
                ]
    },
    {
        "match_id": "PNBVMNU",
        "result_id":"0010",
        "comp_id":"EUROPA",
        "no_of_goals": "1",
        "no_of_corner": "11",
        "no_of_yellowcards": "4",
        "no_of_fouls_committed": "38",
        "scoreline": "0-1",
        "scorers": [
            "A Martial (pen)"
                ]
    },
    {
        "match_id": "NCUVMNU",
        "result_id":"0011",
        "comp_id":"EPL",
        "no_of_goals": "1",
        "no_of_corner": "10",
        "no_of_yellowcards": "6",
        "no_of_fouls_committed": "22",
        "scoreline": "1-0",
        "scorers": [
            "M Longstaff"
                ]
    }
];

