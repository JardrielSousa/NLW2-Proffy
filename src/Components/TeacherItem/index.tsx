import React from 'react';
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'
function TeacherItem(){
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars3.githubusercontent.com/u/22067425?s=460&u=b967113581bc8d1989f0214a73fc68e23ebf9a3f&v=4" alt="Jardriel Sousa"/>
                        <div>
                            <strong>Jardriel Sousa</strong>
                            <span>Quimica</span>
                        </div>
                    </header>
                    <p>
                        Entusiasta das melhores tecnologias de química avançada.
                        <br/>
                        <br/>
                        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
                    </p>
                    <footer>
                        <p>
                            preço/hora
                            <strong>R$20,00</strong>
                        </p>
                            <button type="button">
                                <img src={whatsAppIcon} alt="whatsapp"/>
                                Entrar em contato
                            </button>
                        
                    </footer>
                </article>
    )
}


export default TeacherItem;