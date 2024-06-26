import React, { useEffect, useRef, useState } from "react";
import { LuSendHorizonal } from "react-icons/lu";
import { MdOutlineChat } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import { LinkIt } from "react-linkify-it";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { RecommendedData } from "../constants";

const ChatBox = () => {
  const navigate = useNavigate();
  let { companyID } = useParams();
  const location = useLocation();
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi,  I'm here to help you!",
      sender: "bot",
      timestamp: "2 min ago",
    },
  ]);

  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (companyID) {
      const companyFilter = RecommendedData?.filter(
        (v) => Number(v?.sellerId) === Number(companyID)
      );
      if (messages?.length > 1 && companyFilter?.[0]) {
        setCompanyNameInChat(companyFilter?.[0]);
      }
    }
  }, [companyID]);

  let timerOne = null;
  const setCompanyNameInChat = (data) => {
    clearTimeout(timerOne);
    timerOne = setTimeout(() => {
      const botMessage = {
        text: `${data?.sellerName}: How can I help you?`,
        sender: "bot",
        timestamp: "Just now",
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { text: input, sender: "user", timestamp: "Just now" };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput("");
    if (location?.pathname?.includes("company-profile") && companyID) {
      try {
        const response = await axios.post(
          "http://127.0.0.1:5001/upload_query",
          {
            query_str: input,
          }
        );
        const botMessage = {
          text: response?.data?.response,
          sender: "bot",
          timestamp: "Just now",
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
        scrollToBottom()
      } catch (error) {
        console.error("Error fetching bot response:", error);
      }
    } else {
      try {
        const response = await axios.post("http://127.0.0.1:5001/query", {
          query_str: input,
        });
        const botMessage = {
          text: response?.data?.response,
          sender: "bot",
          timestamp: "Just now",
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
        scrollToBottom()
      } catch (error) {
        console.error("Error fetching bot response:", error);
      }
    }
  };

  const phonePattern = /\b\d{5,}\b/;

  const redirectToProduct = (id) => {
    navigate(`/company-profile/${id}`);
    setShowChat(false);
  };

  return (
    <div>
      {showChat && (
        <div className="mx-2 z-40 fixed flex flex-col flex-grow w-96 bg-white shadow-xl rounded-lg overflow-hidden bottom-28 right-4">
          <div className="flex h-16 w-full bg-blue-700 justify-start items-center px-4">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
            <div className="flex flex-col mx-2">
              <span className="text-base font-bold text-white">Admin</span>
              <div className="text-[10px] text-white">active</div>
            </div>
          </div>

          <div
            className="flex flex-col flex-grow h-[32rem] p-4 overflow-auto"
            id="chatboxId"
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex w-full mt-2 space-x-3 max-w-xs ${
                  message.sender === "user" ? "ml-auto justify-end" : ""
                }`}
              >
                {message.sender === "bot" && (
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                )}
                <div>
                  <div
                    className={`p-2 rounded-lg   ${
                      message.sender === "user"
                        ? "bg-blue-600 text-white rounded-l-lg rounded-br-lg"
                        : "bg-gray-300 rounded-r-lg rounded-bl-lg"
                    }`}
                  >
                    <LinkIt
                      component={(match, key) => (
                        <a
                          className={`${
                            message.sender === "user"
                              ? "underline decoration-white cursor-pointer"
                              : "underline decoration-blue-600 text-blue-600 cursor-pointer"
                          }`}
                          onClick={() => {
                            redirectToProduct(match);
                          }}
                          key={key}
                        >
                          {match}
                        </a>
                      )}
                      regex={phonePattern}
                    >
                      {message?.text}
                    </LinkIt>
                  </div>
                  <span className="text-xs text-gray-500 leading-none">
                    {message.timestamp}
                  </span>
                </div>
                {message.sender === "user" && (
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="relative p-2 flex min-h-10 max-h-24 items-center w-full border-t rounded px-3 text-sm ">
            <input
              className="flex items-center min-h-10 max-h-auto w-4/5 rounded px-3 text-sm outline-none overflow-y-auto"
              type="text"
              placeholder="Type your message…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <LuSendHorizonal
              className=" absolute text-3xl text-center top-3  right-8 text-blue-500 bg-white z-20 cursor-pointer"
              onClick={handleSendMessage}
            />
          </div>
        </div>
      )}

      <div className="mx-2 z-40 w-16 h-16 bg-[#00b5b6] fixed flex flex-col justify-center items-center flex-grow shadow-xl rounded-full overflow-hidden bottom-8 right-4">
        {!showChat ? (
          <MdOutlineChat
            className="text-white text-3xl cursor-pointer"
            onClick={() => setShowChat(true)}
          />
        ) : (
          <RxCross2
            className="text-white text-3xl cursor-pointer"
            onClick={() => setShowChat(false)}
          />
        )}
      </div>
    </div>
  );
};

export default ChatBox;
