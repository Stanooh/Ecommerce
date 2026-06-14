import { Header } from "../Components/Header";
import "./NotFound.css";

export function NotFound({cart}) {
  return (
    <>
      { <Header cart={cart} /> }
      <div className="Error-container">
        <p className="page-not-found">Page not found:)Kindly search again</p>
      </div>
    </>
  );
}
