import React, { useState } from "react";
import "./Title.css";
import Content from "./Content";

function App() {
  const [example_state, setExampleState] = useState("지역을 골라주세요!");
  const [selectedButton, setSelectedButton] = useState(null);

  const setAppText = (text) => {
    setExampleState(text);
  };

  const handleButtonClick = (text) => {
    setAppText(text);
    setSelectedButton(text);
  };

  return (
    <div className="app-container">
      <div className="title-container">
        <h1 className="title">주연과조연<br />Review Filter</h1>
        <p className="subtitle">
          원하시는 지역 버튼을 누르시면 해당 지역의{" "}
          <span className="highlight">☆"진짜! 리뷰"☆</span>를 보여드립니다!
        </p>
      </div>
      <div className="button-group">
        <button
          className={selectedButton === "압구정 맛집 관련 결과" ? "selected" : ""}
          onClick={() => handleButtonClick("압구정 맛집 관련 결과")}
        >
          압구정
        </button>
        <button
          className={selectedButton === "연남동 맛집 관련 결과" ? "selected" : ""}
          onClick={() => handleButtonClick("연남동 맛집 관련 결과")}
        >
          연남동
        </button>
        <button
          className={selectedButton === "동성로 맛집 관련 결과" ? "selected" : ""}
          onClick={() => handleButtonClick("동성로 맛집 관련 결과")}
        >
          동성로
        </button>
        <button
          className={selectedButton === "종로 맛집 관련 결과" ? "selected" : ""}
          onClick={() => handleButtonClick("종로 맛집 관련 결과")}
        >
          종로
        </button>
        <button
          className={selectedButton === "서면 맛집 관련 결과" ? "selected" : ""}
          onClick={() => handleButtonClick("서면 맛집 관련 결과")}
        >
          서면
        </button>
        <button
          className={selectedButton === "애월 맛집 관련 결과" ? "selected" : ""}
          onClick={() => handleButtonClick("애월 맛집 관련 결과")}
        >
          애월
        </button>
      </div>
      <Content example_props={example_state} />
    </div>
  );
}

export default App;
