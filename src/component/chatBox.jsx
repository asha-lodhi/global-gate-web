import React, { useEffect, useRef, useState } from "react";
import { LuSendHorizonal } from "react-icons/lu";
import { MdOutlineChat } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";

const ChatBox = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi,  I'm here to help you.",
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

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { text: input, sender: "user", timestamp: "Just now" };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput("");

    try {
      const response = await axios.post("https://api.example.com/chat", {
        message: input,
      });
      const botMessage = {
        text: response.data.reply,
        sender: "bot",
        timestamp: "Just now",
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error fetching bot response:", error);
    }
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
                    <p className="break-all  text-sm">{message.text}</p>
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
              className=" absolute text-3xl text-center top-3  right-8 text-blue-300 bg-white"
              onClick={handleSendMessage}
            />
          </div>
        </div>
      )}

      <div className="mx-2 z-40 w-16 h-16 bg-[#00b5b6] fixed flex flex-col justify-center items-center flex-grow shadow-xl rounded-full overflow-hidden bottom-8 right-4">
        {!showChat ? (
          <MdOutlineChat
            className="text-white text-3xl"
            onClick={() => setShowChat(true)}
          />
        ) : (
          <RxCross2
            className="text-white text-3xl"
            onClick={() => setShowChat(false)}
          />
        )}
      </div>
    </div>
  );
};

export default ChatBox;
