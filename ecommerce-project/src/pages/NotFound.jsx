import { Header } from "../Components/Header";
import "./NotFound.css";

export function NotFound() {
  return (
    <>
      { <Header /> }
      <div className="Error-container">
        <p className="page-not-found">Page not found:)Kindly search again</p>
      </div>
    </>
  );
}
