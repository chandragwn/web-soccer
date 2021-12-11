import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { schedule } from '../interface/Schedule';
import { Team } from '../interface/Team';
import { Ranking } from '../interface/rangking';
import {SoccerService} from '../service/Soccer.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {
  public UsingAsync:boolean = false;
  public MyTeams : Team[];
  public LeagueName:string;
  public MySchedule : schedule[];
  public Standings : Ranking[];

  constructor(private _titleService:Title, private _soccerService: SoccerService) {
    this._titleService.setTitle('Pertandingan Sepakbola Negara Akoeh');
    this.MyTeams=[];
    this.MySchedule=[];
    this.Standings=[];
    this.getTeams();
    this.LeagueName = "Liga ku";
    this.getSchedule();
    this.ComputeRankings();
   }

  ngOnInit(): void {
  }
  getTeams(){
    if(this.UsingAsync){
      let xx = this._soccerService.getTeamAsync();
        xx.then((Teams:Team[])=>this.MyTeams = Teams);
    }
    else {
      this.MyTeams = this._soccerService.getTeams();
    }
  }

  private getSchedule(){
    if(this.UsingAsync){
      let xx = this._soccerService.getScheduleAsync();
        xx.then((Schedules:schedule[])=> this.MySchedule = Schedules);
    }else{
      this.MySchedule = this._soccerService.getSchedule();
    }
  }
  public ComputeRankings(){
    var curDate: Date = new Date();
    var TeamAt:number;
    this.Standings = [];
    this.MySchedule.forEach(element => {
      if(element.PlayingDate < curDate && element.HomeScore>=0){
        TeamAt = this.FindTeam(element.HomeTeam);
        if(TeamAt < 0){
          this.Standings.push({
            TeamName:element.AwayTeam,
            GamesPlayed:0,Wins:0,Ties:0,GoalsFor:0,GoalAgaints:0
          })
          TeamAt = this.Standings.length-1;
        }
        this.UpdCurrentRow(element,TeamAt,"A")
      }
    })
  }

  private UpdCurrentRow(element:schedule,TeamAt:number,HomeAway:string){
    this.Standings[TeamAt].GamesPlayed++;
    if(HomeAway=='H'){
        this.Standings[TeamAt].GoalsFor += element.HomeScore;
        this.Standings[TeamAt].GoalAgaints += element.AwayScore;
        //win menang
        if(element.HomeScore>element.AwayScore){
          this.Standings[TeamAt].Wins++;
        }
    }
    if(HomeAway=='A'){
      this.Standings[TeamAt].GoalsFor += element.AwayScore;
      this.Standings[TeamAt].GoalsFor += element.HomeScore;
      if(element.AwayScore>element.HomeScore){
        this.Standings[TeamAt].Wins++;
      }
    }
    if(element.HomeScore==element.AwayScore){
      this.Standings[TeamAt].Ties++;
    }
  }
  
  private FindTeam(TeamName:string):number{
    var FoundAt:number =-1;
    for(var _x=0; _x<this.Standings.length; _x++){
      if(this.Standings[_x].TeamName==TeamName){
        return _x;
      }
    }
    return FoundAt;
  }

}