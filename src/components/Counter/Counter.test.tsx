import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Counter from './Counter';
import { shallow } from 'enzyme';

describe('<Counter />', () => {
  test('El numero 20 es igual que el prop', () => {
    const numero = 20;

    // renderiza un componente
    const wrapper = shallow(<Counter numero={numero}/>);
    // busca un elemento como el query selector y obtiene el texto
    const textNumero = wrapper.find("p").text();
    console.log(textNumero);
    // se espera que sea igual que la otra variable
    expect(parseInt(textNumero)).toBe(numero);
  });
});