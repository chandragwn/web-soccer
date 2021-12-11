import { schedule } from "../interface/Schedule";
import { Team } from "../interface/Team";

export const SEASON_SCHEDULE:schedule[]=[
    {id:1,PlayingDate:new Date(2021,8,10),HomeTeam:'Persija',
    AwayTeam:'NinjaInPjamas',HomeScore:3,AwayScore:2,
    RefName:'Joko',Notes:'Overtime'},
    {id:2,PlayingDate:new Date(2021,8,10),HomeTeam:'Persija',
    AwayTeam:'NAVI',HomeScore:3,AwayScore:2,
    RefName:'Joko',Notes:'Overtime'},
    {id:3,PlayingDate:new Date(2021,8,10),HomeTeam:'Persija',
    AwayTeam:'Cloud9',HomeScore:3,AwayScore:2,
    RefName:'Joko',Notes:'Overtime'},
    {id:4,PlayingDate:new Date(2021,8,10),HomeTeam:'Persija',
    AwayTeam:'FAZE',HomeScore:3,AwayScore:2,
    RefName:'Joko',Notes:'Overtime'},
    {id:5,PlayingDate:new Date(2021,8,10),HomeTeam:'Persija',
    AwayTeam:'ASEP',HomeScore:3,AwayScore:2,
    RefName:'Joko',Notes:'Overtime'}
]
export const Teams:Team[]=[
    {id:1,Name:'Persija',type:'Klub Lokal'},
    {id:2,Name:'Cloud9',type:'Klub internasional'},
    {id:3,Name:'NAVI',type:'Klub internasional'},
    {id:4,Name:'FAZE',type:'Klub internasional'},
    {id:5,Name:'NinjaInPjamas',type:'internasional '},
    {id:6,Name:'ASEP',type:'Klub Lokal'},
    {id:7,Name:'NinjaInPjamas',type:'internasional '}
]