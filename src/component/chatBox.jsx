import React, { useEffect, useRef } from "react";
import { LuSendHorizonal } from "react-icons/lu";
import { MdOutlineChat } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const ChatBox = () => {
  const [showChat, setShowChat] = React.useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
    const targetDiv = document.getElementById("chatboxId");
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      scrollToBottom();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showChat && (
        <div class="mx-2 z-40 fixed flex flex-col flex-grow w-96 bg-white shadow-xl rounded-lg overflow-hidden bottom-28 right-4">
          <div className="flex h-16 w-full bg-blue-700 justify-start items-center px-4">
            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
            <div className="flex flex-col mx-2">
              <span className="text-base font-bold text-white">Admin</span>
              <div className="text-[10px] text-white">active</div>
            </div>
          </div>

          <div
            class="flex flex-col flex-grow h-[32rem] p-4 overflow-auto  "
            ref={messagesEndRef}
            id="chatboxId"
          >
            <div class="flex w-full mt-2 space-x-3 max-w-xs">
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
              <div>
                <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                  <p class="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <span class="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
            </div>
            <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
              <div>
                <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                  <p class="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod.
                  </p>
                </div>
                <span class="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
            </div>
            <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
              <div>
                <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                  <p class="text-sm">Lorem ipsum dolor sit amet.</p>
                </div>
                <span class="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
            </div>
            <div class="flex w-full mt-2 space-x-3 max-w-xs">
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
              <div>
                <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                  <p class="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
                <span class="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
            </div>
            <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
              <div>
                <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                  <p class="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
                <span class="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
            </div>
            <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
              <div>
                <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                  <p class="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
                <span class="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
            </div>
            <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
              <div>
                <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                  <p class="text-sm">Lorem ipsum dolor sit amet.</p>
                </div>
                <span class="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
            </div>
            <div class="flex w-full mt-2 space-x-3 max-w-xs">
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
              <div>
                <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                  <p class="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
                <span class="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
            </div>
            <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end ">
              <div>
                <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                  <p class="text-sm">Lorem ipsum dolor sit.</p>
                </div>
                <span class="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
            </div>
          </div>

          <div class="bg-gray-300 p-4 flex">
            <input
              class="flex items-center h-10 w-full rounded px-3 text-sm"
              type="text"
              placeholder="Type your message…"
            />
            <LuSendHorizonal className="text-3xl text-center top-1 relative right-10 text-blue-300" />
          </div>
        </div>
      )}

      <div className=" mx-2 z-40  w-16 h-16 bg-[#00b5b6] fixed flex flex-col  justify-center items-center flex-grow   shadow-xl rounded-full overflow-hidden bottom-8 right-4">
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
