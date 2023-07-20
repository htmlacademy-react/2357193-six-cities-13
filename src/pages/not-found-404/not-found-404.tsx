import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';

function NotFound(){
  return(
    <section className="game">
      <Helmet>
        <title>Страница не найдена</title>
      </Helmet>

      <section className="game__screen">
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </section>
    </section>
  );
}

export default NotFound;
