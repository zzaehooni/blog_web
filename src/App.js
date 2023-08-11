import React, { useState } from "react";
import "./Title.css"; // Title.css 파일을 불러옵니다.

function Content(props) {
    return (
        <div> {props.example_props} </div>
    );
}

function Title(props) {
    return (
        <div className="title-container">
            <h1 className="title">주연과조연 리뷰 필터</h1>
            <p className="subtitle">
                원하시는 지역 버튼을 누르시면 해당 지역의 <span className="highlight">☆"진짜! 리뷰"☆</span>를 보여드립니다!
            </p>
            <div className="button-group">
                <button
                    onClick={() => {
                        props.exampleEvent("압구정 맛집 관련 결과");
                    }}
                >
                    압구정
                </button>
                <button
                    onClick={() => {
                        props.exampleEvent("연남동 맛집 관련 결과");
                    }}
                >
                    연남동
                </button>
                <button
                    onClick={() => {
                        props.exampleEvent("종로 맛집 관련 결과");
                    }}
                >
                    종로
                </button>
                <button
                    onClick={() => {
                        props.exampleEvent("서면 맛집 관련 결과");
                    }}
                >
                    서면
                </button>
                <button
                    onClick={() => {
                        props.exampleEvent("동성로 맛집 관련 결과");
                    }}
                >
                    동성로
                </button>
                <button
                    onClick={() => {
                        props.exampleEvent("애월 맛집 관련 결과");
                    }}
                >
                    애월
                </button>
            </div>
        </div>
    );
}

function App() {
    const [example_state, setExampleState] = useState("지역을 골라주세요!");

    const setAppText = (text) => {
        setExampleState(text);
    };

    return (
        <div>
            <Title exampleEvent={setAppText} />
            <Content example_props={example_state} />
        </div>
    );
}

export default App;