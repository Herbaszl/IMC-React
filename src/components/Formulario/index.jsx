import{useState, useEffect} from "react"

const Formulario = () => {
    const[altura, setAltura] = useState('');
    const[peso, setPeso] = useState('');
    const[imc, setImc] = useState('');

    useEffect(() => {
        calculoIMC();
    }, [altura, peso]);
    
    const calculoIMC = () => {
        if (peso > 0 && altura > 0){
            const alturaEmMetros = altura / 100;
            const imcCalculado = (peso / (alturaEmMetros * alturaEmMetros)).toFixed(2)
            setImc(imcCalculado);
        }
    };

    const alteraPeso = (evento) => {
        const valorPeso = parseFloat(evento.target.value);
        setPeso(valorPeso);
    } 
    
    const alteraAltura = (evento) => {
        const valorAltura = parseFloat(evento.target.value);
        setAltura(valorAltura);
    } 

    return(
        <form>
            <input type="number" placeholder="Sua Altura (em cm)" onChange={alteraAltura}/>
            <input type="number" placeholder="Seu Peso"onChange={alteraPeso}/>
            {imc && <p>Seu IMC é: {imc} </p>}
        </form>
    )
}

export default Formulario
