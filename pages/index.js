import React, { useState } from 'react';

function Contador() {
    const [contador, setContador] = useState(0);
    const acrescentar = () => {
        setContador(contador + 1)
    }

    return (
        <div>
            {contador}
            <button onClick={acrescentar}>Adicionar</button>
        </div>

    )
}

function Home() {
    return (
        <div>
            <Contador />
        </div>
    );
}

export default Home;