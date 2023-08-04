const btnToggle = document.querySelector('.toggle-btn');
btnToggle.addEventListener('click', function(){
document.getElementById('barralateral').classList.toggle('active');
})

// Definir las cuentas T
const cuentasT = {
  activos: {
    caja: 1000,
    bancos: 5000,
    inventario: 2000
  },
  pasivos: {
    cuentasPorPagar: 3000,
    prestamos: 5000
  },
  patrimonio: {
    capital: 20000,
    utilidadesRetenidas: 1000
  }
};

// Función para calcular el total de una categoría
function calcularTotal(cuentas) {
  let total = 0;
  for (let cuenta in cuentas) {
    total += cuentas[cuenta];
  }
  return total;
}

// Generar el balance
const balance = {
  activos: calcularTotal(cuentasT.activos),
  pasivos: calcularTotal(cuentasT.pasivos),
  patrimonio: calcularTotal(cuentasT.patrimonio)
};

console.log("Cuentas T:");
console.log(cuentasT);
console.log("Balance:");
console.log(balance);