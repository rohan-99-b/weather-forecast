import ReactDom from "react-dom/client"


const App = () => {
    return (
        <div> 
            <h1>APP JSX Load</h1>
        </div>
    )
}
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);