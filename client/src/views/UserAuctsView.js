import React, { useState, useEffect } from "react";

const UserAuctsView = ({ Usuario, Modo }) => {
  const [History, setHistory] = useState([]);

  async function getHistory() {
    try {
      const body = { cedula: Usuario.cedula };
      console.log(Usuario);
      console.log(Modo);
      console.log(body);
      var url;
      if (Modo === "compra")
        url = "http://localhost:5000/dashboard/verComprasUsuario";
      else url = "http://localhost:5000/dashboard/verVentasUsuario";
      const urlPetition = url;
      return fetch(urlPetition, {
        method: "POST",
        headers: {
          token: localStorage.token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }).then((data) => data.json());
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    let mounted = true;
    getHistory().then((items) => {
      if (mounted) {
        setHistory(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div style={{ width: "80%", margin: "3rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <h1>History</h1>
      </div>
      <br />

      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Id Subasta</th>
            <th>Fecha de Cierre</th>
            <th>Item</th>
          </tr>
        </thead>
        {console.log(History)}
        {History.length !== 0 ? (
          <tbody>
            {History.map((item) => (
              <tr key={item.idsubasta}>
                <td>{item.idsubasta}</td>
                <td>{item.fechahoracierre}</td>
                <td>{item.descripcionitem}</td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            ,<h2> No aucts yet...</h2>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default UserAuctsView;
