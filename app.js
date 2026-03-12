/* ═══════════════════════════════════════════════════
   RESIDENTOS — App Logic
═══════════════════════════════════════════════════ */

/* ── DATA ─────────────────────────────────────────────────── */
const datosPago = {
  banco: "STP / SPEI",
  clabe: "646180157400000123",
  titular: "Condominio Jose Maria Vigil",
  referenciaBase: "MTTO",
};

let cuentas = [
  { id: "cta-301", unidad: "301", propietarioId: "vec-1", residente: "Ana Juarez",    telefono: "+52 55 1111 0001", cuotaMensual: 3500, saldoAnterior: 2750, otrosCargos: 0,   aplicado: 0    },
  { id: "cta-302", unidad: "302", propietarioId: "vec-2", residente: "Bruno Mena",    telefono: "+52 55 1111 0002", cuotaMensual: 3500, saldoAnterior: 0,    otrosCargos: 0,   aplicado: 3500 },
  { id: "cta-305", unidad: "305", propietarioId: "vec-3", residente: "Carla Pineda",  telefono: "+52 55 1111 0003", cuotaMensual: 3500, saldoAnterior: 2750, otrosCargos: 250, aplicado: 0    },
  { id: "cta-312", unidad: "312", propietarioId: "vec-4", residente: "Fernando Lara", telefono: "+52 55 1111 0006", cuotaMensual: 3500, saldoAnterior: 0,    otrosCargos: 0,   aplicado: 3500 },
  { id: "cta-326", unidad: "326", propietarioId: "vec-5", residente: "Hector Neri",   telefono: "+52 55 1111 0008", cuotaMensual: 3500, saldoAnterior: 4600, otrosCargos: 900, aplicado: 3500 },
  { id: "cta-335", unidad: "335", propietarioId: "vec-6", residente: "Karla Rios",    telefono: "+52 55 1111 0011", cuotaMensual: 1500, saldoAnterior: 0,    otrosCargos: 0,   aplicado: 1500 },
];

let recibos = [
  { id: "REC-01", telefono: "+52 55 1111 0002", monto: 3500, fecha: "2026-03-03", referencia: "SPEI-803223", banco: "BBVA",         concepto: "Mantenimiento marzo",       estado: "nuevo",    cuentaManualId: null,       cuentaAplicadaId: null },
  { id: "REC-02", telefono: "+52 55 1111 0003", monto: 3500, fecha: "2026-03-04", referencia: "SPEI-804110", banco: "Banamex",      concepto: "Pago de mantenimiento",     estado: "revision", cuentaManualId: null,       cuentaAplicadaId: null },
  { id: "REC-03", telefono: "+52 55 1111 0008", monto: 4400, fecha: "2026-03-05", referencia: "SPEI-805992", banco: "Santander",    concepto: "Pago parcial con adeudo",   estado: "revision", cuentaManualId: null,       cuentaAplicadaId: null },
  { id: "REC-04", telefono: "+52 55 9999 1212", monto: 500,  fecha: "2026-03-06", referencia: "ROOF-14",     banco: "Mercado Pago", concepto: "Renta roof garden",         estado: "nuevo",    cuentaManualId: null,       cuentaAplicadaId: null },
  { id: "REC-05", telefono: "+52 55 1111 0011", monto: 1500, fecha: "2026-03-08", referencia: "SPEI-806100", banco: "BBVA",         concepto: "Cuota marzo",               estado: "aplicado", cuentaManualId: "cta-335",  cuentaAplicadaId: "cta-335" },
];

let gastosFijos = [
  { id: "gf-1", descripcion: "Mantenimiento elevador", proveedor: "TK Elevadores", presupuestoMensual: 1600, montoFactura: 3480, pendienteAnterior: 0, pagado: 3480, fechaPago: "2026-03-02", notas: "Pago de mantenimientos pendientes" },
  { id: "gf-2", descripcion: "Servicio seguridad 24 x 24", proveedor: "CISA", presupuestoMensual: 27500, montoFactura: 27500, pendienteAnterior: 0, pagado: 27500, fechaPago: "2026-03-02", notas: "Operacion mensual del edificio" },
  { id: "gf-3", descripcion: "Servicio de limpieza", proveedor: "Grupo Kanan", presupuestoMensual: 10800, montoFactura: 5340, pendienteAnterior: 0, pagado: 5340, fechaPago: "2026-03-02", notas: "Primer corte del mes" },
  { id: "gf-4", descripcion: "CFE areas comunes", proveedor: "CFE", presupuestoMensual: 1800, montoFactura: 6028, pendienteAnterior: 0, pagado: 6028, fechaPago: "2026-03-04", notas: "Consumo alto por bombeo" },
  { id: "gf-5", descripcion: "Servicio de agua", proveedor: "Sistema de Aguas", presupuestoMensual: 480, montoFactura: 480, pendienteAnterior: 0, pagado: 480, fechaPago: "2026-03-02", notas: "Pago de noviembre 2025" },
  { id: "gf-6", descripcion: "Administrador / supervision", proveedor: "Grupo Kanan", presupuestoMensual: 7600, montoFactura: 7603.8, pendienteAnterior: 0, pagado: 7603.8, fechaPago: "2026-03-03", notas: "Honorarios del mes" },
];

let gastosExtraordinarios = [
  { id: "ge-1", descripcion: "Mano de obra y limpieza Roof Garden", aprobadoPor: "Comite", montoFactura: 7172, pendienteAnterior: 2172, pagado: 0, fechaPago: "", notas: "Pendiente de programar pago" },
  { id: "ge-2", descripcion: "Quimico y limpieza de asador", aprobadoPor: "Comite", montoFactura: 3190.4, pendienteAnterior: 0, pagado: 3190.4, fechaPago: "2026-03-04", notas: "Se liquido el mismo mes" },
];

let ingresosExtra = [
  { id: "ie-1", concepto: "Renta roof garden", monto: 500, fecha: "2026-03-11", referencia: "ROOF-14", notas: "Evento 14 de marzo" },
  { id: "ie-2", concepto: "Renta roof garden", monto: 500, fecha: "2026-03-18", referencia: "ROOF-18", notas: "Evento 18 de marzo" },
];

let snapshotMensual = {
  periodo: "Marzo 2026",
  saldoBanco: 68240.4,
  fondoReserva: 11970.76,
  fondosApartados: 3500,
  actualizadoEl: "2026-03-10T09:30:00",
};

const ultimaRevisionComite = {
  fecha: "2026-03-07T19:30:00",
  cajaOperativa: 13870.76,
  porCobrar: 12650,
  facturasPendientes: 10440.4,
  recibosPendientes: 5,
};

let importaciones = [
  { id: "imp-1", tipo: "Cobranza", archivo: "cobranza_marzo.csv", filas: 18, fecha: "2026-03-09T18:20:00", notas: "Carga operativa desde Sheets" },
  { id: "imp-2", tipo: "Gastos fijos", archivo: "gastos_fijos_marzo.csv", filas: 10, fecha: "2026-03-09T18:28:00", notas: "Fuente de verdad contable" },
];

let historialEnvios = [
  { id: "env-1", cuentaId: "cta-302", unidad: "302", correo: "bruno302@correo.com", fecha: "2026-03-05T08:20:00", tipo: "Estado de cuenta" },
];

let tareas = [
  { id: "tar-0", titulo: "Revision de porton electrico", area: "Acceso vehicular", fecha: "2026-01-28", estado: "pendiente", responsable: "Seguritech" },
  { id: "tar-00", titulo: "Cambio de bomba presurizadora", area: "Cuarto de maquinas", fecha: "2026-02-26", estado: "en-curso", responsable: "AquaSafe" },
  { id: "tar-1", titulo: "Revision bomba de agua",   area: "Torre B",          fecha: "2026-03-04", estado: "pendiente",  responsable: "Tec. Rivera" },
  { id: "tar-2", titulo: "Servicio de elevador",     area: "Torre A",          fecha: "2026-03-08", estado: "en-curso",   responsable: "LiftCo" },
  { id: "tar-3", titulo: "Pintura de lobby",         area: "Lobby",            fecha: "2026-03-12", estado: "pendiente",  responsable: "Equipo interno" },
  { id: "tar-4", titulo: "Cambio de luminarias",     area: "Pasillo piso 3",   fecha: "2026-03-16", estado: "en-curso",   responsable: "Tec. Ramos" },
  { id: "tar-5", titulo: "Mantenimiento roof garden",area: "Roof garden",      fecha: "2026-03-21", estado: "pendiente",  responsable: "Proveedor externo" },
  { id: "tar-6", titulo: "Limpieza de cisterna",     area: "Planta baja",      fecha: "2026-03-02", estado: "completada", responsable: "AquaSafe" },
  { id: "tar-7", titulo: "Ajuste de chapas",         area: "Acceso principal", fecha: "2026-03-09", estado: "completada", responsable: "Cerrajeria Lopez" },
  { id: "tar-8", titulo: "Pintura de cuarto de basura", area: "Planta baja", fecha: "2026-02-12", estado: "completada", responsable: "Equipo interno" },
];

const vecinos = [
  { id: "vec-1", nombre: "Ana Juarez",     departamento: "301", telefono: "+52 55 1111 0001", tipo: "Propietaria", rol: "Comite",    correo: "ana301@correo.com",      contacto: "WhatsApp", emergencia: "Carlos Juarez", accesoVisitas: "QR directo" },
  { id: "vec-2", nombre: "Bruno Mena",     departamento: "302", telefono: "+52 55 1111 0002", tipo: "Propietario", rol: "Residente", correo: "bruno302@correo.com",    contacto: "Llamada",  emergencia: "Marta Mena", accesoVisitas: "Llamada previa" },
  { id: "vec-3", nombre: "Carla Pineda",   departamento: "305", telefono: "+52 55 1111 0003", tipo: "Propietaria", rol: "Residente", correo: "carla305@correo.com",    contacto: "WhatsApp", emergencia: "Sofia Pineda", accesoVisitas: "QR + llamada" },
  { id: "vec-4", nombre: "Fernando Lara",  departamento: "312", telefono: "+52 55 1111 0006", tipo: "Inquilino",   rol: "Residente", correo: "fernando312@correo.com", contacto: "WhatsApp", emergencia: "Laura Lara", accesoVisitas: "No pasar sin confirmacion" },
  { id: "vec-5", nombre: "Hector Neri",    departamento: "326", telefono: "+52 55 1111 0008", tipo: "Propietario", rol: "Comite",    correo: "hector326@correo.com",   contacto: "Llamada",  emergencia: "Julia Neri", accesoVisitas: "QR directo" },
  { id: "vec-6", nombre: "Karla Rios",     departamento: "335", telefono: "+52 55 1111 0011", tipo: "Propietaria", rol: "Residente", correo: "karla335@correo.com",    contacto: "Correo",   emergencia: "Raul Rios", accesoVisitas: "Llamada previa" },
];

const visitasQr = [
  { id: "vis-1", visitante: "Mariana Soto",  anfitrionId: "vec-1", unidad: "301", fecha: "2026-03-11", horario: "19:30 - 23:00", motivo: "Cena familiar", tipo: "Visita", estado: "activo", token: "VIGIL9|301|MARIANA-SOTO|2026-03-11|2300" },
  { id: "vis-2", visitante: "Arturo Perez",  anfitrionId: "vec-5", unidad: "326", fecha: "2026-03-12", horario: "08:30 - 10:30", motivo: "Valuacion del departamento", tipo: "Proveedor", estado: "programada", token: "VIGIL9|326|ARTURO-PEREZ|2026-03-12|1030" },
  { id: "vis-3", visitante: "Repartidor Nova", anfitrionId: "vec-2", unidad: "302", fecha: "2026-03-11", horario: "13:00 - 13:20", motivo: "Entrega controlada", tipo: "Mensajeria", estado: "por-expirar", token: "VIGIL9|302|NOVA-EXPRESS|2026-03-11|1320" },
  { id: "vis-4", visitante: "Laura Cardenas", anfitrionId: "vec-4", unidad: "312", fecha: "2026-03-13", horario: "18:00 - 22:00", motivo: "Visita personal", tipo: "Visita", estado: "programada", token: "VIGIL9|312|LAURA-CARDENAS|2026-03-13|2200" },
];

const proveedores = [
  { id: "prov-1", nombre: "LiftCo",          categoria: "Infraestructura", prioridad: "Critica", servicio: "Elevadores",         telefono: "+52 55 2222 1001", contacto: "Laura Perez",    horario: "24/7",    respuesta: "4 horas",    ultimo: "2026-02-27", nota: "Proveedor critico" },
  { id: "prov-2", nombre: "AquaSafe",        categoria: "Infraestructura", prioridad: "Critica", servicio: "Plomeria y cisterna", telefono: "+52 55 2222 1002", contacto: "Miguel Torres", horario: "Lun-Sab", respuesta: "Mismo dia", ultimo: "2026-03-02", nota: "Limpieza y presion de agua" },
  { id: "prov-3", nombre: "Cerrajeria Lopez",categoria: "Seguridad",       prioridad: "Media",   servicio: "Cerrajeria",         telefono: "+52 55 2222 1003", contacto: "Rosa Lopez",     horario: "Lun-Dom", respuesta: "2 horas",    ultimo: "2026-03-09", nota: "Buen tiempo de respuesta" },
  { id: "prov-4", nombre: "Limpio MX",       categoria: "Operacion",       prioridad: "Media",   servicio: "Limpieza",           telefono: "+52 55 2222 1004", contacto: "Daniel Vega",    horario: "Lun-Sab", respuesta: "Programado", ultimo: "2026-03-01", nota: "Areas comunes" },
  { id: "prov-5", nombre: "Seguritech",      categoria: "Seguridad",       prioridad: "Critica", servicio: "CCTV y accesos",     telefono: "+52 55 2222 1005", contacto: "Erika Solis",    horario: "24/7",    respuesta: "6 horas",    ultimo: "2026-02-21", nota: "Camaras y porton" },
];

const encuestas = [
  { id: "enc-1", titulo: "Satisfaccion con limpieza", cierre: "2026-03-18", respuestas: 42,
    opciones: [{ label: "Muy bien", votos: 24 }, { label: "Bien", votos: 12 }, { label: "Regular", votos: 6 }] },
  { id: "enc-2", titulo: "Uso del roof garden", cierre: "2026-03-25", respuestas: 31,
    opciones: [{ label: "Reservas en linea", votos: 17 }, { label: "Reserva con admin", votos: 8 }, { label: "Sin cambios", votos: 6 }] },
];

const archivos = [
  { id: "arc-1", nombre: "Reglamento de convivencia.pdf", categoria: "Comunidad", acceso: "Residentes", fecha: "2026-03-01" },
  { id: "arc-2", nombre: "Estado de cuenta marzo 2026.pdf", categoria: "Finanzas", acceso: "Admins", fecha: "2026-03-05" },
  { id: "arc-3", nombre: "Calendario de mantenimiento marzo.xlsx", categoria: "Mantenimiento", acceso: "Admins", fecha: "2026-03-07" },
];
const reglamentoSecciones = window.REGLAMENTO_SECCIONES || [];

/* ── STATE ────────────────────────────────────────────────── */
let financePaneActiva = "resumen";
let reciboSeleccionadoId = recibos.find(recibo => recibo.estado !== "aplicado")?.id || recibos[0].id;
let estadoCuentaSeleccionadoId = cuentas[0]?.id || null;
let reglamentoTemaActivo = "Todos";
let reglamentoSeccionActiva = reglamentoSecciones[0]?.id || null;
let reglamentoSyncFrame = null;
const maintenanceToday = new Date("2026-03-11T00:00:00");
let maintenanceMonthCursor = new Date(maintenanceToday.getFullYear(), maintenanceToday.getMonth(), 1);
let maintenanceDataSource = "local";
let maintenanceLastSync = null;
let maintenanceConnectionState = {
  kind: "local",
  detail: "Sincronizacion local en este navegador.",
};

const SUPABASE_STORAGE_KEY = "residentos.supabase.config";
const SUPABASE_DISABLED_KEY = "residentos.supabase.disabled";

/* ── UTILITIES ─────────────────────────────────────────────── */
const moneyFormatter = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
const currency = value => moneyFormatter.format(Math.round(Number(value || 0)));

const date = value => {
  if (!value) return "Sin fecha";
  return new Date(`${value}T00:00:00`).toLocaleDateString("es-MX", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const dateTime = value => {
  if (!value) return "Sin registro";
  return new Date(value).toLocaleString("es-MX", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const monthLabel = value => {
  const label = value.toLocaleDateString("es-MX", {
    month: "long",
    year: "numeric",
  });
  return label.charAt(0).toUpperCase() + label.slice(1);
};

const phone10 = value => String(value || "").replace(/\D/g, "").slice(-10);

const round2 = value => Math.round(Number(value || 0) * 100) / 100;

const toNumber = value => {
  if (typeof value === "number") return value;
  const cleaned = String(value || "").replace(/[^0-9.-]+/g, "");
  return cleaned ? round2(cleaned) : 0;
};

const normalizeSearchText = value => String(value || "")
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
  .trim();

const escapeHtml = value => String(value || "")
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&#39;");

const normalizeKey = value => String(value || "")
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
  .trim()
  .replace(/[^a-z0-9]+/g, "_")
  .replace(/^_|_$/g, "");

function safeLocalStorageGet(key) {
  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    return null;
  }
}

function safeLocalStorageSet(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    // Ignore storage errors and keep the app usable in memory.
  }
}

function safeLocalStorageRemove(key) {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    // Ignore storage errors and keep the app usable in memory.
  }
}

const totalCuenta = cuenta => round2(cuenta.cuotaMensual + cuenta.saldoAnterior + cuenta.otrosCargos);
const saldoCuenta = cuenta => round2(totalCuenta(cuenta) - cuenta.aplicado);

function estadoCuenta(cuenta) {
  const saldo = saldoCuenta(cuenta);
  if (saldo <= 0) return "al-dia";
  if (saldo <= cuenta.cuotaMensual) return "por-vencer";
  return "con-adeudo";
}

function badgeClass(estado) {
  const map = {
    nuevo: "badge-info",
    revision: "badge-warning",
    aplicado: "badge-success",
    activo: "badge-success",
    programada: "badge-info",
    "por-expirar": "badge-warning",
    usado: "badge-neutral",
    extra: "badge-neutral",
    pendiente: "badge-warning",
    "en-curso": "badge-info",
    completada: "badge-success",
    "al-dia": "badge-success",
    "por-vencer": "badge-warning",
    "con-adeudo": "badge-error",
    Admins: "badge-warning",
    Residentes: "badge-info",
    Critica: "badge-error",
    Media: "badge-warning",
  };
  return map[estado] || "badge-neutral";
}

function badgeLabel(estado) {
  const map = {
    nuevo: "Nuevo",
    revision: "En revision",
    aplicado: "Aplicado",
    activo: "Activo",
    programada: "Programada",
    "por-expirar": "Por expirar",
    usado: "Usado",
    extra: "Ingreso extra",
    pendiente: "Pendiente",
    "en-curso": "En curso",
    completada: "Completada",
    "al-dia": "Al dia",
    "por-vencer": "Por vencer",
    "con-adeudo": "Con adeudo",
  };
  return map[estado] || estado;
}

const buscarCuentaPorId = id => cuentas.find(cuenta => cuenta.id === id) || null;
const buscarReciboPorId = id => recibos.find(recibo => recibo.id === id) || null;
const vecinoPorId = id => vecinos.find(vecino => vecino.id === id) || null;

function vecinoPorUnidad(unidad) {
  return vecinos.find(vecino => vecino.departamento === unidad) || null;
}

function ultimoPagoCuenta(cuentaId) {
  const aplicado = recibos
    .filter(recibo => recibo.estado === "aplicado" && recibo.cuentaAplicadaId === cuentaId)
    .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))[0];
  return aplicado ? date(aplicado.fecha) : "Sin pago aplicado";
}

function sugerenciasDeCuenta(recibo) {
  return cuentas
    .map(cuenta => {
      let score = 0;
      if (phone10(cuenta.telefono) === phone10(recibo.telefono)) score += 70;
      if (Math.abs(recibo.monto - totalCuenta(cuenta)) < 1) score += 25;
      else if (Math.abs(recibo.monto - cuenta.cuotaMensual) < 1) score += 18;
      else if (recibo.monto < totalCuenta(cuenta)) score += 8;
      if (estadoCuenta(cuenta) !== "al-dia") score += 5;
      return { cuenta, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score);
}

function cuentaSugerida(recibo) {
  if (recibo.cuentaManualId) return buscarCuentaPorId(recibo.cuentaManualId);
  const top = sugerenciasDeCuenta(recibo)[0];
  return top && top.score >= 65 ? top.cuenta : null;
}

function cuentasDisponiblesParaRecibo(recibo) {
  const sugeridas = sugerenciasDeCuenta(recibo).map(item => item.cuenta);
  const ids = new Set(sugeridas.map(cuenta => cuenta.id));
  return [...sugeridas, ...cuentas.filter(cuenta => !ids.has(cuenta.id))];
}

const totalCobranzaAplicada = () => round2(cuentas.reduce((sum, cuenta) => sum + cuenta.aplicado, 0));
const totalCobranzaEmitida = () => round2(cuentas.reduce((sum, cuenta) => sum + totalCuenta(cuenta), 0));
const totalPorCobrar = () => round2(cuentas.reduce((sum, cuenta) => sum + Math.max(saldoCuenta(cuenta), 0), 0));
const unidadesConAdeudo = () => cuentas.filter(cuenta => estadoCuenta(cuenta) === "con-adeudo").length;
const presupuestoGastoFijo = () => round2(gastosFijos.reduce((sum, gasto) => sum + gasto.presupuestoMensual, 0));
const totalGastoFijoPagado = () => round2(gastosFijos.reduce((sum, gasto) => sum + gasto.pagado, 0));
const totalGastoFijoFacturado = () => round2(gastosFijos.reduce((sum, gasto) => sum + gasto.montoFactura + gasto.pendienteAnterior, 0));
const totalGastoExtraPagado = () => round2(gastosExtraordinarios.reduce((sum, gasto) => sum + gasto.pagado, 0));
const totalGastoExtraPendiente = () => round2(gastosExtraordinarios.reduce((sum, gasto) => sum + Math.max(gasto.montoFactura + gasto.pendienteAnterior - gasto.pagado, 0), 0));
const totalFacturasPendientes = () => round2((totalGastoFijoFacturado() - totalGastoFijoPagado()) + totalGastoExtraPendiente());
const totalIngresosExtra = () => round2(ingresosExtra.reduce((sum, ingreso) => sum + ingreso.monto, 0));
const totalEgresosPagados = () => round2(totalGastoFijoPagado() + totalGastoExtraPagado());
const cajaDisponible = () => round2(snapshotMensual.saldoBanco - snapshotMensual.fondoReserva - snapshotMensual.fondosApartados);
const recibosPendientes = () => recibos.filter(recibo => recibo.estado === "nuevo" || recibo.estado === "revision").length;
const eficienciaCobranza = () => totalCobranzaEmitida() ? Math.round((totalCobranzaAplicada() / totalCobranzaEmitida()) * 100) : 0;
const desviacionGastoFijo = () => round2(totalGastoFijoFacturado() - presupuestoGastoFijo());
const posicionDespuesDePagar = () => round2(cajaDisponible() - totalFacturasPendientes());
const posicionConCobranzaCompleta = () => round2(cajaDisponible() + totalPorCobrar() - totalFacturasPendientes());
const coberturaFacturasPct = () => totalFacturasPendientes() ? Math.round((cajaDisponible() / totalFacturasPendientes()) * 100) : 100;
const estadosPendientesEnvio = () => cuentas.filter(cuenta => saldoCuenta(cuenta) > 0 && !historialEnvios.some(envio => envio.cuentaId === cuenta.id)).length;

const parseTaskDate = value => new Date(`${value}T00:00:00`);

function sameMaintenanceMonth(value) {
  const dateValue = parseTaskDate(value);
  return dateValue.getFullYear() === maintenanceMonthCursor.getFullYear()
    && dateValue.getMonth() === maintenanceMonthCursor.getMonth();
}

function maintenanceMonthStart() {
  return new Date(maintenanceMonthCursor.getFullYear(), maintenanceMonthCursor.getMonth(), 1);
}

function maintenanceDefaultDate() {
  const year = maintenanceMonthCursor.getFullYear();
  const month = maintenanceMonthCursor.getMonth();
  const day = year === maintenanceToday.getFullYear() && month === maintenanceToday.getMonth()
    ? maintenanceToday.getDate()
    : 1;
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function isSupabaseDisabled() {
  return safeLocalStorageGet(SUPABASE_DISABLED_KEY) === "1";
}

function getStoredSupabaseConfig() {
  const raw = safeLocalStorageGet(SUPABASE_STORAGE_KEY);
  if (!raw) return {};

  try {
    const parsed = JSON.parse(raw);
    return {
      url: String(parsed.url || "").trim(),
      anonKey: String(parsed.anonKey || "").trim(),
      tasksTable: String(parsed.tasksTable || "tasks").trim() || "tasks",
    };
  } catch (error) {
    return {};
  }
}

function getSupabaseConfig() {
  if (isSupabaseDisabled()) return { url: "", anonKey: "", tasksTable: "tasks" };

  const inlineConfig = window.SUPABASE_CONFIG || {};
  const storedConfig = getStoredSupabaseConfig();

  return {
    url: String(storedConfig.url || inlineConfig.url || "").trim(),
    anonKey: String(storedConfig.anonKey || inlineConfig.anonKey || "").trim(),
    tasksTable: String(storedConfig.tasksTable || inlineConfig.tasksTable || "tasks").trim() || "tasks",
  };
}

function saveSupabaseConfig(config) {
  safeLocalStorageSet(SUPABASE_STORAGE_KEY, JSON.stringify({
    url: String(config.url || "").trim(),
    anonKey: String(config.anonKey || "").trim(),
    tasksTable: String(config.tasksTable || "tasks").trim() || "tasks",
  }));
  safeLocalStorageRemove(SUPABASE_DISABLED_KEY);
}

function setSupabaseDisabled(disabled) {
  if (disabled) {
    safeLocalStorageSet(SUPABASE_DISABLED_KEY, "1");
    return;
  }
  safeLocalStorageRemove(SUPABASE_DISABLED_KEY);
}

function hasSupabaseConfig() {
  const config = getSupabaseConfig();
  return Boolean(config.url && config.anonKey);
}

function supabaseBaseUrl() {
  return String(getSupabaseConfig().url || "").replace(/\/+$/, "");
}

function supabaseTasksTable() {
  return getSupabaseConfig().tasksTable || "tasks";
}

function supabaseAnonKey() {
  return getSupabaseConfig().anonKey || "";
}

function isLegacyJwtKey(value) {
  const key = String(value || "").trim();
  return key.split(".").length === 3 && key.startsWith("eyJ");
}

function setMaintenanceConnectionState(kind, detail) {
  maintenanceConnectionState = { kind, detail };
}

function friendlySupabaseError(error) {
  const raw = String(error?.message || error || "");
  if (/Failed to fetch/i.test(raw)) return "No pude conectar con Supabase. Revisa la URL, la red o CORS.";
  if (/JWT|token|apikey|Authorization/i.test(raw)) return "La anon key parece invalida o incompleta.";
  if (/relation .* does not exist|Could not find the table/i.test(raw)) return `No encontré la tabla "${supabaseTasksTable()}".`;
  return raw.length > 180 ? "La conexion fallo. Revisa la URL, la anon key y la tabla." : raw;
}

function maintenanceSourceMeta() {
  if (maintenanceDataSource !== "supabase") return isSupabaseDisabled() ? "Modo local forzado" : "Modo local";
  if (!maintenanceLastSync) return "Supabase";
  return `Supabase · sincronizado ${maintenanceLastSync.toLocaleTimeString("es-MX", { hour: "2-digit", minute: "2-digit" })}`;
}

function renderMaintenanceSupabaseSetup() {
  if (maintenanceSupabaseUrl) maintenanceSupabaseUrl.value = getSupabaseConfig().url || getStoredSupabaseConfig().url || "";
  if (maintenanceSupabaseAnon) maintenanceSupabaseAnon.value = getSupabaseConfig().anonKey || getStoredSupabaseConfig().anonKey || "";
  if (maintenanceSupabaseTable) maintenanceSupabaseTable.value = getSupabaseConfig().tasksTable || "tasks";

  if (!maintenanceSupabaseState) return;

  const labelMap = {
    local: "Modo local",
    loading: "Probando conexion",
    connected: "Supabase conectado",
    error: "Error de conexion",
  };

  maintenanceSupabaseState.className = `maintenance-connection is-${maintenanceConnectionState.kind}`;
  maintenanceSupabaseState.innerHTML = `
    <div class="maintenance-connection__label">${labelMap[maintenanceConnectionState.kind] || "Estado"}</div>
    <div class="maintenance-connection__detail">${escapeHtml(maintenanceConnectionState.detail || "")}</div>
  `;
}

function taskToRow(task) {
  return {
    title: task.titulo,
    area: task.area,
    due_date: task.fecha,
    status: task.estado,
    owner: task.responsable,
    notes: task.notas || null,
  };
}

function rowToTask(row) {
  return {
    id: String(row.id),
    titulo: row.title,
    area: row.area,
    fecha: row.due_date,
    estado: row.status,
    responsable: row.owner,
    notas: row.notes || "",
  };
}

async function supabaseRequest(path, { method = "GET", body, prefer } = {}) {
  const key = supabaseAnonKey();
  const response = await fetch(`${supabaseBaseUrl()}${path}`, {
    method,
    headers: {
      apikey: key,
      ...(isLegacyJwtKey(key) ? { Authorization: `Bearer ${key}` } : {}),
      "Content-Type": "application/json",
      ...(prefer ? { Prefer: prefer } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Supabase error ${response.status}`);
  }

  if (response.status === 204) return null;
  return response.json();
}

async function loadTasksFromSupabase() {
  if (!hasSupabaseConfig()) {
    setMaintenanceConnectionState("local", "Sin credenciales guardadas. La base sigue operando localmente.");
    return false;
  }

  const rows = await supabaseRequest(
    `/rest/v1/${supabaseTasksTable()}?select=id,title,area,due_date,status,owner,notes&order=due_date.asc`
  );

  tareas = rows.map(rowToTask);
  maintenanceDataSource = "supabase";
  maintenanceLastSync = new Date();
  setMaintenanceConnectionState("connected", `Leyendo ${rows.length} tareas desde ${supabaseTasksTable()}.`);
  return true;
}

async function createTaskRecord(task) {
  if (!hasSupabaseConfig()) {
    tareas.push(task);
    maintenanceDataSource = "local";
    setMaintenanceConnectionState("local", "La tarea se guardó solo en este navegador.");
    return task;
  }

  const rows = await supabaseRequest(`/rest/v1/${supabaseTasksTable()}`, {
    method: "POST",
    body: [taskToRow(task)],
    prefer: "return=representation",
  });

  const created = rowToTask(rows[0]);
  tareas.push(created);
  maintenanceDataSource = "supabase";
  maintenanceLastSync = new Date();
  setMaintenanceConnectionState("connected", `Tarea guardada en ${supabaseTasksTable()}.`);
  return created;
}

async function updateTaskStatusRecord(taskId, status) {
  const tarea = tareas.find(item => item.id === taskId);
  if (!tarea) return null;

  if (!hasSupabaseConfig()) {
    tarea.estado = status;
    maintenanceDataSource = "local";
    setMaintenanceConnectionState("local", "El estado cambió solo en este navegador.");
    return tarea;
  }

  const rows = await supabaseRequest(`/rest/v1/${supabaseTasksTable()}?id=eq.${encodeURIComponent(taskId)}`, {
    method: "PATCH",
    body: { status },
    prefer: "return=representation",
  });

  if (rows?.[0]) {
    const updated = rowToTask(rows[0]);
    const index = tareas.findIndex(item => item.id === taskId);
    if (index >= 0) tareas[index] = updated;
    maintenanceDataSource = "supabase";
    maintenanceLastSync = new Date();
    setMaintenanceConnectionState("connected", "Estado sincronizado con Supabase.");
    return updated;
  }

  return tarea;
}

async function syncTasksFromSupabase() {
  if (!hasSupabaseConfig()) {
    maintenanceDataSource = "local";
    setMaintenanceConnectionState("local", isSupabaseDisabled()
      ? "Supabase está desactivado en este navegador."
      : "Sin credenciales guardadas. La base sigue operando localmente.");
    renderMaintenanceSupabaseSetup();
    return false;
  }

  setMaintenanceConnectionState("loading", `Probando ${supabaseBaseUrl()}...`);
  renderMaintenanceSupabaseSetup();

  try {
    await loadTasksFromSupabase();
    renderAll();
    return true;
  } catch (error) {
    maintenanceDataSource = "local";
    setMaintenanceConnectionState("error", friendlySupabaseError(error));
    renderAll();
    throw error;
  }
}

function financeAlertas() {
  return recibosPendientes() + unidadesConAdeudo() + (totalFacturasPendientes() > 0 ? 1 : 0);
}

function deltaMeta(current, previous, type = "currency", inverse = false) {
  const diff = type === "currency" ? round2(current - previous) : current - previous;
  if (diff === 0) {
    return {
      className: "metric-delta is-neutral",
      icon: "→",
      signedValue: "Sin cambio",
      text: "vs última revisión",
      raw: diff,
    };
  }

  const improved = inverse ? diff < 0 : diff > 0;
  const valueText = type === "currency"
    ? currency(Math.abs(diff))
    : `${Math.abs(diff)}`;

  return {
    className: `metric-delta ${improved ? "is-positive" : "is-negative"}`,
    icon: diff > 0 ? "↑" : "↓",
    signedValue: `${diff > 0 ? "+" : "-"}${valueText}`,
    text: "vs última revisión",
    raw: diff,
  };
}

function formatReglamentoContent(content) {
  const lines = String(content || "")
    .split("\n")
    .map(line => line.trim())
    .filter(Boolean);

  const paragraphs = [];
  let current = "";

  const startsBlock = line => /^(?:[a-z]\)|[ivxlcdm]+\)|\d+(?:\.\d+)+|●|Uso de bicicletas|Condiciones:|Cuotas y depósito:|Condiciones adicionales:|Después de los horarios señalados:|Para tal efecto, deberán observarse las siguientes disposiciones:|Para realizar una mudanza, el condómino deberá:|Colaboración de los residentes para agilizar entregas:|En particular:)/i.test(line);
  const flush = () => {
    if (!current) return;
    paragraphs.push(current.trim());
    current = "";
  };

  lines.forEach(line => {
    if (startsBlock(line) || current.endsWith(":")) {
      flush();
      current = line;
      return;
    }
    current += `${current ? " " : ""}${line}`;
  });
  flush();

  return paragraphs;
}

function highlightReglamentoText(text, query) {
  const safeText = escapeHtml(text);
  if (!query) return safeText;

  const escapedQuery = String(query).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return safeText.replace(new RegExp(`(${escapedQuery})`, "gi"), "<mark>$1</mark>");
}

function scrollToTarget(targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function qrCompatibleSlug(value, fallback = "VISITA") {
  const slug = normalizeKey(value).replace(/_/g, "-").toUpperCase();
  return (slug || fallback).slice(0, 18);
}

function qrTime(value, fallback = "0000") {
  return String(value || fallback).replace(":", "").slice(0, 4) || fallback;
}

function buildVisitToken({ unidad, visitante, fecha, hasta }) {
  return `VIGIL9|${unidad}|${qrCompatibleSlug(visitante)}|${fecha}|${qrTime(hasta, "2359")}`;
}

function visitStatusForDate(fecha) {
  return fecha === "2026-03-11" ? "activo" : "programada";
}

function getVisitDraft() {
  const anfitrion = vecinoPorId(visitaAnfitrion?.value) || vecinos[0] || null;
  if (!anfitrion) return null;

  const visitante = String(visitaVisitante?.value || "").trim() || "Invitado temporal";
  const tipo = visitaTipo?.value || "Visita";
  const fecha = visitaFecha?.value || "2026-03-11";
  const desde = visitaDesde?.value || "19:00";
  const hasta = visitaHasta?.value || "22:00";
  const motivo = String(visitaMotivo?.value || "").trim() || "Acceso temporal autorizado";
  const unidad = anfitrion.departamento;

  return {
    anfitrion,
    unidad,
    visitante,
    tipo,
    fecha,
    desde,
    hasta,
    horario: `${desde} - ${hasta}`,
    motivo,
    estado: visitStatusForDate(fecha),
    token: buildVisitToken({ unidad, visitante, fecha, hasta }),
  };
}

function renderQrInto(element, value, label = "QR") {
  if (!element) return;
  element.innerHTML = "";
  element.setAttribute("aria-label", label);

  if (!value) {
    element.innerHTML = `<div class="visit-qr__fallback">Sin token disponible.</div>`;
    return;
  }

  if (!window.QRCode) {
    element.innerHTML = `<div class="visit-qr__fallback">${escapeHtml(value)}</div>`;
    return;
  }

  try {
    new window.QRCode(element, {
      text: value,
      width: 160,
      height: 160,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: window.QRCode.CorrectLevel.M,
    });
  } catch (error) {
    element.innerHTML = `<div class="visit-qr__fallback">${escapeHtml(value)}</div>`;
  }
}

function hydrateQrCodes(root = document) {
  root.querySelectorAll("[data-qr-value]").forEach(element => {
    renderQrInto(element, element.dataset.qrValue, element.dataset.qrLabel || "QR");
  });
}

function setReglamentoSeccionActiva(sectionId) {
  if (!sectionId) return;
  reglamentoSeccionActiva = sectionId;

  reglamentoResumen?.querySelectorAll("[data-target]").forEach(button => {
    const isActive = button.dataset.target === sectionId;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-current", isActive ? "true" : "false");
  });
}

function syncReglamentoSeccionActiva() {
  reglamentoSyncFrame = null;

  const reglamentoView = document.getElementById("view-reglamento");
  if (!reglamentoView || reglamentoView.hidden || !reglamentoResultados) return;

  const sections = [...reglamentoResultados.querySelectorAll(".rule-section[id]")];
  if (!sections.length) return;

  const threshold = Math.min(window.innerHeight * 0.24, 180);
  let activeId = sections[0].id;

  sections.forEach(section => {
    if (section.getBoundingClientRect().top <= threshold) {
      activeId = section.id;
    }
  });

  setReglamentoSeccionActiva(activeId);
}

function requestReglamentoSync() {
  if (reglamentoSyncFrame) return;
  reglamentoSyncFrame = window.requestAnimationFrame(syncReglamentoSeccionActiva);
}

function morososPrincipales(limit = 3) {
  return [...cuentas]
    .filter(cuenta => saldoCuenta(cuenta) > 0)
    .sort((a, b) => saldoCuenta(b) - saldoCuenta(a))
    .slice(0, limit);
}

function desviacionesPrincipales(limit = 3) {
  return [...gastosFijos]
    .map(gasto => ({
      ...gasto,
      desviacion: round2(gasto.montoFactura + gasto.pendienteAnterior - gasto.presupuestoMensual),
    }))
    .filter(gasto => gasto.desviacion > 0)
    .sort((a, b) => b.desviacion - a.desviacion)
    .slice(0, limit);
}

function lecturaFinanciera() {
  const posicion = posicionDespuesDePagar();
  const cobertura = coberturaFacturasPct();

  if (posicion < 0) {
    return {
      tone: "is-risk",
      badgeClassName: "badge-error",
      badgeText: "Tension de caja",
      title: "La operacion depende de cobrar y priorizar pagos.",
      copy: `Hoy puedes cubrir ${Math.max(cobertura, 0)}% de las facturas pendientes con caja disponible. Si liquidas todo ahora, faltarian ${currency(Math.abs(posicion))}.`,
    };
  }

  if (unidadesConAdeudo() > 0 || recibosPendientes() > 0 || desviacionGastoFijo() > 0) {
    return {
      tone: "is-watch",
      badgeClassName: "badge-warning",
      badgeText: "Seguimiento activo",
      title: "La posicion es estable, pero depende de disciplina operativa.",
      copy: `Hay caja para operar, pero el resultado del mes mejora si cierras cobranza, concilias recibos y controlas desviaciones de gasto fijo.`,
    };
  }

  return {
    tone: "is-good",
    badgeClassName: "badge-success",
    badgeText: "Controlado",
    title: "La operacion del mes esta bajo control.",
    copy: "La caja cubre obligaciones actuales y no hay alertas relevantes en cobranza o conciliacion.",
  };
}

function resumenEstadoCuenta(cuenta) {
  const propietario = vecinoPorId(cuenta.propietarioId) || vecinoPorUnidad(cuenta.unidad);
  const total = totalCuenta(cuenta);
  const saldoPendiente = saldoCuenta(cuenta);
  const estado = estadoCuenta(cuenta);
  const referencia = `${datosPago.referenciaBase} ${cuenta.unidad} ${snapshotMensual.periodo.toUpperCase()}`;

  return {
    cuenta,
    propietario,
    total,
    saldoPendiente,
    estado,
    referencia,
    ultimoPago: ultimoPagoCuenta(cuenta.id),
  };
}

function composeMail(resumen) {
  const subject = `Estado de cuenta de mantenimiento - Depto ${resumen.cuenta.unidad} - ${snapshotMensual.periodo}`;
  const body = [
    `Hola ${resumen.propietario?.nombre || resumen.cuenta.residente},`,
    "",
    `Comparto tu estado de cuenta de mantenimiento correspondiente a ${snapshotMensual.periodo}.`,
    "",
    `Unidad: ${resumen.cuenta.unidad}`,
    `Cuota mensual: ${currency(resumen.cuenta.cuotaMensual)}`,
    `Saldo anterior: ${currency(resumen.cuenta.saldoAnterior)}`,
    `Otros cargos: ${currency(resumen.cuenta.otrosCargos)}`,
    `Pago aplicado: ${currency(resumen.cuenta.aplicado)}`,
    `Total a pagar: ${currency(resumen.saldoPendiente)}`,
    `Estado: ${badgeLabel(resumen.estado)}`,
    "",
    `Pago sugerido via ${datosPago.banco}`,
    `CLABE: ${datosPago.clabe}`,
    `Titular: ${datosPago.titular}`,
    `Referencia: ${resumen.referencia}`,
    "",
    "Este mensaje fue generado desde ResidentOS para control del comite.",
  ].join("\n");

  return { subject, body };
}

function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"') {
      if (inQuotes && next === '"') {
        field += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      row.push(field);
      field = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(field);
      if (row.some(cell => String(cell).trim() !== "")) rows.push(row);
      row = [];
      field = "";
      continue;
    }

    field += char;
  }

  if (field !== "" || row.length) {
    row.push(field);
    if (row.some(cell => String(cell).trim() !== "")) rows.push(row);
  }

  return rows;
}

function csvToObjects(text) {
  const rows = parseCSV(text);
  if (!rows.length) return [];
  const headers = rows[0].map(normalizeKey);

  return rows.slice(1).map(row => {
    const entry = {};
    headers.forEach((header, index) => {
      entry[header] = String(row[index] || "").trim();
    });
    return entry;
  }).filter(entry => Object.values(entry).some(Boolean));
}

function registrarImportacion(tipo, archivo, filas, notas) {
  importaciones.unshift({
    id: `imp-${Date.now()}`,
    tipo,
    archivo,
    filas,
    fecha: new Date().toISOString(),
    notas,
  });
}

function aplicarImportacionCobranza(rows) {
  const nuevas = rows
    .filter(row => row.unidad)
    .map(row => {
      const actual = cuentas.find(cuenta => cuenta.unidad === row.unidad);
      const vecino = actual ? vecinoPorId(actual.propietarioId) : vecinoPorUnidad(row.unidad);

      return {
        id: actual?.id || `cta-${row.unidad}`,
        unidad: row.unidad,
        propietarioId: actual?.propietarioId || vecino?.id || null,
        residente: row.propietario || row.residente || actual?.residente || vecino?.nombre || `Unidad ${row.unidad}`,
        telefono: row.telefono || actual?.telefono || vecino?.telefono || "",
        cuotaMensual: toNumber(row.cuota_mensual || row.cuota),
        saldoAnterior: toNumber(row.saldo_anterior || row.saldo_prev),
        otrosCargos: toNumber(row.otros_cargos || row.cargos_adicionales || row.otros),
        aplicado: toNumber(row.aplicado || row.monto_realizado || row.pagado),
      };
    });

  if (!nuevas.length) return 0;
  cuentas = nuevas;
  if (!buscarCuentaPorId(estadoCuentaSeleccionadoId)) estadoCuentaSeleccionadoId = cuentas[0]?.id || null;
  return nuevas.length;
}

function aplicarImportacionGastosFijos(rows) {
  const nuevos = rows
    .filter(row => row.descripcion)
    .map((row, index) => ({
      id: `gf-${index + 1}`,
      descripcion: row.descripcion,
      proveedor: row.proveedor || "Sin proveedor",
      presupuestoMensual: toNumber(row.presupuesto || row.presupuesto_mensual),
      montoFactura: toNumber(row.factura || row.monto_factura),
      pendienteAnterior: toNumber(row.pendiente_anterior || row.saldo_pendiente_del_ano_anterior),
      pagado: toNumber(row.pagado || row.monto_pagado),
      fechaPago: row.fecha_pago || "",
      notas: row.notas || "",
    }));

  if (!nuevos.length) return 0;
  gastosFijos = nuevos;
  return nuevos.length;
}

function aplicarImportacionGastosExtra(rows) {
  const nuevos = rows
    .filter(row => row.descripcion)
    .map((row, index) => ({
      id: `ge-${index + 1}`,
      descripcion: row.descripcion,
      aprobadoPor: row.aprobado_por || "Comite",
      montoFactura: toNumber(row.factura || row.monto_factura),
      pendienteAnterior: toNumber(row.pendiente_anterior || row.pendientes_de_meses_anteriores),
      pagado: toNumber(row.pagado || row.monto_pagado),
      fechaPago: row.fecha_pago || "",
      notas: row.notas || "",
    }));

  if (!nuevos.length) return 0;
  gastosExtraordinarios = nuevos;
  return nuevos.length;
}

async function importarCSV(tipo, file) {
  const text = await file.text();
  const rows = csvToObjects(text);
  let filas = 0;

  if (tipo === "cobranza") filas = aplicarImportacionCobranza(rows);
  if (tipo === "gastos fijos") filas = aplicarImportacionGastosFijos(rows);
  if (tipo === "gastos extraordinarios") filas = aplicarImportacionGastosExtra(rows);

  registrarImportacion(
    tipo,
    file.name,
    filas,
    filas ? "Importacion correcta desde CSV exportado de Sheets" : "Sin registros validos para esta plantilla"
  );

  actualizarSnapshotMensual();
  renderAll();
}

function actualizarSnapshotMensual() {
  snapshotMensual = {
    ...snapshotMensual,
    actualizadoEl: new Date().toISOString(),
  };
}

/* ── DOM REFS ─────────────────────────────────────────────── */
const resumenCards = document.getElementById("resumen-cards");
const resumenFinanzas = document.getElementById("finanzas-resumen");
const decisionCenterStory = document.getElementById("decision-center-story");
const decisionCenterChanges = document.getElementById("decision-center-changes");
const decisionCenterAlerts = document.getElementById("decision-center-alerts");
const decisionCenterActions = document.getElementById("decision-center-actions");
const decisionCenterOps = document.getElementById("decision-center-ops");
const resumenView = document.getElementById("view-resumen");

const finanzasStory = document.getElementById("finanzas-story");
const finanzasKpis = document.getElementById("finanzas-kpis");
const finanzasMetricas = document.getElementById("finanzas-metricas");
const finanzasSemaforo = document.getElementById("finanzas-semaforo");
const finanzasPuente = document.getElementById("finanzas-puente");
const finanzasRiesgos = document.getElementById("finanzas-riesgos");
const finanzasDecisiones = document.getElementById("finanzas-decisiones");

const cobranzaLista = document.getElementById("cobranza-lista");
const recibosLista = document.getElementById("recibos-lista");
const reciboDetalle = document.getElementById("recibo-detalle");
const gastosFijosLista = document.getElementById("gastos-fijos-lista");
const gastosExtraLista = document.getElementById("gastos-extra-lista");
const cierreCards = document.getElementById("cierre-cards");
const importacionesLista = document.getElementById("importaciones-lista");
const ingresosExtraLista = document.getElementById("ingresos-extra-lista");
const cierreResumen = document.getElementById("cierre-resumen");
const estadoCuentaSelector = document.getElementById("estado-cuenta-selector");
const estadoCuentaPreview = document.getElementById("estado-cuenta-preview");
const estadoCuentaEmailPreview = document.getElementById("estado-cuenta-email-preview");
const historialEnviosLista = document.getElementById("historial-envios");

const calendario = document.getElementById("calendario");
const maintenancePageTitle = document.getElementById("maintenance-page-title");
const maintenanceProperties = document.getElementById("maintenance-properties");
const maintenanceTableBody = document.getElementById("maintenance-table-body");
const maintenanceDatabaseMeta = document.getElementById("maintenance-database-meta");
const maintenanceMonthLabel = document.getElementById("maintenance-month-label");
const maintenancePrevMonth = document.getElementById("maintenance-prev-month");
const maintenanceNextMonth = document.getElementById("maintenance-next-month");
const maintenanceForm = document.getElementById("maintenance-form");
const maintenanceTitle = document.getElementById("maintenance-title");
const maintenanceArea = document.getElementById("maintenance-area");
const maintenanceDate = document.getElementById("maintenance-date");
const maintenanceOwner = document.getElementById("maintenance-owner");
const maintenanceStatus = document.getElementById("maintenance-status");
const maintenanceSupabaseState = document.getElementById("maintenance-supabase-state");
const maintenanceSupabaseForm = document.getElementById("maintenance-supabase-form");
const maintenanceSupabaseUrl = document.getElementById("maintenance-supabase-url");
const maintenanceSupabaseAnon = document.getElementById("maintenance-supabase-anon");
const maintenanceSupabaseTable = document.getElementById("maintenance-supabase-table");
const maintenanceSupabaseDisable = document.getElementById("maintenance-supabase-disable");
const maintenanceSupabaseReload = document.getElementById("maintenance-supabase-reload");
const tareasVencidas = document.getElementById("tareas-vencidas");
const tareasPend = document.getElementById("tareas-pendientes");
const tareasEnCurso = document.getElementById("tareas-en-curso");
const tareasComp = document.getElementById("tareas-completadas");
const vecinosLista = document.getElementById("vecinos-lista");
const visitasKpis = document.getElementById("visitas-kpis");
const visitasQrLista = document.getElementById("visitas-qr-lista");
const visitasReglas = document.getElementById("visitas-reglas");
const visitasPreferencias = document.getElementById("visitas-preferencias");
const visitaForm = document.getElementById("visita-form");
const visitaPreview = document.getElementById("visita-preview");
const visitaAnfitrion = document.getElementById("visita-anfitrion");
const visitaVisitante = document.getElementById("visita-visitante");
const visitaTipo = document.getElementById("visita-tipo");
const visitaFecha = document.getElementById("visita-fecha");
const visitaDesde = document.getElementById("visita-desde");
const visitaHasta = document.getElementById("visita-hasta");
const visitaMotivo = document.getElementById("visita-motivo");
const visitaCopiarTokenBtn = document.getElementById("visita-copiar-token");
const reglamentoBusqueda = document.getElementById("reglamento-busqueda");
const reglamentoTemasWrap = document.getElementById("reglamento-temas");
const reglamentoResumen = document.getElementById("reglamento-resumen");
const reglamentoResultados = document.getElementById("reglamento-resultados");
const proveedoresLista = document.getElementById("proveedores-lista");
const encuestasLista = document.getElementById("encuestas-lista");
const archivosLista = document.getElementById("archivos-lista");

const archivoForm = document.getElementById("archivo-form");
const archivoInput = document.getElementById("archivo-input");
const archivoCategoria = document.getElementById("archivo-categoria");
const archivoAcceso = document.getElementById("archivo-acceso");
const vecinoBusqueda = document.getElementById("vecino-busqueda");
const provBusqueda = document.getElementById("proveedor-busqueda");
const provCategoria = document.getElementById("proveedor-categoria");
const provPrioridad = document.getElementById("proveedor-prioridad");

const importCobranza = document.getElementById("import-cobranza");
const importGastosFijos = document.getElementById("import-gastos-fijos");
const importGastosExtra = document.getElementById("import-gastos-extra");
const generarCierreBtn = document.getElementById("generar-cierre");
const abrirBorradorCorreoBtn = document.getElementById("abrir-borrador-correo");
const registrarEnvioBtn = document.getElementById("registrar-envio");

/* ── RENDER: HOME SUMMARY ─────────────────────────────────── */
function renderResumen() {
  const lectura = lecturaFinanciera();
  const cambioCaja = deltaMeta(cajaDisponible(), ultimaRevisionComite.cajaOperativa);
  const cambioCobranza = deltaMeta(totalPorCobrar(), ultimaRevisionComite.porCobrar, "currency", true);
  const cambioFacturas = deltaMeta(totalFacturasPendientes(), ultimaRevisionComite.facturasPendientes, "currency", true);
  const cambioRecibos = deltaMeta(recibosPendientes(), ultimaRevisionComite.recibosPendientes, "count", true);
  const morosos = morososPrincipales(2);
  const desviaciones = desviacionesPrincipales(2);
  const tareasAbiertas = tareas.filter(tarea => tarea.estado !== "completada");
  const siguienteTarea = [...tareasAbiertas].sort((a, b) => new Date(a.fecha) - new Date(b.fecha))[0];
  const ultimaImportacion = importaciones[0];
  const ultimoEnvio = historialEnvios[0];
  const decisionesAbiertas = [
    recibosPendientes() > 0,
    unidadesConAdeudo() > 0,
    totalFacturasPendientes() > 0,
    estadosPendientesEnvio() > 0,
  ].filter(Boolean).length;

  decisionCenterStory.innerHTML = `
    <div class="finance-story-card ${lectura.tone}">
      <div class="finance-story-card__eyebrow">Centro de decisiones</div>
      <div class="finance-story-card__header">
        <div>
          <div class="finance-story-card__title">${lectura.title}</div>
          <div class="finance-story-card__copy">${lectura.copy}</div>
        </div>
        <span class="badge ${lectura.badgeClassName}">${lectura.badgeText}</span>
      </div>
      <div class="finance-story-card__meta">
        <div class="finance-story-pill">Última revisión <strong>${dateTime(ultimaRevisionComite.fecha)}</strong></div>
        <div class="finance-story-pill">Decisiones abiertas <strong>${decisionesAbiertas}</strong></div>
        <div class="finance-story-pill">Cobranza recuperada <strong>${eficienciaCobranza()}%</strong></div>
      </div>
    </div>
  `;

  const cards = [
    { color: "green",  label: "Caja operativa hoy",   value: currency(cajaDisponible()),             copy: "Dinero realmente utilizable este mes" },
    { color: posicionDespuesDePagar() >= 0 ? "blue" : "red", label: "Posición después de pagar", value: currency(posicionDespuesDePagar()), copy: "Cómo queda la caja si liquidas pendientes" },
    { color: "orange", label: "Cobranza pendiente",   value: currency(totalPorCobrar()),             copy: `${unidadesConAdeudo()} unidades requieren seguimiento` },
    { color: "teal",   label: "Recibos por conciliar",value: recibosPendientes(),                    copy: "Pagos recibidos aún sin asiento operativo" },
  ];

  resumenCards.innerHTML = cards.map(card => `
    <div class="stat-card ${card.color}">
      <div class="stat-card__label">${card.label}</div>
      <div class="stat-card__value">${card.value}</div>
      <div class="stat-card__copy">${card.copy}</div>
    </div>
  `).join("");

  const minis = [
    { label: "Fondo de reserva", value: snapshotMensual.fondoReserva },
    { label: "Estados por enviar", value: estadosPendientesEnvio(), kind: "count" },
    { label: "Tareas abiertas", value: tareasAbiertas.length, kind: "count" },
    { label: "Proveedores críticos", value: proveedores.filter(proveedor => proveedor.prioridad === "Critica").length, kind: "count" },
  ];

  resumenFinanzas.innerHTML = minis.map(item => `
    <div class="mini-card">
      <div class="mini-card__label">${item.label}</div>
      <div class="mini-card__value">${item.kind === "count" ? item.value : currency(item.value)}</div>
    </div>
  `).join("");

  decisionCenterChanges.innerHTML = `
    <div class="status-list">
      <div class="status-item">
        <div class="status-item__label">Caja operativa</div>
        <div class="status-item__value">${currency(cajaDisponible())}</div>
        <div class="status-item__copy">
          <span class="${cambioCaja.className}">
            <span class="metric-delta__icon" aria-hidden="true">${cambioCaja.icon}</span>
            <span>${cambioCaja.signedValue}</span>
            <span>${cambioCaja.text}</span>
          </span>
        </div>
      </div>
      <div class="status-item">
        <div class="status-item__label">Por cobrar</div>
        <div class="status-item__value">${currency(totalPorCobrar())}</div>
        <div class="status-item__copy">
          <span class="${cambioCobranza.className}">
            <span class="metric-delta__icon" aria-hidden="true">${cambioCobranza.icon}</span>
            <span>${cambioCobranza.signedValue}</span>
            <span>${cambioCobranza.text}</span>
          </span>
        </div>
      </div>
      <div class="status-item">
        <div class="status-item__label">Facturas pendientes</div>
        <div class="status-item__value">${currency(totalFacturasPendientes())}</div>
        <div class="status-item__copy">
          <span class="${cambioFacturas.className}">
            <span class="metric-delta__icon" aria-hidden="true">${cambioFacturas.icon}</span>
            <span>${cambioFacturas.signedValue}</span>
            <span>${cambioFacturas.text}</span>
          </span>
        </div>
      </div>
      <div class="status-item">
        <div class="status-item__label">Recibos por conciliar</div>
        <div class="status-item__value">${recibosPendientes()}</div>
        <div class="status-item__copy">
          <span class="${cambioRecibos.className}">
            <span class="metric-delta__icon" aria-hidden="true">${cambioRecibos.icon}</span>
            <span>${cambioRecibos.signedValue}</span>
            <span>${cambioRecibos.text}</span>
          </span>
        </div>
      </div>
    </div>
  `;

  decisionCenterAlerts.innerHTML = `
    <div class="status-list tight">
      <div class="status-item">
        <div class="status-item__title">Morosidad concentrada</div>
        <div class="status-item__copy">${morosos.length
          ? morosos.map(cuenta => `Depto ${cuenta.unidad}: ${currency(saldoCuenta(cuenta))}`).join(" · ")
          : "No hay unidades con saldo vencido relevante."}</div>
      </div>
      <div class="status-item">
        <div class="status-item__title">Desviaciones de gasto</div>
        <div class="status-item__copy">${desviaciones.length
          ? desviaciones.map(gasto => `${gasto.descripcion}: +${currency(gasto.desviacion)}`).join(" · ")
          : "No hay desviaciones significativas contra presupuesto."}</div>
      </div>
      <div class="status-item">
        <div class="status-item__title">Pago extraordinario pendiente</div>
        <div class="status-item__copy">${totalGastoExtraPendiente() > 0
          ? `${currency(totalGastoExtraPendiente())} sigue pendiente en extraordinarios aprobados.`
          : "No hay extraordinarios pendientes por liquidar."}</div>
      </div>
    </div>
  `;

  decisionCenterActions.innerHTML = `
    <div class="decision-list">
      <div class="decision-card">
        <div class="decision-card__title">Recuperar cobranza antes de liberar gasto nuevo</div>
        <div class="decision-card__copy">La decisión financiera más rentable hoy es cobrar primero a las unidades con mayor saldo pendiente.</div>
        <button class="btn btn-secondary" type="button" data-jump-view="finanzas" data-jump-pane="cobranza">Ir a cobranza</button>
      </div>
      <div class="decision-card">
        <div class="decision-card__title">Validar el gasto fuera de presupuesto</div>
        <div class="decision-card__copy">Confirma si el sobrecosto fijo es recurrente o extraordinario antes de cerrar el periodo.</div>
        <button class="btn btn-secondary" type="button" data-jump-view="finanzas" data-jump-pane="egresos">Ir a egresos</button>
      </div>
      <div class="decision-card">
        <div class="decision-card__title">Cerrar mes y comunicar a propietarios</div>
        <div class="decision-card__copy">Una vez conciliado el mes, actualiza snapshot y emite estados pendientes.</div>
        <div class="action-row">
          <button class="btn btn-secondary" type="button" data-jump-view="finanzas" data-jump-pane="cierre">Ir a cierre</button>
          <button class="btn btn-secondary" type="button" data-jump-view="finanzas" data-jump-pane="recibos">Ir a estados</button>
        </div>
      </div>
    </div>
  `;

  decisionCenterOps.innerHTML = `
    <div class="status-list tight">
      <div class="status-item">
        <div class="status-item__title">Siguiente tarea operativa</div>
        <div class="status-item__copy">${siguienteTarea
          ? `${siguienteTarea.titulo} · ${siguienteTarea.area} · ${date(siguienteTarea.fecha)}`
          : "No hay tareas abiertas."}</div>
      </div>
      <div class="status-item">
        <div class="status-item__title">Última importación contable</div>
        <div class="status-item__copy">${ultimaImportacion
          ? `${ultimaImportacion.tipo} · ${ultimaImportacion.archivo} · ${dateTime(ultimaImportacion.fecha)}`
          : "Sin importaciones registradas."}</div>
      </div>
      <div class="status-item">
        <div class="status-item__title">Último envío a propietario</div>
        <div class="status-item__copy">${ultimoEnvio
          ? `Depto ${ultimoEnvio.unidad} · ${ultimoEnvio.correo} · ${dateTime(ultimoEnvio.fecha)}`
          : "Todavía no hay envíos registrados."}</div>
      </div>
      <div class="status-item">
        <div class="status-item__title">Accesos útiles</div>
        <div class="action-row">
          <button class="btn btn-secondary" type="button" data-jump-view="mantenimiento">Ver mantenimiento</button>
          <button class="btn btn-secondary" type="button" data-jump-view="proveedores">Ver proveedores</button>
        </div>
      </div>
    </div>
  `;
}

/* ── RENDER: FINANZAS RESUMEN ─────────────────────────────── */
function renderFinanzasResumen() {
  const lectura = lecturaFinanciera();
  const ultimaImportacion = importaciones[0];
  const principalesMorosos = morososPrincipales();
  const principalesDesviaciones = desviacionesPrincipales();

  finanzasStory.innerHTML = `
    <div class="finance-story-card ${lectura.tone}">
      <div class="finance-story-card__eyebrow">Lectura del mes</div>
      <div class="finance-story-card__header">
        <div>
          <div class="finance-story-card__title">${lectura.title}</div>
          <div class="finance-story-card__copy">${lectura.copy}</div>
        </div>
        <span class="badge ${lectura.badgeClassName}">${lectura.badgeText}</span>
      </div>
      <div class="finance-story-card__meta">
        <div class="finance-story-pill">Cobertura actual de facturas <strong>${coberturaFacturasPct()}%</strong></div>
        <div class="finance-story-pill">Cobranza recuperada <strong>${eficienciaCobranza()}%</strong></div>
        <div class="finance-story-pill">Ultima carga <strong>${ultimaImportacion ? `${ultimaImportacion.tipo} ${dateTime(ultimaImportacion.fecha)}` : "Sin importaciones"}</strong></div>
      </div>
    </div>
  `;

  const kpis = [
    { color: "green", label: "Caja operativa hoy", value: currency(cajaDisponible()), copy: "Banco menos reserva y fondos apartados" },
    { color: posicionDespuesDePagar() >= 0 ? "blue" : "red", label: "Posicion despues de pagar", value: currency(posicionDespuesDePagar()), copy: "Caja restante si liquidas compromisos actuales" },
    { color: "orange", label: "Por cobrar del mes", value: currency(totalPorCobrar()), copy: `${unidadesConAdeudo()} unidades concentran adeudo` },
    { color: "teal", label: "Reserva protegida", value: currency(snapshotMensual.fondoReserva), copy: "No deberia usarse para gasto ordinario" },
  ];

  finanzasKpis.innerHTML = kpis.map(card => `
    <div class="stat-card ${card.color}">
      <div class="stat-card__label">${card.label}</div>
      <div class="stat-card__value">${card.value}</div>
      <div class="stat-card__copy">${card.copy}</div>
    </div>
  `).join("");

  const metricas = [
    { label: "Cobranza aplicada", value: totalCobranzaAplicada() },
    { label: "Cobranza emitida", value: totalCobranzaEmitida() },
    { label: "Gasto fijo vs presupuesto", value: desviacionGastoFijo() },
    { label: "Recibos por conciliar", value: recibosPendientes() },
  ];

  finanzasMetricas.innerHTML = metricas.map(item => `
    <div class="mini-card">
      <div class="mini-card__label">${item.label}</div>
      <div class="mini-card__value">${item.label === "Recibos por conciliar" ? item.value : currency(item.value)}</div>
    </div>
  `).join("");

  const semaforo = [
    {
      titulo: "Liquidez operativa",
      valor: `${coberturaFacturasPct()}%`,
      texto: posicionDespuesDePagar() >= 0
        ? `Si hoy liquidas pendientes, quedan ${currency(posicionDespuesDePagar())} sin tocar reserva.`
        : `Si hoy liquidas pendientes, faltan ${currency(Math.abs(posicionDespuesDePagar()))}.`,
    },
    {
      titulo: "Cobranza del periodo",
      valor: `${eficienciaCobranza()}%`,
      texto: `${currency(totalPorCobrar())} sigue pendiente de recuperar en ${unidadesConAdeudo()} unidades.`,
    },
    {
      titulo: "Disciplina de gasto",
      valor: currency(desviacionGastoFijo()),
      texto: desviacionGastoFijo() > 0
        ? `Los gastos fijos superan presupuesto por ${currency(desviacionGastoFijo())}.`
        : "Los gastos fijos no muestran desviacion material contra presupuesto.",
    },
  ];

  finanzasSemaforo.innerHTML = `
    <div class="status-list">
      ${semaforo.map(item => `
        <div class="status-item">
          <div class="status-item__label">${item.titulo}</div>
          <div class="status-item__value">${item.valor}</div>
          <div class="status-item__copy">${item.texto}</div>
        </div>
      `).join("")}
    </div>
  `;

  finanzasPuente.innerHTML = `
    <div class="bridge-list">
      <div class="bridge-row">
        <div class="bridge-row__label">Saldo en banco</div>
        <div class="bridge-row__value">${currency(snapshotMensual.saldoBanco)}</div>
      </div>
      <div class="bridge-row">
        <div class="bridge-row__label">Menos fondo de reserva</div>
        <div class="bridge-row__value is-negative">- ${currency(snapshotMensual.fondoReserva)}</div>
      </div>
      <div class="bridge-row">
        <div class="bridge-row__label">Menos fondos apartados</div>
        <div class="bridge-row__value is-negative">- ${currency(snapshotMensual.fondosApartados)}</div>
      </div>
      <div class="bridge-row">
        <div class="bridge-row__label">Caja operativa disponible</div>
        <div class="bridge-row__value">${currency(cajaDisponible())}</div>
      </div>
      <div class="bridge-row">
        <div class="bridge-row__label">Menos facturas pendientes</div>
        <div class="bridge-row__value is-negative">- ${currency(totalFacturasPendientes())}</div>
      </div>
      <div class="bridge-row">
        <div class="bridge-row__label">Posicion despues de pagar</div>
        <div class="bridge-row__value ${posicionDespuesDePagar() >= 0 ? "is-positive" : "is-negative"}">${currency(posicionDespuesDePagar())}</div>
      </div>
      <div class="bridge-row">
        <div class="bridge-row__label">Posicion si cobras todo lo pendiente</div>
        <div class="bridge-row__value ${posicionConCobranzaCompleta() >= 0 ? "is-positive" : "is-negative"}">${currency(posicionConCobranzaCompleta())}</div>
      </div>
    </div>
  `;

  finanzasRiesgos.innerHTML = `
    <div class="status-list tight">
      <div class="status-item">
        <div class="status-item__title">Morosidad concentrada</div>
        <div class="status-item__copy">${principalesMorosos.length
          ? principalesMorosos.map(cuenta => `Depto ${cuenta.unidad}: ${currency(saldoCuenta(cuenta))}`).join(" · ")
          : "No hay unidades con saldo vencido."}</div>
      </div>
      <div class="status-item">
        <div class="status-item__title">Desviaciones de gasto fijo</div>
        <div class="status-item__copy">${principalesDesviaciones.length
          ? principalesDesviaciones.map(gasto => `${gasto.descripcion}: +${currency(gasto.desviacion)}`).join(" · ")
          : "No hay desviaciones relevantes contra presupuesto."}</div>
      </div>
      <div class="status-item">
        <div class="status-item__title">Operacion por conciliar</div>
        <div class="status-item__copy">${recibosPendientes()} recibos siguen sin aplicarse y ${currency(totalGastoExtraPendiente())} de extraordinarios permanece pendiente.</div>
      </div>
    </div>
  `;

  finanzasDecisiones.innerHTML = `
    <div class="decision-list">
      <div class="decision-card">
        <div class="decision-card__title">1. Recuperar cobranza antes de liberar gasto nuevo</div>
        <div class="decision-card__copy">Ataca primero las unidades con mayor saldo pendiente y valida los comprobantes que siguen en revision.</div>
        <button class="btn btn-secondary" type="button" data-jump-pane="cobranza">Ir a cobranza</button>
      </div>
      <div class="decision-card">
        <div class="decision-card__title">2. Revisar desviaciones y extraordinarios</div>
        <div class="decision-card__copy">Confirma si el gasto excedido es recurrente o excepcional antes de cerrar el mes.</div>
        <button class="btn btn-secondary" type="button" data-jump-pane="egresos">Ir a egresos</button>
      </div>
      <div class="decision-card">
        <div class="decision-card__title">3. Congelar snapshot y comunicar a propietarios</div>
        <div class="decision-card__copy">Actualiza el cierre del periodo y genera estados de cuenta solo despues de conciliar el mes.</div>
        <div class="action-row">
          <button class="btn btn-secondary" type="button" data-jump-pane="cierre">Ir a cierre</button>
          <button class="btn btn-secondary" type="button" data-jump-pane="recibos">Ir a estados</button>
        </div>
      </div>
    </div>
  `;
}

/* ── RENDER: COBRANZA ─────────────────────────────────────── */
function renderCobranza() {
  const rows = [...cuentas].sort((a, b) => a.unidad.localeCompare(b.unidad));
  cobranzaLista.innerHTML = rows.map(cuenta => {
    const propietario = vecinoPorId(cuenta.propietarioId) || vecinoPorUnidad(cuenta.unidad);
    return `
      <tr data-cuenta-id="${cuenta.id}">
        <td class="cell-strong">${cuenta.unidad}</td>
        <td>
          <div class="cell-strong">${propietario?.nombre || cuenta.residente}</div>
          <div class="cell-muted">${propietario?.correo || "Sin correo"}</div>
        </td>
        <td>${currency(cuenta.cuotaMensual)}</td>
        <td>${currency(cuenta.otrosCargos)}</td>
        <td>${currency(cuenta.saldoAnterior)}</td>
        <td>${currency(cuenta.aplicado)}</td>
        <td class="cell-strong">${currency(saldoCuenta(cuenta))}</td>
        <td>${ultimoPagoCuenta(cuenta.id)}</td>
        <td><span class="badge ${badgeClass(estadoCuenta(cuenta))}">${badgeLabel(estadoCuenta(cuenta))}</span></td>
      </tr>
    `;
  }).join("");
}

function renderRecibos() {
  recibosLista.innerHTML = recibos.map(recibo => `
    <div class="receipt-card ${recibo.id === reciboSeleccionadoId ? "is-selected" : ""}" data-recibo-id="${recibo.id}">
      <div class="receipt-row">
        <div>
          <div class="receipt-name">${recibo.id} · ${recibo.banco}</div>
          <div class="receipt-meta">${recibo.telefono}</div>
        </div>
        <span class="badge ${badgeClass(recibo.estado)}">${badgeLabel(recibo.estado)}</span>
      </div>
      <div class="receipt-meta" style="margin-top: 6px">${currency(recibo.monto)} · ${date(recibo.fecha)} · ${recibo.referencia}</div>
    </div>
  `).join("");

  const recibo = buscarReciboPorId(reciboSeleccionadoId);
  if (!recibo) {
    reciboDetalle.innerHTML = `<div class="empty-state">Selecciona un comprobante para revisarlo.</div>`;
    return;
  }

  const sugerida = cuentaSugerida(recibo);
  const opciones = cuentasDisponiblesParaRecibo(recibo);
  const cuentaActual = recibo.cuentaManualId || sugerida?.id || "";
  const bloqueado = recibo.estado === "aplicado" || recibo.estado === "extra";

  reciboDetalle.innerHTML = `
    <div class="detail-grid">
      <div class="detail-item">
        <div class="detail-item__label">Telefono</div>
        <div class="detail-item__value">${recibo.telefono}</div>
      </div>
      <div class="detail-item">
        <div class="detail-item__label">Monto</div>
        <div class="detail-item__value">${currency(recibo.monto)}</div>
      </div>
      <div class="detail-item">
        <div class="detail-item__label">Fecha</div>
        <div class="detail-item__value">${date(recibo.fecha)}</div>
      </div>
      <div class="detail-item">
        <div class="detail-item__label">Referencia</div>
        <div class="detail-item__value">${recibo.referencia}</div>
      </div>
      <div class="detail-item">
        <div class="detail-item__label">Banco</div>
        <div class="detail-item__value">${recibo.banco}</div>
      </div>
      <div class="detail-item">
        <div class="detail-item__label">Concepto</div>
        <div class="detail-item__value">${recibo.concepto}</div>
      </div>
    </div>

    <div class="detail-actions">
      <label class="field">
        <span class="label">Asignar a cuenta</span>
        <div class="select-wrap">
          <select class="input" id="selector-cuenta">
            <option value="">Sin asignar</option>
            ${opciones.map(cuenta => `
              <option value="${cuenta.id}" ${cuentaActual === cuenta.id ? "selected" : ""}>
                ${cuenta.unidad} - ${cuenta.residente} (${currency(saldoCuenta(cuenta))})
              </option>
            `).join("")}
          </select>
        </div>
      </label>

      <div class="detail-note">
        ${sugerida
          ? `Coincidencia automatica: Depto ${sugerida.unidad} · ${sugerida.residente}. Total esperado ${currency(totalCuenta(sugerida))}.`
          : "Sin coincidencia automatica. Asigna la unidad manualmente antes de aplicar el pago."}
      </div>

      <button class="btn btn-primary" type="button" data-accion="aplicar" ${bloqueado ? "disabled" : ""}>Aplicar pago</button>
      <button class="btn btn-secondary" type="button" data-accion="revision" ${recibo.estado === "aplicado" ? "disabled" : ""}>Marcar en revision</button>
      <button class="btn btn-secondary" type="button" data-accion="extra" ${bloqueado ? "disabled" : ""}>Registrar como ingreso extra</button>
    </div>
  `;
}

/* ── RENDER: EGRESOS ──────────────────────────────────────── */
function renderEgresos() {
  gastosFijosLista.innerHTML = gastosFijos.map(gasto => `
    <tr>
      <td class="cell-strong">${gasto.descripcion}</td>
      <td>${gasto.proveedor}</td>
      <td>${currency(gasto.presupuestoMensual)}</td>
      <td>${currency(gasto.montoFactura)}</td>
      <td>${currency(gasto.pendienteAnterior)}</td>
      <td>${currency(gasto.pagado)}</td>
      <td>${gasto.fechaPago ? date(gasto.fechaPago) : "Pendiente"}</td>
      <td class="cell-muted">${gasto.notas || "-"}</td>
    </tr>
  `).join("") + `
    <tr>
      <td class="cell-strong">Total</td>
      <td></td>
      <td>${currency(gastosFijos.reduce((sum, gasto) => sum + gasto.presupuestoMensual, 0))}</td>
      <td>${currency(gastosFijos.reduce((sum, gasto) => sum + gasto.montoFactura, 0))}</td>
      <td>${currency(gastosFijos.reduce((sum, gasto) => sum + gasto.pendienteAnterior, 0))}</td>
      <td>${currency(gastosFijos.reduce((sum, gasto) => sum + gasto.pagado, 0))}</td>
      <td></td>
      <td></td>
    </tr>
  `;

  gastosExtraLista.innerHTML = gastosExtraordinarios.map(gasto => `
    <tr>
      <td class="cell-strong">${gasto.descripcion}</td>
      <td>${gasto.aprobadoPor}</td>
      <td>${currency(gasto.montoFactura)}</td>
      <td>${currency(gasto.pendienteAnterior)}</td>
      <td>${currency(gasto.pagado)}</td>
      <td>${gasto.fechaPago ? date(gasto.fechaPago) : "Pendiente"}</td>
      <td class="cell-muted">${gasto.notas || "-"}</td>
    </tr>
  `).join("") + `
    <tr>
      <td class="cell-strong">Total</td>
      <td></td>
      <td>${currency(gastosExtraordinarios.reduce((sum, gasto) => sum + gasto.montoFactura, 0))}</td>
      <td>${currency(gastosExtraordinarios.reduce((sum, gasto) => sum + gasto.pendienteAnterior, 0))}</td>
      <td>${currency(gastosExtraordinarios.reduce((sum, gasto) => sum + gasto.pagado, 0))}</td>
      <td></td>
      <td></td>
    </tr>
  `;
}

/* ── RENDER: CIERRE ───────────────────────────────────────── */
function renderCierre() {
  const cards = [
    { label: "Ingresos operativos", value: totalCobranzaAplicada() },
    { label: "Egresos pagados", value: totalEgresosPagados() },
    { label: "Saldo banco", value: snapshotMensual.saldoBanco },
    { label: "Disponible real", value: cajaDisponible() },
  ];

  cierreCards.innerHTML = cards.map(card => `
    <div class="mini-card">
      <div class="mini-card__label">${card.label}</div>
      <div class="mini-card__value">${currency(card.value)}</div>
    </div>
  `).join("");

  importacionesLista.innerHTML = importaciones.length
    ? importaciones.map(item => `
        <div class="file-card">
          <div>
            <div class="file-card__name">${item.tipo} · ${item.archivo}</div>
            <div class="file-card__meta">${item.filas} filas · ${dateTime(item.fecha)}</div>
          </div>
          <span class="badge ${item.filas ? "badge-info" : "badge-warning"}">${item.filas ? "Importado" : "Revisar"}</span>
        </div>
      `).join("")
    : `<div class="empty-state">Todavia no hay importaciones registradas.</div>`;

  ingresosExtraLista.innerHTML = ingresosExtra.length
    ? ingresosExtra.map(ingreso => `
        <div class="file-card">
          <div>
            <div class="file-card__name">${ingreso.concepto}</div>
            <div class="file-card__meta">${date(ingreso.fecha)} · ${ingreso.referencia}</div>
          </div>
          <span class="badge badge-success">${currency(ingreso.monto)}</span>
        </div>
      `).join("")
    : `<div class="empty-state">Sin ingresos extra registrados.</div>`;

  cierreResumen.innerHTML = `
    <div class="status-list">
      <div class="status-item">
        <div class="status-item__title">Periodo</div>
        <div class="status-item__copy">${snapshotMensual.periodo}</div>
      </div>
      <div class="status-item">
        <div class="status-item__title">Reserva y apartados</div>
        <div class="status-item__copy">Fondo de reserva ${currency(snapshotMensual.fondoReserva)} · Fondos apartados ${currency(snapshotMensual.fondosApartados)}</div>
      </div>
      <div class="status-item">
        <div class="status-item__title">Obligaciones del mes</div>
        <div class="status-item__copy">Por cobrar ${currency(totalPorCobrar())} · Por pagar ${currency(totalFacturasPendientes())}</div>
      </div>
      <div class="status-item">
        <div class="status-item__title">Ultima actualizacion</div>
        <div class="status-item__copy">${dateTime(snapshotMensual.actualizadoEl)}</div>
      </div>
    </div>
  `;
}

/* ── RENDER: RECIBOS / ESTADOS ────────────────────────────── */
function renderEstadosCuenta() {
  const options = cuentas
    .slice()
    .sort((a, b) => a.unidad.localeCompare(b.unidad))
    .map(cuenta => `<option value="${cuenta.id}" ${estadoCuentaSeleccionadoId === cuenta.id ? "selected" : ""}>Depto ${cuenta.unidad} - ${cuenta.residente}</option>`)
    .join("");

  estadoCuentaSelector.innerHTML = options;

  const cuenta = buscarCuentaPorId(estadoCuentaSeleccionadoId) || cuentas[0];
  if (!cuenta) {
    estadoCuentaPreview.innerHTML = `<div class="empty-state">No hay cuentas disponibles.</div>`;
    estadoCuentaEmailPreview.innerHTML = "";
    historialEnviosLista.innerHTML = `<div class="empty-state">Sin historial de envios.</div>`;
    return;
  }

  const resumen = resumenEstadoCuenta(cuenta);
  const mail = composeMail(resumen);

  estadoCuentaPreview.innerHTML = `
    <div class="statement-card">
      <div class="statement-head">
        <div>
          <div class="statement-title">Estado de cuenta - Depto ${cuenta.unidad}</div>
          <div class="statement-meta">
            <div>${resumen.propietario?.nombre || cuenta.residente}</div>
            <div>${resumen.propietario?.correo || "Sin correo registrado"}</div>
            <div>Periodo: ${snapshotMensual.periodo}</div>
          </div>
        </div>
        <span class="badge ${badgeClass(resumen.estado)}">${badgeLabel(resumen.estado)}</span>
      </div>

      <div class="statement-grid">
        <div class="statement-line">
          <div class="statement-line__label">Cuota mensual</div>
          <div class="statement-line__value">${currency(cuenta.cuotaMensual)}</div>
        </div>
        <div class="statement-line">
          <div class="statement-line__label">Saldo anterior</div>
          <div class="statement-line__value">${currency(cuenta.saldoAnterior)}</div>
        </div>
        <div class="statement-line">
          <div class="statement-line__label">Otros cargos</div>
          <div class="statement-line__value">${currency(cuenta.otrosCargos)}</div>
        </div>
        <div class="statement-line">
          <div class="statement-line__label">Pago aplicado</div>
          <div class="statement-line__value">${currency(cuenta.aplicado)}</div>
        </div>
        <div class="statement-line">
          <div class="statement-line__label">Ultimo pago</div>
          <div class="statement-line__value">${resumen.ultimoPago}</div>
        </div>
        <div class="statement-line">
          <div class="statement-line__label">Referencia SPEI</div>
          <div class="statement-line__value">${resumen.referencia}</div>
        </div>
      </div>

      <div class="statement-total">
        <span>Total a pagar</span>
        <span>${currency(resumen.saldoPendiente)}</span>
      </div>
    </div>
  `;

  estadoCuentaEmailPreview.innerHTML = `
    <div class="mail-preview">
      <div class="mail-preview__subject">Asunto: ${mail.subject}</div>
      <div class="mail-preview__body">${mail.body}</div>
    </div>
  `;

  const lista = historialEnvios.filter(item => item.cuentaId === cuenta.id);
  historialEnviosLista.innerHTML = lista.length
    ? lista.map(item => `
        <div class="file-card">
          <div>
            <div class="file-card__name">${item.tipo}</div>
            <div class="file-card__meta">${item.correo} · ${dateTime(item.fecha)}</div>
          </div>
          <span class="badge badge-info">${item.unidad}</span>
        </div>
      `).join("")
    : `<div class="empty-state">Todavia no hay envios registrados para esta unidad.</div>`;
}

/* ── RENDER: CALENDARIO ────────────────────────────────────── */
function renderCalendario() {
  const year = maintenanceMonthCursor.getFullYear();
  const month = maintenanceMonthCursor.getMonth();
  const firstDay = new Date(year, month, 1);
  const startOffset = (firstDay.getDay() + 6) % 7;
  const totalDays = new Date(year, month + 1, 0).getDate();
  const headers = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];

  const cells = headers.map(header => `<div class="calendar-head">${header}</div>`);

  for (let i = 0; i < startOffset; i += 1) {
    cells.push(`<div class="calendar-day is-muted"></div>`);
  }

  for (let dayNumber = 1; dayNumber <= totalDays; dayNumber += 1) {
    const key = `${year}-${String(month + 1).padStart(2, "0")}-${String(dayNumber).padStart(2, "0")}`;
    const eventos = tareas.filter(tarea => tarea.fecha === key);

    cells.push(`
      <div class="calendar-day">
        <div class="day-number">${dayNumber}</div>
        <div class="day-events">
          ${eventos.map(evento => `<div class="event-pill ${evento.estado}">${evento.titulo}</div>`).join("")}
        </div>
      </div>
    `);
  }

  calendario.innerHTML = cells.join("");
}

/* ── RENDER: TAREAS ───────────────────────────────────────── */
function maintenanceStatusMarkup(estado) {
  return `
    <span class="maintenance-status is-${estado}">
      <span class="maintenance-status__dot"></span>
      ${badgeLabel(estado)}
    </span>
  `;
}

function maintenanceStatusSelectMarkup(tarea) {
  return `
    <label class="maintenance-status-control">
      <select class="maintenance-status-select is-${tarea.estado}" data-task-status="${tarea.id}">
        <option value="pendiente" ${tarea.estado === "pendiente" ? "selected" : ""}>Pendiente</option>
        <option value="en-curso" ${tarea.estado === "en-curso" ? "selected" : ""}>En curso</option>
        <option value="completada" ${tarea.estado === "completada" ? "selected" : ""}>Completada</option>
      </select>
    </label>
  `;
}

function renderTareas() {
  const mesVisible = monthLabel(maintenanceMonthCursor);
  const monthTasks = tareas.filter(tarea => sameMaintenanceMonth(tarea.fecha));
  const overdueTasks = tareas
    .filter(tarea => tarea.estado !== "completada" && parseTaskDate(tarea.fecha) < maintenanceMonthStart())
    .sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
  const abiertas = monthTasks.filter(tarea => tarea.estado !== "completada");
  const enCursoMes = monthTasks.filter(tarea => tarea.estado === "en-curso");
  const pendientesMes = monthTasks.filter(tarea => tarea.estado === "pendiente");
  const completadasMes = monthTasks.filter(tarea => tarea.estado === "completada");
  const responsables = new Set(tareas.map(tarea => tarea.responsable)).size;
  const ordenadas = [...monthTasks].sort((a, b) => new Date(a.fecha) - new Date(b.fecha));

  if (maintenancePageTitle) maintenancePageTitle.textContent = `Tareas de ${mesVisible.toLowerCase()}`;
  if (maintenanceDatabaseMeta) maintenanceDatabaseMeta.textContent = `Vista maestra de ${mesVisible} · ${maintenanceSourceMeta()}`;
  if (maintenanceMonthLabel) maintenanceMonthLabel.textContent = mesVisible;
  renderMaintenanceSupabaseSetup();

  maintenanceProperties.innerHTML = [
    { label: "Abiertas del mes", value: abiertas.length, meta: mesVisible },
    { label: "En curso", value: enCursoMes.length, meta: "Del mes visible" },
    { label: "Vencidas", value: overdueTasks.length, meta: "Pendientes de meses previos" },
    { label: "Responsables", value: responsables, meta: "Personas o proveedores activos" },
    { label: "Completadas", value: completadasMes.length, meta: "Cerradas en el mes visible" },
  ].map(item => `
    <div class="maintenance-property">
      <div class="maintenance-property__label">${item.label}</div>
      <div class="maintenance-property__value">${item.value}</div>
      <div class="maintenance-property__meta">${item.meta}</div>
    </div>
  `).join("");

  maintenanceTableBody.innerHTML = ordenadas.length
    ? ordenadas.map(tarea => `
        <tr>
          <td>
            <div class="maintenance-table__title">${tarea.titulo}</div>
          </td>
          <td>${tarea.area}</td>
          <td>${date(tarea.fecha)}</td>
          <td>${tarea.responsable}</td>
          <td>${maintenanceStatusSelectMarkup(tarea)}</td>
        </tr>
      `).join("")
    : `<tr><td colspan="5"><div class="empty-state maintenance-empty">Sin tareas registradas en ${mesVisible}.</div></td></tr>`;

  const renderGroup = (container, items, emptyMessage) => {
    container.innerHTML = items.length
      ? items.map(tarea => `
          <div class="task-card">
            <div class="task-row task-row--top">
              <div>
                <div class="task-name">${tarea.titulo}</div>
                <div class="task-meta">${tarea.area} · ${date(tarea.fecha)}</div>
              </div>
              ${maintenanceStatusMarkup(tarea.estado)}
            </div>
            <div class="task-meta task-meta--spaced">Responsable: ${tarea.responsable}</div>
          </div>
        `).join("")
      : `<div class="empty-state">${emptyMessage}</div>`;
  };

  renderGroup(tareasVencidas, overdueTasks, "Sin tareas vencidas de meses anteriores.");
  renderGroup(tareasPend, pendientesMes, `Sin tareas pendientes en ${mesVisible}.`);
  renderGroup(tareasEnCurso, enCursoMes, `Sin tareas en curso en ${mesVisible}.`);
  renderGroup(tareasComp, completadasMes, `Sin tareas completadas en ${mesVisible}.`);
}

function shiftMaintenanceMonth(delta) {
  maintenanceMonthCursor = new Date(
    maintenanceMonthCursor.getFullYear(),
    maintenanceMonthCursor.getMonth() + delta,
    1
  );

  if (maintenanceDate) maintenanceDate.value = maintenanceDefaultDate();
  renderCalendario();
  renderTareas();
}

/* ── RENDER: VECINOS ──────────────────────────────────────── */
function renderVecinos() {
  const q = normalizeSearchText(vecinoBusqueda.value);
  const lista = vecinos.filter(vecino => {
    const text = normalizeSearchText(`${vecino.nombre} ${vecino.departamento} ${vecino.telefono} ${vecino.tipo} ${vecino.rol} ${vecino.accesoVisitas}`);
    return !q || text.includes(q);
  });

  vecinosLista.innerHTML = lista.length
    ? lista.map(vecino => `
        <div class="dir-card">
          <div class="dir-card__head">
            <div>
              <div class="dir-card__name">${vecino.nombre}</div>
              <div class="dir-card__sub">Depto ${vecino.departamento} · ${vecino.telefono}</div>
            </div>
            <span class="badge ${vecino.rol === "Comite" ? "badge-warning" : "badge-neutral"}">${vecino.rol}</span>
          </div>
          <div class="meta-pills">
            <span class="badge badge-neutral">${vecino.tipo}</span>
            <span class="badge badge-neutral">${vecino.contacto}</span>
            <span class="badge badge-info">${vecino.accesoVisitas}</span>
          </div>
          <div class="dir-card__detail" style="margin-top: 12px">${vecino.correo}</div>
          <div class="dir-card__detail">Emergencias: ${vecino.emergencia}</div>
        </div>
      `).join("")
    : `<div class="empty-state">Sin resultados para esa busqueda.</div>`;
}

function renderVisitaForm() {
  if (!visitaAnfitrion) return;
  const selectedId = visitaAnfitrion.value || vecinos[0]?.id || "";

  visitaAnfitrion.innerHTML = vecinos.map(vecino => `
    <option value="${vecino.id}">Depto ${vecino.departamento} · ${vecino.nombre}</option>
  `).join("");

  visitaAnfitrion.value = vecinos.some(vecino => vecino.id === selectedId)
    ? selectedId
    : (vecinos[0]?.id || "");
}

function renderVisitaPreview() {
  if (!visitaPreview) return;
  const draft = getVisitDraft();
  if (!draft) {
    visitaPreview.innerHTML = `<div class="empty-state">Selecciona un departamento para preparar un nuevo QR.</div>`;
    return;
  }

  visitaPreview.innerHTML = `
    <div class="visit-preview__card">
      <div>
        <div class="visit-preview__eyebrow">Preview del pase</div>
        <div class="visit-preview__title">${draft.visitante}</div>
        <div class="visit-preview__meta">
          <div>Depto ${draft.unidad} · ${draft.anfitrion.nombre}</div>
          <div>${date(draft.fecha)} · ${draft.horario}</div>
          <div>${draft.tipo} · ${draft.motivo}</div>
        </div>
        <div class="visit-preview__token">Token: ${draft.token}</div>
      </div>
      <div class="visit-qr" data-qr-value="${escapeHtml(draft.token)}" data-qr-label="${escapeHtml(`QR de acceso para ${draft.visitante}`)}"></div>
    </div>
  `;

  hydrateQrCodes(visitaPreview);
}

function renderVisitas() {
  const hoy = "2026-03-11";
  const visitasHoy = visitasQr.filter(visita => visita.fecha === hoy).length;
  const activas = visitasQr.filter(visita => visita.estado === "activo" || visita.estado === "por-expirar").length;
  const programadas = visitasQr.filter(visita => visita.estado === "programada").length;
  const qrDirectos = vecinos.filter(vecino => vecino.accesoVisitas === "QR directo").length;

  visitasKpis.innerHTML = [
    { color: "teal", label: "Visitas del dia", value: visitasHoy, copy: "Pases listos para vigilancia hoy" },
    { color: "green", label: "QR activos", value: activas, copy: "Codigos vigentes para acceso inmediato" },
    { color: "orange", label: "QR programados", value: programadas, copy: "Accesos ya cargados para proximas horas" },
    { color: "blue", label: "Deptos con QR directo", value: qrDirectos, copy: "Unidades con autorizacion mas agil" },
  ].map(card => `
    <div class="stat-card ${card.color}">
      <div class="stat-card__label">${card.label}</div>
      <div class="stat-card__value">${card.value}</div>
      <div class="stat-card__copy">${card.copy}</div>
    </div>
  `).join("");

  visitasQrLista.innerHTML = visitasQr.map(visita => {
    const anfitrion = vecinoPorId(visita.anfitrionId);
    return `
      <div class="visit-card">
        <div class="visit-card__content">
          <div class="visit-card__head">
            <div>
              <div class="dir-card__name">${visita.visitante}</div>
              <div class="dir-card__sub">Depto ${visita.unidad} · ${anfitrion?.nombre || "Sin anfitrion"} · ${visita.tipo}</div>
            </div>
            <span class="badge ${badgeClass(visita.estado)}">${badgeLabel(visita.estado)}</span>
          </div>
          <div class="meta-pills">
            <span class="badge badge-neutral">${date(visita.fecha)}</span>
            <span class="badge badge-neutral">${visita.horario}</span>
            <span class="badge badge-neutral">${anfitrion?.accesoVisitas || "Llamada previa"}</span>
          </div>
          <div class="dir-card__detail" style="margin-top: 12px">${visita.motivo}</div>
          <div class="dir-card__detail">Token: ${visita.token}</div>
        </div>
        <div class="visit-qr" data-qr-value="${escapeHtml(visita.token)}" data-qr-label="${escapeHtml(`QR de acceso para ${visita.visitante}`)}"></div>
      </div>
    `;
  }).join("");

  visitasReglas.innerHTML = `
    <div class="status-list tight">
      <div class="status-item">
        <div class="status-item__title">Visitas ligadas a un departamento</div>
        <div class="status-item__copy">Toda persona ajena debe estar vinculada a un departamento especifico y autorizada por el residente correspondiente. Base: Art. 27.</div>
      </div>
      <div class="status-item">
        <div class="status-item__title">Autorizacion previa o llamada al momento</div>
        <div class="status-item__copy">Si no hay aviso previo, vigilancia debe llamar al departamento antes de permitir acceso. Sin confirmacion, no entra. Base: Art. 27.</div>
      </div>
      <div class="status-item">
        <div class="status-item__title">Repartidores y mensajeria</div>
        <div class="status-item__copy">El repartidor debe identificarse y quitarse el casco. Si el residente no responde en 3 minutos, no se autoriza acceso. Base: Art. 29.</div>
      </div>
      <div class="status-item">
        <div class="status-item__title">Buenas practicas para vigilancia</div>
        <div class="status-item__copy">Las visitas deben usar el timbre peatonal y evitar el claxon. Esto ayuda a alinear el QR con el reglamento y reduce friccion operativa.</div>
      </div>
    </div>
  `;

  visitasPreferencias.innerHTML = `
    <div class="status-list tight">
      ${vecinos.map(vecino => `
        <div class="status-item">
          <div class="status-item__title">Depto ${vecino.departamento} · ${vecino.nombre}</div>
          <div class="status-item__copy">${vecino.accesoVisitas} · Contacto preferido: ${vecino.contacto} · ${vecino.telefono}</div>
        </div>
      `).join("")}
    </div>
  `;

  renderVisitaForm();
  renderVisitaPreview();
  hydrateQrCodes(visitasQrLista);
}

function renderReglamento() {
  const q = normalizeSearchText(reglamentoBusqueda?.value);
  const temas = ["Todos", ...reglamentoSecciones.map(section => section.theme)];
  const articulos = reglamentoSecciones.flatMap(section =>
    section.articles.map(article => ({
      ...article,
      sectionId: section.id,
      sectionTitle: section.title,
      theme: section.theme,
    }))
  );

  const coincidencias = articulos.filter(article =>
    !q || normalizeSearchText(`${article.title} ${article.content} ${article.sectionTitle} ${article.theme}`).includes(q)
  );

  reglamentoTemasWrap.innerHTML = temas.map(tema => `
    <button class="filter-chip ${tema === reglamentoTemaActivo ? "is-active" : ""}" data-tema="${tema}" type="button">${tema}</button>
  `).join("");

  reglamentoResumen.innerHTML = `
    ${q ? `
      <div class="reglamento-search-note ${coincidencias.length ? "" : "is-empty"}">
        <div class="reglamento-search-note__title">
          ${coincidencias.length
            ? `${coincidencias.length} coincidencia${coincidencias.length === 1 ? "" : "s"} para "${escapeHtml(reglamentoBusqueda.value.trim())}"`
            : `No encontré "${escapeHtml(reglamentoBusqueda.value.trim())}" en el reglamento`}
        </div>
        <div class="reglamento-search-note__copy">
          El texto completo sigue visible abajo. La búsqueda solo resalta coincidencias.
        </div>
      </div>
    ` : ""}
    <div class="reglamento-nav-list">
      ${reglamentoSecciones.map(section => `
        <button class="reglamento-jump ${section.id === reglamentoSeccionActiva ? "is-active" : ""}" data-target="${section.id}" type="button" aria-current="${section.id === reglamentoSeccionActiva ? "true" : "false"}">
          <span class="reglamento-jump__section">${section.theme}</span>
          <span class="reglamento-jump__title">${section.title}</span>
        </button>
      `).join("")}
    </div>
  `;

  reglamentoResultados.innerHTML = reglamentoSecciones.map(section => `
    <section class="rule-section" id="${section.id}">
      <div class="rule-section__head">
        <div class="rule-section__eyebrow">${section.theme}</div>
        <h2 class="rule-section__title">${section.title}</h2>
      </div>
      <div class="rule-section__articles">
        ${section.articles.map(article => {
          const isMatch = q && normalizeSearchText(`${article.title} ${article.content} ${section.title} ${section.theme}`).includes(q);
          const paragraphs = formatReglamentoContent(article.content)
            .map(paragraph => `<p>${highlightReglamentoText(paragraph, reglamentoBusqueda?.value.trim())}</p>`)
            .join("");

          return `
            <article class="rule-card ${isMatch ? "is-match" : ""}" id="${article.id}">
              <div class="rule-card__article">${article.title}</div>
              <div class="rule-card__body">${paragraphs}</div>
            </article>
          `;
        }).join("")}
      </div>
    </section>
  `).join("");

  requestReglamentoSync();
}

/* ── RENDER: PROVEEDORES ──────────────────────────────────── */
function renderProveedores() {
  const q = normalizeSearchText(provBusqueda.value);
  const cat = provCategoria.value;
  const prio = provPrioridad.value;

  const lista = proveedores.filter(proveedor => {
    const text = normalizeSearchText(`${proveedor.nombre} ${proveedor.servicio} ${proveedor.contacto} ${proveedor.telefono} ${proveedor.categoria} ${proveedor.prioridad}`);
    return (!q || text.includes(q))
      && (cat === "Todas" || proveedor.categoria === cat)
      && (prio === "Todas" || proveedor.prioridad === prio);
  });

  proveedoresLista.innerHTML = lista.length
    ? lista.map(proveedor => `
        <div class="dir-card">
          <div class="dir-card__head">
            <div>
              <div class="dir-card__name">${proveedor.nombre}</div>
              <div class="dir-card__sub">${proveedor.servicio}</div>
            </div>
            <span class="badge badge-info">${proveedor.respuesta}</span>
          </div>
          <div class="meta-pills">
            <span class="badge badge-neutral">${proveedor.categoria}</span>
            <span class="badge ${badgeClass(proveedor.prioridad)}">${proveedor.prioridad}</span>
          </div>
          <div class="dir-card__detail" style="margin-top: 12px">${proveedor.contacto} · ${proveedor.telefono}</div>
          <div class="dir-card__detail">Horario: ${proveedor.horario} · Ultimo servicio: ${date(proveedor.ultimo)}</div>
          <div class="dir-card__detail">${proveedor.nota}</div>
        </div>
      `).join("")
    : `<div class="empty-state">Sin proveedores con ese criterio.</div>`;
}

/* ── RENDER: ENCUESTAS ────────────────────────────────────── */
function renderEncuestas() {
  encuestasLista.innerHTML = encuestas.map(encuesta => `
    <div class="poll-card">
      <div class="poll-card__title">${encuesta.titulo}</div>
      <div class="poll-card__meta">Cierra ${date(encuesta.cierre)} · ${encuesta.respuestas} respuestas</div>
      <div class="poll-options">
        ${encuesta.opciones.map(opcion => {
          const pct = encuesta.respuestas ? Math.round((opcion.votos / encuesta.respuestas) * 100) : 0;
          return `
            <div>
              <div class="poll-card__meta">${opcion.label} · ${opcion.votos} votos</div>
              <div class="poll-bar"><span style="width:${pct}%"></span></div>
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `).join("");
}

/* ── RENDER: ARCHIVOS ─────────────────────────────────────── */
function renderArchivos() {
  archivosLista.innerHTML = archivos.length
    ? archivos.map(archivo => `
        <div class="file-card">
          <div>
            <div class="file-card__name">${archivo.nombre}</div>
            <div class="file-card__meta">${archivo.categoria} · ${date(archivo.fecha)}</div>
          </div>
          <span class="badge ${badgeClass(archivo.acceso)}">${archivo.acceso}</span>
        </div>
      `).join("")
    : `<div class="empty-state">No hay documentos subidos aun.</div>`;
}

/* ── RENDER ALL ───────────────────────────────────────────── */
function renderAll() {
  renderResumen();
  renderFinanzasResumen();
  renderCobranza();
  renderRecibos();
  renderEgresos();
  renderCierre();
  renderEstadosCuenta();
  renderCalendario();
  renderTareas();
  renderVecinos();
  renderVisitas();
  renderReglamento();
  renderEncuestas();
  renderProveedores();
  renderArchivos();
  updateNavBadges();
}

/* ── NAVIGATION ───────────────────────────────────────────── */
function updateNavBadges() {
  const badgeFinanzas = document.getElementById("nav-badge-finanzas");
  if (badgeFinanzas) badgeFinanzas.textContent = financeAlertas() > 0 ? financeAlertas() : "";

  const openTasks = tareas.filter(tarea => tarea.estado !== "completada").length;
  const badgeMant = document.getElementById("nav-badge-mant");
  if (badgeMant) badgeMant.textContent = openTasks > 0 ? openTasks : "";
}

function showView(viewId) {
  document.querySelectorAll(".view").forEach(view => { view.hidden = true; });
  const target = document.getElementById(`view-${viewId}`);
  if (target) target.hidden = false;

  document.querySelectorAll(".nav-tab").forEach(tab => {
    tab.classList.toggle("is-active", tab.dataset.view === viewId);
  });

  if (viewId === "reglamento") {
    requestReglamentoSync();
  }
}

function showFinancePane(paneId) {
  financePaneActiva = paneId;
  document.querySelectorAll(".finance-pane").forEach(pane => {
    pane.hidden = pane.id !== `finance-pane-${paneId}`;
  });
  document.querySelectorAll(".finance-tab").forEach(tab => {
    tab.classList.toggle("is-active", tab.dataset.financePane === paneId);
  });
}

document.querySelectorAll(".nav-tab").forEach(tab => {
  tab.addEventListener("click", () => showView(tab.dataset.view));
});

document.querySelector("[data-view-link]")?.addEventListener("click", event => {
  event.preventDefault();
  showView("resumen");
});

document.querySelectorAll(".finance-tab").forEach(tab => {
  tab.addEventListener("click", () => showFinancePane(tab.dataset.financePane));
});

finanzasDecisiones?.addEventListener("click", event => {
  const button = event.target.closest("[data-jump-pane]");
  if (!button) return;
  showFinancePane(button.dataset.jumpPane);
});

resumenView?.addEventListener("click", event => {
  const button = event.target.closest("[data-jump-view]");
  if (!button) return;

  const { jumpView, jumpPane } = button.dataset;
  if (!jumpView) return;

  showView(jumpView);
  if (jumpView === "finanzas" && jumpPane) showFinancePane(jumpPane);
});

/* ── PAYMENT ACTIONS ──────────────────────────────────────── */
function aplicarRecibo() {
  const recibo = buscarReciboPorId(reciboSeleccionadoId);
  const selector = document.getElementById("selector-cuenta");
  const cuenta = selector ? buscarCuentaPorId(selector.value) : null;

  if (!recibo || !cuenta || recibo.estado === "aplicado" || recibo.estado === "extra") return;

  cuenta.aplicado = round2(cuenta.aplicado + recibo.monto);
  recibo.estado = "aplicado";
  recibo.cuentaManualId = cuenta.id;
  recibo.cuentaAplicadaId = cuenta.id;
  snapshotMensual.saldoBanco = round2(snapshotMensual.saldoBanco + recibo.monto);
  actualizarSnapshotMensual();
  renderAll();
}

function marcarRevision() {
  const recibo = buscarReciboPorId(reciboSeleccionadoId);
  if (!recibo) return;
  recibo.estado = "revision";
  actualizarSnapshotMensual();
  renderAll();
}

function marcarExtra() {
  const recibo = buscarReciboPorId(reciboSeleccionadoId);
  if (!recibo || recibo.estado === "aplicado" || recibo.estado === "extra") return;

  recibo.estado = "extra";
  ingresosExtra.unshift({
    id: `ie-${Date.now()}`,
    concepto: recibo.concepto || "Ingreso extra",
    monto: recibo.monto,
    fecha: recibo.fecha,
    referencia: recibo.referencia,
    notas: `Registrado desde ${recibo.banco}`,
  });
  snapshotMensual.saldoBanco = round2(snapshotMensual.saldoBanco + recibo.monto);
  actualizarSnapshotMensual();
  renderAll();
}

function abrirBorradorCorreo() {
  const cuenta = buscarCuentaPorId(estadoCuentaSeleccionadoId);
  if (!cuenta) return;
  const resumen = resumenEstadoCuenta(cuenta);
  const correo = resumen.propietario?.correo;
  if (!correo) return;

  const mail = composeMail(resumen);
  window.location.href = `mailto:${encodeURIComponent(correo)}?subject=${encodeURIComponent(mail.subject)}&body=${encodeURIComponent(mail.body)}`;
}

function registrarEnvio() {
  const cuenta = buscarCuentaPorId(estadoCuentaSeleccionadoId);
  if (!cuenta) return;
  const resumen = resumenEstadoCuenta(cuenta);

  historialEnvios.unshift({
    id: `env-${Date.now()}`,
    cuentaId: cuenta.id,
    unidad: cuenta.unidad,
    correo: resumen.propietario?.correo || "Sin correo",
    fecha: new Date().toISOString(),
    tipo: "Estado de cuenta",
  });

  renderEstadosCuenta();
}

/* ── EVENT LISTENERS ──────────────────────────────────────── */
recibosLista?.addEventListener("click", event => {
  const card = event.target.closest("[data-recibo-id]");
  if (!card) return;
  reciboSeleccionadoId = card.dataset.reciboId;
  renderRecibos();
});

cobranzaLista?.addEventListener("click", event => {
  const row = event.target.closest("[data-cuenta-id]");
  if (!row) return;
  estadoCuentaSeleccionadoId = row.dataset.cuentaId;
  showFinancePane("recibos");
  renderEstadosCuenta();
});

reciboDetalle?.addEventListener("change", event => {
  if (event.target.id !== "selector-cuenta") return;
  const recibo = buscarReciboPorId(reciboSeleccionadoId);
  if (recibo) recibo.cuentaManualId = event.target.value || null;
});

reciboDetalle?.addEventListener("click", event => {
  const action = event.target.dataset.accion;
  if (action === "aplicar") aplicarRecibo();
  if (action === "revision") marcarRevision();
  if (action === "extra") marcarExtra();
});

estadoCuentaSelector?.addEventListener("change", event => {
  estadoCuentaSeleccionadoId = event.target.value;
  renderEstadosCuenta();
});

abrirBorradorCorreoBtn?.addEventListener("click", abrirBorradorCorreo);
registrarEnvioBtn?.addEventListener("click", registrarEnvio);
generarCierreBtn?.addEventListener("click", () => {
  actualizarSnapshotMensual();
  renderCierre();
  renderFinanzasResumen();
  renderResumen();
});

importCobranza?.addEventListener("change", async event => {
  const file = event.target.files?.[0];
  if (!file) return;
  await importarCSV("cobranza", file);
  event.target.value = "";
});

importGastosFijos?.addEventListener("change", async event => {
  const file = event.target.files?.[0];
  if (!file) return;
  await importarCSV("gastos fijos", file);
  event.target.value = "";
});

importGastosExtra?.addEventListener("change", async event => {
  const file = event.target.files?.[0];
  if (!file) return;
  await importarCSV("gastos extraordinarios", file);
  event.target.value = "";
});

archivoForm?.addEventListener("submit", event => {
  event.preventDefault();
  const file = archivoInput.files[0];
  if (!file) return;

  archivos.unshift({
    id: `arc-${Date.now()}`,
    nombre: file.name,
    categoria: archivoCategoria.value,
    acceso: archivoAcceso.value,
    fecha: "2026-03-10",
  });

  archivoForm.reset();
  renderArchivos();
});

maintenanceForm?.addEventListener("submit", async event => {
  event.preventDefault();

  const titulo = String(maintenanceTitle?.value || "").trim();
  const area = String(maintenanceArea?.value || "").trim();
  const fecha = maintenanceDate?.value || "2026-03-11";
  const responsable = String(maintenanceOwner?.value || "").trim();
  const estado = maintenanceStatus?.value || "pendiente";

  if (!titulo || !area || !responsable) return;

  const localTask = {
    id: `tar-${Date.now()}`,
    titulo,
    area,
    fecha,
    estado,
    responsable,
  };

  try {
    await createTaskRecord(localTask);
    maintenanceMonthCursor = new Date(parseTaskDate(fecha).getFullYear(), parseTaskDate(fecha).getMonth(), 1);
    maintenanceForm.reset();
    if (maintenanceDate) maintenanceDate.value = maintenanceDefaultDate();
    if (maintenanceStatus) maintenanceStatus.value = "pendiente";
    renderCalendario();
    renderTareas();
  } catch (error) {
    setMaintenanceConnectionState("error", friendlySupabaseError(error));
    renderMaintenanceSupabaseSetup();
    console.error("No pude guardar la tarea en Supabase:", error);
  }
});

maintenanceTableBody?.addEventListener("change", async event => {
  const select = event.target.closest("[data-task-status]");
  if (!select) return;

  try {
    await updateTaskStatusRecord(select.dataset.taskStatus, select.value);
    renderCalendario();
    renderTareas();
  } catch (error) {
    setMaintenanceConnectionState("error", friendlySupabaseError(error));
    renderMaintenanceSupabaseSetup();
    console.error("No pude actualizar el estado en Supabase:", error);
  }
});

maintenanceSupabaseForm?.addEventListener("submit", async event => {
  event.preventDefault();

  const config = {
    url: String(maintenanceSupabaseUrl?.value || "").trim(),
    anonKey: String(maintenanceSupabaseAnon?.value || "").trim(),
    tasksTable: String(maintenanceSupabaseTable?.value || "tasks").trim() || "tasks",
  };

  if (!config.url || !config.anonKey) {
    setMaintenanceConnectionState("error", "Necesito Project URL y anon key para probar Supabase.");
    renderMaintenanceSupabaseSetup();
    return;
  }

  saveSupabaseConfig(config);

  try {
    await syncTasksFromSupabase();
  } catch (error) {
    console.error("No pude conectar con Supabase:", error);
  }
});

maintenanceSupabaseReload?.addEventListener("click", async () => {
  try {
    await syncTasksFromSupabase();
  } catch (error) {
    console.error("No pude recargar tareas desde Supabase:", error);
  }
});

maintenanceSupabaseDisable?.addEventListener("click", () => {
  setSupabaseDisabled(true);
  maintenanceDataSource = "local";
  setMaintenanceConnectionState("local", "Supabase se desactivó para este navegador. El tracker sigue en modo local.");
  renderAll();
});

maintenancePrevMonth?.addEventListener("click", () => shiftMaintenanceMonth(-1));
maintenanceNextMonth?.addEventListener("click", () => shiftMaintenanceMonth(1));

vecinoBusqueda?.addEventListener("input", renderVecinos);
visitaForm?.addEventListener("input", renderVisitaPreview);
visitaForm?.addEventListener("change", renderVisitaPreview);
visitaForm?.addEventListener("submit", event => {
  event.preventDefault();
  const draft = getVisitDraft();
  if (!draft) return;

  visitasQr.unshift({
    id: `vis-${Date.now()}`,
    visitante: draft.visitante,
    anfitrionId: draft.anfitrion.id,
    unidad: draft.unidad,
    fecha: draft.fecha,
    horario: draft.horario,
    motivo: draft.motivo,
    tipo: draft.tipo,
    estado: draft.estado,
    token: draft.token,
  });

  visitaForm.reset();
  renderVisitas();
});
visitaCopiarTokenBtn?.addEventListener("click", async () => {
  const draft = getVisitDraft();
  if (!draft || !navigator.clipboard?.writeText) return;

  try {
    await navigator.clipboard.writeText(draft.token);
    const currentLabel = visitaCopiarTokenBtn.textContent;
    visitaCopiarTokenBtn.textContent = "Token copiado";
    window.setTimeout(() => {
      visitaCopiarTokenBtn.textContent = currentLabel;
    }, 1400);
  } catch (error) {
    // Clipboard can be blocked by browser settings. Keep the preview visible as fallback.
  }
});
reglamentoBusqueda?.addEventListener("input", renderReglamento);
reglamentoTemasWrap?.addEventListener("click", event => {
  const button = event.target.closest("[data-tema]");
  if (!button) return;
  reglamentoTemaActivo = button.dataset.tema;
  renderReglamento();
  if (reglamentoTemaActivo === "Todos") {
    requestReglamentoSync();
    return;
  }
  const targetSection = reglamentoSecciones.find(section => section.theme === reglamentoTemaActivo);
  if (targetSection) {
    setReglamentoSeccionActiva(targetSection.id);
    requestAnimationFrame(() => scrollToTarget(targetSection.id));
  }
});
reglamentoResumen?.addEventListener("click", event => {
  const button = event.target.closest("[data-target]");
  if (!button) return;
  setReglamentoSeccionActiva(button.dataset.target);
  scrollToTarget(button.dataset.target);
});
provBusqueda?.addEventListener("input", renderProveedores);
provCategoria?.addEventListener("change", renderProveedores);
provPrioridad?.addEventListener("change", renderProveedores);
window.addEventListener("scroll", requestReglamentoSync, { passive: true });
window.addEventListener("resize", requestReglamentoSync);

/* ── INIT ─────────────────────────────────────────────────── */
async function initApp() {
  try {
    await syncTasksFromSupabase();
  } catch (error) {
    console.error("No pude cargar tareas desde Supabase, sigo en modo local:", error);
  }

  if (maintenanceDate) maintenanceDate.value = maintenanceDefaultDate();
  renderAll();
  showView("resumen");
  showFinancePane(financePaneActiva);
}

initApp();
