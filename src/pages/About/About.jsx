// CSS
import styles from "./About.module.css";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o Mini <span>Blog</span>
      </h2>
      <p>
        O miniblog desenvolvido combina a simplicidade do Instagram com funcionalidades que incentivam a interação social. Utilizando React no front-end e Firebase no back-end, os usuários podem compartilhar fotos, interagir através de curtidas e comentários, além de descobrir novos conteúdos por meio de um feed personalizado. É uma plataforma intuitiva e dinâmica para conectar pessoas através de imagens inspiradoras e conversas significativas.
      </p>
      <Link to="/posts/create" className="btn">
        Criar Post
      </Link>
    </div>
  );
};

export default About;
