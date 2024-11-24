import React from "react";
import "../css/Home.css";
import "../css/TryRequestAi.css";
import ActionNavs from "../components/ActionNavs";

const TryRequestAi = () => {
  return (
    <div className="home try-request ">
      <img src="/svgs/AI_3.svg" alt="" className="ai_3" />
      <div className="chat-section">
        <div className="chat-container">
          <div className="fixed-title">
            <h1>AI Assistant</h1>
          </div>

          <div className="chats">
            <div className="chatbox">
              <span>
                <img src="/svgs/request_icon.svg" alt="" />
              </span>
              <p>
                Hi there! I’m RequestAI, your assistant for all things
                RequestButton. I can help answer FAQs about our features,
                services, and how to use the platform effectively. If I’m unable
                to provide an answer to your question, I’ll let you know and
                guide you to our support team for further assistance. Feel free
                to ask another question if needed. I’m here to help!
              </p>
            </div>
            <div className="chatbox user">
              <p>
                Make a prediction on how launching an advertising campaign will
                impact the website’s conversation rate this month.
              </p>
            </div>
            <div className="chatbox user">
              <p>
                Make a prediction on how launching an advertising campaign will
                impact the website’s conversation rate this month.
              </p>
            </div>
            <div className="chatbox user">
              <p>
                Make a prediction on how launching an advertising campaign will
                impact the website’s conversation rate this month.
              </p>
            </div>
            <div className="chatbox user">
              <p>
                Make a prediction on how launching an advertising campaign will
                impact the website’s conversation rate this month.
              </p>
            </div>
          </div>

          <div className="input">
            <input type="text" placeholder="Type here..." />
            <span>
              <img src="/svgs/send.svg" alt="" />
            </span>
          </div>
        </div>
      </div>

      <ActionNavs />
    </div>
  );
};

export default TryRequestAi;
