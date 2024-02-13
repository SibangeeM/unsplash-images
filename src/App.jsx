import Gallery from "./Components/Gallery";
import SearchForm from "./Components/SearchForm";
import ThemeToggle from "./Components/ThemeToggle";

const App = () => {
  return (
    <main>
      <ThemeToggle></ThemeToggle>
      <SearchForm></SearchForm>
      <Gallery></Gallery>
    </main>
  );
};
export default App;
