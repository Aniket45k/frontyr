import SendbirdApp from "@sendbird/uikit-react/App";
import "@sendbird/uikit-react/dist/index.css";
import Left from "../components/Messages/Message_left"
// import Middle from "../components/Messages/Message_middle";
import Right from "../components/Messages/Message_right";

function Message() {
  const myColorSet = {
    '--sendbird-light-primary-500': '#87cbfb',
    '--sendbird-light-primary-400': '#4bb3fd',
    '--sendbird-light-primary-300': '#87cbfb',
    '--sendbird-light-primary-200': '#0496ff',
    '--sendbird-light-primary-100': '#f2f2f2',
  };

  return (
    <div className="flex flex-row">
      {/* Profile Section on the left */}
      <div className="md:w-1/4 bg-white p-4 hidden md:block ">
        <Left />
      </div>

      {/* Post and Feed Section in the center */}
      <div className="w-full md:w-1/2 p-4 h-screen">
        {/* <Middle /> */}
        <SendbirdApp
          colorSet={myColorSet}
          appId='68BE6A4A-0F0A-4D7A-B255-0A82A0F4D252'
          userId='2ff72c7d4712ab37955d9f2a391c57859f493c41'
        />
      </div>

      {/* Recommendations Section on the right */}
      <div className="md:w-1/4 bg-white p-4 hidden md:block">
        <Right />
      </div>
    </div>
  );
}
export default Message;

