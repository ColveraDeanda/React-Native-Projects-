import React, { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import StyledButton from '../../components/StyledButton';
import { styles } from '../../theme/appTheme';

enum Operadores {
  sumar,
  resta,
  multiplicar,
  dividir,
}

const CalculadoraScreen = () => {
  const [lastNumber, setLastNumber] = useState('0');
  const [number, setNumber] = useState('0');

  const ultimaOperacion = useRef<Operadores>();

  const clean = () => {
    setNumber('0');
    setLastNumber('0');
  };

  const addNumberOrOperator = (numOperator: string) => {
    let check = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '-'];
    let notAllowed = ['/', 'x', '+'];
    let dotFilter = [...number].filter(elem => elem === '.');

    if (number === '0' && numOperator === '0') {
      return;
    }
    if (check.includes(numOperator) && number[0] === '0' && number[1] != '.') {
      setNumber(numOperator);
      return;
    }
    if (
      number[0] === '0' &&
      number[1] !== '.' &&
      notAllowed.includes(numOperator)
    ) {
      return;
    }
    if (dotFilter.length > 0 && numOperator === '.') {
      return;
    }

    setNumber(number + numOperator);
  };

  const setNegativeOrPositiveNumber = () => {
    let num = Number(number);
    num = num * -1;
    setNumber(String(num));
  };

  const deleteLastNumber = () => {
    if (number.length === 1 || (number.length === 2 && number[0] === '-')) {
      setNumber('0');
    } else {
      setNumber(number.slice(0, -1));
    }
  };

  const cambiarNumeroPorAnterior = () => {
    if (number.endsWith('.')) {
      setLastNumber(number.slice(0, -1));
    } else {
      setLastNumber(number);
    }
    setNumber('0');
  };

  const btnDividir = () => {
    cambiarNumeroPorAnterior();
    setLastNumber(`${number}/`)
    ultimaOperacion.current = Operadores.dividir;
  };

  const btnMultiplicar = () => {
    cambiarNumeroPorAnterior();
    setLastNumber(`${number}x`)
    ultimaOperacion.current = Operadores.multiplicar;
  };

  const btnRestar = () => {
    cambiarNumeroPorAnterior();
    setLastNumber(`${number}-`)
    ultimaOperacion.current = Operadores.resta;
  };

  const btnSumar = () => {
    cambiarNumeroPorAnterior();
    setLastNumber(`${number}+`)
    ultimaOperacion.current = Operadores.sumar;
  };

  const calc = () => {
    let numberWithoutSym = lastNumber.slice(0, -1);

    const num1 = Number(number);
    const num2 = Number(numberWithoutSym);

    console.log(ultimaOperacion.current);
    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setNumber(`${num1 + num2}`);
        setLastNumber(`${num2} + ${num1}`);
        break;
      case Operadores.resta:
        setNumber(`${num2 - num1}`);
        setLastNumber(`${num2} - ${num1}`);
        break;
      case Operadores.multiplicar:
        setNumber(`${num1 * num2}`);
        setLastNumber(`${num2} * ${num1}`);
        break;
      case Operadores.dividir:
        if(num1 !== 0 && num2 !== 0) {
          setNumber(`${num2 / num1}`); // * resultado
          setLastNumber(`${num2} / ${num1}`);
        }
        
        break;
    }
  };

  //! Se pueden pasar múltiples métodos a travéz de la misma propiedad.

  return (
    <View style={styles.calculadoraContainer}>
      {
        // !Renderizado condicionado Ejemplo
        lastNumber !== '0' && (
          <Text style={styles.smallResult}>{lastNumber}</Text>
        )
      }
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      {/* //* Buttons Row */}
      <View style={styles.row}>
        <StyledButton text="C" color="#9B9B9B" action={clean} />
        <StyledButton
          text="+/-"
          color="#9B9B9B"
          action={setNegativeOrPositiveNumber}
        />
        <StyledButton text="del" color="#9B9B9B" action={deleteLastNumber} />
        <StyledButton text="/" color="#FF9427" action={btnDividir} />
      </View>

      {/* //* Buttons Row */}
      <View style={styles.row}>
        <StyledButton text="7" action={addNumberOrOperator} />
        <StyledButton text="8" action={addNumberOrOperator} />
        <StyledButton text="9" action={addNumberOrOperator} />
        <StyledButton text="x" color="#FF9427" action={btnMultiplicar} />
      </View>

      {/* //* Buttons Row */}
      <View style={styles.row}>
        <StyledButton text="4" action={addNumberOrOperator} />
        <StyledButton text="5" action={addNumberOrOperator} />
        <StyledButton text="6" action={addNumberOrOperator} />
        <StyledButton text="-" color="#FF9427" action={btnRestar} />
      </View>

      {/* //* Buttons Row */}
      <View style={styles.row}>
        <StyledButton text="1" action={addNumberOrOperator} />
        <StyledButton text="2" action={addNumberOrOperator} />
        <StyledButton text="3" action={addNumberOrOperator} />
        <StyledButton text="+" color="#FF9427" action={btnSumar} />
      </View>

      {/* //* Buttons Row */}
      <View style={styles.row}>
        <StyledButton text="0" action={addNumberOrOperator} wider />
        <StyledButton text="." action={addNumberOrOperator} />
        <StyledButton text="=" color="#FF9427" action={calc} />
      </View>
    </View>
  );
};

export default CalculadoraScreen;
