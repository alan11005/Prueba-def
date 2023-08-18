import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./../styles/sideNav.css"

export default function Home() {
    
    return (
        <div className="app">
            <nav className="centered-box nav flex-column">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <button >Ver Ticket</button>
                    </li>
                    <li className="nav-item">
                        <button >Editar Ticket</button>
                    </li>
                    <li className="nav-item">
                        <Link to='/añadirFuncion'><button to='/añadirFuncion'>Añadir Función</button></Link>
                    </li>
                    <li className="nav-item">
                        <button >Editar Función</button>
                    </li>
                    <li className="nav-item">
                        <button >Añadir pelicula</button>
                    </li>
                    <li className="nav-item">
                        <button >Editar pelicula</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
