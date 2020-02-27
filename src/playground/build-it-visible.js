console.log("connected");

const appRoot = document.getElementById("app");
const paragrah

const renderApp = () => {
  const template = (
    <div>
      <p>This is my string</p>
      <button>Button here</button>
    </div>
  );
  //

  // @ts-ignore
  ReactDOM.render(template, appRoot);
};

renderApp();
