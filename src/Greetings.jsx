import propTypes from "prop-types";

// Manejo de props
// Tip Clean Code: Se permite recibir como parámetro de función hasta 4 props sueltos
// si el número es mayor a 4 optar por las desestructuración de props

// forma 1
// const Greetings = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h2>
//         Hola mi nombre es {props.firstName} {props.lastName} y tengo {props.age}{" "}
//         años
//       </h2>
//     </div>
//   );
// };

// export default Greetings;

// forma 2 desestructurando props
const Greetings = (props) => {
  const { firstName, lastName, age } = props;
  return (
    <div>
      <h2>
        Hola mi nombre es {firstName} {lastName} y tengo {age} años
      </h2>
      {/* ocupamos la propiedad "children" que pertence a props para pintar los tag img dentro de la
importación en App.jsx*/}
      {props.children}
    </div>
  );
};

export default Greetings;

// ocupamos propTypes para definir el data-type de las props
Greetings.propTypes = {
  firstName: propTypes.string,
  lastName: propTypes.string,
  age: propTypes.number,
};
