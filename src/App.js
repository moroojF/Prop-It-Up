import 'bootstrap/dist/css/bootstrap.min.css';
import PersonCard from './components/PersonCard';
import './App.css';

function App() {
  return (
    <div className="container mt-5 text-center App">
      <div className="row">
        {/* first */}
        <PersonCard
          first_name="Michael"
          last_name="Kors"
          age={61}
          hair_color="Blonde"
        />
        {/* 2nd */}
        <PersonCard first_name="Carolina"
          last_name="Herrera"
          age={81}
          hair_color="Blonde"
        />
        {/* 3rd */}
        <PersonCard
          first_name="Stephen"
          last_name="Amell" age={39}
          hair_color="Brown"
        />
        {/* 4th */}
        <PersonCard
          first_name="Robbie"
          last_name="Amell" age={32}
          hair_color="Dark Brown"
        />
      </div>
    </div>
  );
}

export default App;
