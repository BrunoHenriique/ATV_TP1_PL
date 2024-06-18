/* eslint-disable react/jsx-pascal-case */
import { Component } from 'react';
import Navbar_ from '../../component/NavBar';
import './styles.css'

export class Home extends Component {
    render(){

        return (
            <section>
           <header>
               <Navbar_/>
           </header>
           <main>
               <div className="text">
                    <h1>PetLovers, O melhor é aqui!</h1>
                    <h2>Nessa aplicação você podera fazer o controle de Clientes, Produtos, Serviços e o consumo dos clientes e seus pets</h2>
               </div>
           </main>
       </section>
    );
}
}