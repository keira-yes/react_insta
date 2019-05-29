import React from 'react';
import User from './User';

export default function Users() {
    return(
        <div className="right">
            <User
                src="https://image.freepik.com/foto-gratis/primer-plano-mujer-gran-sonrisa-copos-nieve-cabeza_1140-276.jpg"
                alt="photo"
                name="Jane_best_princess"/>
            <div className="users__block">
                <User
                    src="https://image.freepik.com/foto-gratis/primer-plano-mujer-gran-sonrisa-copos-nieve-cabeza_1140-276.jpg"
                    alt="photo"
                    name="Jane_best_princess"
                    min/>
                <User
                    src="https://image.freepik.com/foto-gratis/primer-plano-mujer-gran-sonrisa-copos-nieve-cabeza_1140-276.jpg"
                    alt="photo"
                    name="Jane_best_princess"
                    min/>
                <User
                    src="https://image.freepik.com/foto-gratis/primer-plano-mujer-gran-sonrisa-copos-nieve-cabeza_1140-276.jpg"
                    alt="photo"
                    name="Jane_best_princess"
                    min/>
                <User
                    src="https://image.freepik.com/foto-gratis/primer-plano-mujer-gran-sonrisa-copos-nieve-cabeza_1140-276.jpg"
                    alt="photo"
                    name="Jane_best_princess"
                    min/>
            </div>
        </div>
    )
}