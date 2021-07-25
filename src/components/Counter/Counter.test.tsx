import React from "react";
import "@testing-library/jest-dom/extend-expect";
import Counter from "./Counter";
import { shallow, ShallowWrapper } from "enzyme";

describe("<Counter />", () => {
  let wrapper: ShallowWrapper;
  // este metodo es parte del ciclo de vida, se ejecuta antes de cada test
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    wrapper = shallow(<Counter />);
  });
  test("El numero 20 es igual que el prop", () => {
    const numero = 20;

    // renderiza un componente
    const wrapper = shallow(<Counter numero={numero} />);
    // busca un elemento como el query selector y obtiene el texto
    const textNumero = wrapper.find("p").text();
    // console.log(textNumero);
    // se espera que sea igual que la otra variable
    expect(parseInt(textNumero)).toBe(numero);
  });

  test("debe incrementar con el boton +1", () => {
    // por defecto el numero es 10
    // da click al primer boton
    wrapper.find("button").at(0).simulate("click");
    console.log(wrapper.find("button").at(0).html());
    const textNumero = parseInt(wrapper.find("p").text());
    expect(textNumero).toBe(11);
  });

  test("debe decrementar con el boton -1", () => {
    // por defecto el numero es 10
    // da click al primer boton
    wrapper.find("button").at(2).simulate("click");
    // console.log(wrapper.find("button").at(0).html());
    const textNumero = parseInt(wrapper.find("p").text());
    expect(textNumero).toBe(9);
  });

  test("debe ser igual al numero pasado por prop al presionar el boton reset", () => {
    const numero = 800;
    // renderiza un componente
    const wrapper = shallow(<Counter numero={numero} />);
    // busca un elemento como el query selector y obtiene el texto
    // boton +1
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    // boton reset
    wrapper.find("button").at(1).simulate("click");
    const textNumero = wrapper.find("p").text();
    expect(parseInt(textNumero)).toBe(numero);
  });
});
