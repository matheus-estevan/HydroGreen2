import React from 'react'
import './index.css';

import Icon from './assets/logo.svg'
import Menu from './assets/menu.svg'
import Horta from './assets/horta.svg'

export default function App() {
  return (
    <div>
      <div className="bg-gradient-to-b from-customBlack to-customBlue min-h-screen py-4 px-4 antialised lg:flex justify-center items-center">
        <div className="flex flex-col justify-items-center">
          <header className="flex items-center justify-between mb-5">
            <img src={Icon} alt="Logo da empresa HydroGreen" />
            <img src={Menu} alt="Imagem de um menu Hamburger" className="md:hidden ml-auto"/>
              
            <div className="flex space-x-4">
              <p className="hidden md:block text-titleColor font-semibold text-base font-inter uppercase">Componentes</p>
              <p className="hidden md:block text-titleColor font-semibold text-base font-inter uppercase" t>Funcionamento</p>
              <p className="hidden md:block text-titleColor font-semibold text-base font-inter uppercase">Referências</p>
              <p className="hidden md:block text-titleColor font-semibold text-base font-inter uppercase">Sobre nós</p>
              </div>
            </header>

            <main className="flex flex-col items-center justify-between min-h-screen md:flex-row md:justify-center md:items-center md:space-x-8 px-4 md:px-16">
              <div className="order-2 md:order-1 text-center md:text-left">
                <h1 className="font-inter font-black text-3xl md:text-6xl text-titleColor">
                  Cultivando o futuro com eficiência e inovação
                </h1>
                <p className="font-inter font-medium text-white text-sm md:text-2xl mt-4">
                  A HydroGreen é uma estufa hidropônica automatizada para cultivo doméstico, controlável via aplicativo com Bluetooth. Ela gerencia nutrientes e ambiente de forma eficiente e sustentável, ideal para quem gosta de plantas, mas tem pouco tempo para cuidar delas, garantindo que recebam todos os cuidados necessários de forma prática e sustentável.
                </p>
              </div>
              <img src={Horta} alt="Imagem de uma horta hidropônica" className="w-full max-w-sm mt-8 md:mt-0 order-1 md:order-2" />
            </main>


          </div>
        </div>
    </div>
  )
}
