import MainPage from '../../pages/main-page/main-page';

type Offers = {
  countOffers: number;
}

function App({countOffers}: Offers) {
  return (
    <MainPage count={countOffers} />
  );
}

export default App;
