import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="home">
        <h1>Welcome to Eznptel</h1>
        <p>
          Eznptel is your ultimate destination for quizzes and solutions in
          wildlife and forest subjects.
        </p>
        <div className="home__features">
          <div className="home__feature">
            <h2>Quiz</h2>
            <p>Test your knowledge with our quizzes!</p>
            <Link to="/quiz" className="home__feature-link">
              Give a Quiz
            </Link>
          </div>
          <div className="home__feature">
            <h2>Solutions</h2>
            <p>View solutions to all the quizzes.</p>
            <Link to="/solutions" className="home__feature-link">
              View Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
