import React from "react";
import { render } from "@testing-library/react";
// necesario para el toBeInTheDocument
import "@testing-library/jest-dom/extend-expect";
import Box from "./Box";
import { shallow } from "enzyme";

describe("Debe imprimir Hola Mundo", () => {
  // test("Test con extend expect", () => {
  //   const saludo = "Hola mundo";
  //   // renderiza el componente
  //   const { getByText } = render(<Box text={saludo} />);
  //   // verifica si existe el texto en el documento
  //   expect(getByText(saludo)).toBeInTheDocument();
  // });

  // test("debe de mostrar <Box/> Hola mundo - Enzyme", () => {
  //   const saludo = "Hola mundo";

  //   const wrapper = shallow(<Box text={saludo} />);
  //   // verifica si se renderizo correctamente
  //   expect(wrapper).toMatchSnapshot();
  // });

  test("debe de mostrar <Box/> Hola mundo y Subtitulo - Enzyme", () => {
    const saludo = "Hola mundo";
    const subtitulo = "Soy un subtitulo";

    // renderiza un componente
    const wrapper = shallow(<Box text={saludo} optionalText={subtitulo} />);
    // busca un elemento como el query selector y obtiene el texto
    const textSubtitulo = wrapper.find("h3").text();
    // console.log(textSubtitulo);
    // se espera que sea igual que la otra variable
    expect(textSubtitulo).toBe(subtitulo);

    // expect(wrapper).toMatchSnapshot();
  });
});
