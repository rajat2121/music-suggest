import React, { useState } from "react";
import { flushSync } from "react-dom";
import "./styles.css";

var musicDb = {
  Music: [
    {
      songName: "Kun Faya Kun",
      artist: "Javed Ali, Mohit Chauhan, A.R. Rahman",
      rating: "5/5",
      description:
        "Lose Yourself not only finds Eminem at his absolute zenith" +
        "but it also demonstrates just how deep rap music has burrowed into the popular culture " +
        "Sometimes i feel Eminem is underated singer and when he sings, others just listen."
    },
    {
      songName: "god's plan",
      artist: "Drake",
      rating: "3/5",
      description:
        "Drake gave away the entire $1 million budget for his new music video." +
        "He donate money which he get for making video"
    },
    {
      songName: "Scars To You Beautiful",
      artist: "Alessia Cara",
      rating: "4/5",
      description:
        " Scars TO Your Beautiful is a song recorded by Canadian singer and" +
        "best song"
    }
  ],
  Podcast: [
    {
      songName: "Syntax",
      artist: "Wes Bos",
      rating: "4.5/5",
      description:
        "Wes Bos and Scott Tolinkski are full-stack developers who create courses on Web Development." +
        "They decided to start Syntax which is by far my favorite dev podcast and releases two a week." +
        "They are incredibly entertaining, but also have an immense amount of knowledge to share around development, entrepreneurship, soft skills, and more!"
    },
    {
      songName: " CodePen Radio ",
      artist: "CodePen ",
      rating: " 5/5 ",
      description:
        "CodePen is used by Web Developers everywhere as a way to showcase and share demo code. That said, this podcast is actually run by Codepen employees. They share stories, learnings, struggles, and successes that they've come across in growing their small company. This perspective is a little more unique than the other podcasts because you can follow the success of CodePen as a whole while learning more details along the way."
    },
    {
      songName: "Shop Talk",
      artist: "Dave Rupert",
      rating: "4/5",
      description:
        "Shop talk is hosted by Dave Rupert and Chris Coyier where they focus on front end web design and development. Dave is a developer at a web design shop in Austin Texas, while Chris is one of the co-founders of Code Pen."
    }
  ],
  Speeches: [
    {
      songName: "The Eagle Mentality",
      artist: " Eddie Pinero ",
      rating: "4.6/5",
      description:
        "Dont be a parrot in life, a parrot talks way too much," +
        "but cant fly high." +
        "But an eagle is silent and has the willpower to" +
        "touch the sky."
    },
    {
      songName: " F**k It ",
      artist: " David Goggins ",
      rating: "4.5/5",
      description: "The Ass-Breaking Motivaiton"
    },
    {
      songName: "10 Rules For Success",
      artist: "Elon Musk",
      rating: " 4.5/5 ",
      description:
        " Listen To Elon Musk and get motivated as he shares his life stories and events."
    }
  ]
};

const Emoji = (props) => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);

// var favMusic = Object.keys(musicDb);
var RecommendedMusic = Object.keys(musicDb);

export default function App() {
  const [details, setDetails] = useState("Podcast");

  function genereClickHandler(category) {
    // var details = musicDb[music];
    // console.log(details);

    setDetails(category);
  }
  return (
    <div className="container">
      <div className="App">
        <div className="nav">
          <h1>
            <Emoji label="music" symbol="🎵" /> Music | The Escape Through Hell
          </h1>

          <h3>
            <span style={{ color: "indigo" }}>
              Some of the pills, I prefer to keep my growth game on the right
              track.
            </span>
          </h3>
        </div>

        <hr className="new" />

        {/* <button onClick={ genereClickHandler}> Music </button> */}
        {/* {favMusic.map(function (music) {
        return (
          <ol key={music} onClick={() => genereClickHandler(music)}>
            {music}
          </ol>
        );
      })} */}

        <h3 className="header2">
          <b> Recommended List </b>
        </h3>
        <div className="btn">
          {RecommendedMusic.map(function (category) {
            return (
              <button
                key={category}
                onClick={() => genereClickHandler(category)}
              >
                {category}
              </button>
            );
          })}
        </div>
        <ol>
          {musicDb[details].map((choice) => {
            return (
              <ol className="output-list">
                <li>{choice.songName}</li>
                <li>{choice.artist}</li>
                <li>{choice.rating}</li>
                <li>{choice.description}</li>
              </ol>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
