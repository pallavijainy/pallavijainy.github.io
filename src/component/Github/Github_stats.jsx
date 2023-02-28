import React from "react";
import "./Github_stats.css";
import GitHubCalendar from "react-github-calendar";

export default function GithubStats() {
  return (
    <div style={{marginTop:"30px"}}>
      <p id="github" className="head" >
        Github
      </p>
      <div style={{marginTop:"30px"}}>
        <p className="title">My GitHub stats</p>
        <div className="stats" style={{marginTop:"30px"}}>
          <div>
            <img
              src="https://github-readme-stats.vercel.app/api?username=pallavijainy&theme=algolia"
              alt="pallavijain"
            />
          </div>
          <div>
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=pallavijainy&theme=algolia"
              alt="pallavijain"
            />
          </div>
        </div>
      </div>
      <div style={{marginTop:"40px"}}>
        <p className="title">My Github Calender</p>
        <div className="calender" style={{marginTop:"30px"}}>
          <GitHubCalendar
            username="pallavijainy"
            year="last"
            blockMargin={4}
            blockRadius={20}
            blockSize={20}
          />
        </div>
      </div>
    </div>
  );
}