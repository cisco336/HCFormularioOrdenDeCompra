export const tooltips = {
  optionsInfo:
    'Cambiar estado: debe seleccionar (con el checkbox) las ordenes a las que desea cambiar el estado. Generar reporte: genera un archivo .xlsx (Excel) que contiene toda la información presentada en la tabla.',

  mainFilterInfo:
    'La fecha final no puede ser anterior a la inicial. Todos los campos son obligatorios.',

  tableFilterInfo:
    'El valor indicado se utilizará como filtro en toda la información de la tabla.',

  checkBoxInfo:
    "Seleccione para habilitar la opción 'Cambio de Estado', puede seleccionar/deseleccionar todos con este check principal o sleccionar/deseleccionar cada orden de compra por separado",

  tableFooterClick:
    'Haga clic sobre el número de orden para mostrar los detalles. ',

  tableFooterDblclick:
    'Haga DOBLE clic sobre cualquier otra parte de la fila para mostrar más información sobre la orden.',
  noGuideTooltip: 'El registro no posee guía.',
  noLabelTooltip: 'El regitro no posee rotulo.',
  purchaseOrderDetailToolTip: 'Mostrar el detalle de la orden de compra',
  purchaseOrderGuideTooltip: 'Generar la guía para la orden de compra',
};
export const matFormFieldText = {};
export const errorMessagesText = {
  noPrivileges: 'Usted no tiene privilegios.',
  error0: 'Error de conexión.',
  error401: 'Error: no autorizado.',
  error404: 'Error: el elemento seleccionado no existe.',
  error500: 'Error interno del servidor.',
  errorUnknown: 'Error desconocido.',
  startEndDateError: 'Fecha fin no puede ser anterior a la fecha de inicio.',
  queryError: 'La solicitud no pudo ejecutarse.',
  mustSelectAnOrder: 'Debe seleccionar al menos una orden de compra.',
  noObservations: 'Sin observaciones.',
  noData: 'Sin datos',
  statesError: 'Error al obtener los estados.',
  providersError: 'Error al obtener los proveedores.',
  noGuide: 'Sin guía',
  errorGeneratingGuide: 'Ocurrió un error al intentar generar la guía.',
  citiesError: 'Error al intentar obtener ciudades.',
  timeError: 'Hora incorrecta.',
  guideUnabled: 'Esta orden no puede generar guía',
  trackingError: 'Error al obtener la información de tracking',
};
export const successMessagesText = {
  querySuccess: 'La solicitud se ejecutó de forma exitosa.'
};
export const paginator = {
  of: 'de',
  itemsPerPageLabel: 'Elementos por página',
  nextPageLabel: 'Página siguiente',
  previousPageLabel: 'Página anterior',
  firstPageLabel: 'Primera página',
  lastPageLabel: 'Última página'
};
export const strings = {
  provider: 'Proveedor',
  states: 'Estados',
  state: 'Estado',
  requiredField: 'Campo requerido.',
  creationDate: 'Fecha creación',
  changeDate: 'Fecha real',
  changeTime: 'Hora real',
  deliverDate: 'Fecha entrega',
  deliverType: 'Tipo de entrega',
  red: 'Red',
  promise: 'Promesa',
  orderDate: 'Fecha Orden',
  realDeliverDate: 'Fecha real de entrega',
  realEventDate: 'Fecha real',
  eventDate: 'Fecha evento',
  startDate: 'Fecha incio',
  endDate: 'Fecha fin',
  editDate: 'Fecha modificación',
  consult: 'Consultar',
  options: 'Opciones',
  changeState: 'Cambiar estado',
  stateChange: 'Cambio de estado',
  generateReport: 'Generar reporte',
  filter: 'Filtro',
  order: 'Orden',
  orderState: 'Estado orden',
  orderStateInvoice: 'Estado orden facturación',
  dispatchDate: 'Fecha despacho',
  deliverStore: 'Almacen a entregar',
  value: 'Valor',
  orderNote: 'Nota pedido',
  orderNoteNumber: 'Consecutivo nota pedido',
  orderNoteState: 'Estado nota pedido',
  operator: 'Operador',
  conveyor: 'transportadora',
  integrationState: 'Estado de integración',
  integrationDate: 'Fecha de integración',
  purchaseOrderToEdit: 'Ordenes de compra a modificar',
  windowWillClose: 'Esta ventana se cerrará.',
  details: 'Detalles',
  clientData: 'Datos del Ciente',
  clientID: 'Cédula',
  client: 'Cliente',
  phone: 'Teléfono',
  address: 'Dirección',
  originAddress: 'Dirección origen',
  destinyAddress: 'Dirección destino',
  city: 'Ciudad',
  cities: 'Ciudades',
  billingData: 'Sitio de radicación factura',
  deliveryData: 'Datos de entrega',
  providerData: 'Datos de proveedor',
  deliveryAddress: 'Dirección de entrega',
  deliveryCity: 'Ciudad a entregar',
  guide: 'Guía',
  accomplished: 'Cumplido',
  orderData: 'Datos de la orden',
  orderNumber: 'Número de orden',
  sticker: 'Sticker',
  observations: 'Observaciones',
  comments: 'Comentarios',
  skuList: 'Lista de SKU',
  sku: 'Sku',
  next: 'Siguiente',
  packConfig: 'Configuracion de Bultos',
  back: 'Volver',
  origin: 'Origen',
  originDeliverAddress: 'Direccion de Origen/Entrega',
  confirmGuideGeneration: 'Confirmar Generacion de Guia',
  generateGuide: 'Generar Guia',
  barCode: 'Código de barras',
  description: 'Descripción',
  family: 'Familia',
  store: 'Almacen',
  locality: 'Localidad',
  cancelationDate: 'Fecha de cancelación',
  spectedDeliverDate: 'Fecha esperada de recibo',
  cost: 'Costo',
  quantity: 'Cantidad',
  creationUser: 'Usuario creación',
  editUser: 'Usuario modificación',
  stateID: 'Estado ID',
  unities: 'Unidades',
  generatePackages: 'Generar Bultos',
  weight: 'Peso (Kg)',
  package: 'Bulto',
  packages: 'Bultos',
  volumne: 'Volumen (cm3)',
  declared: 'Declarado',
  actions: 'Acciones',
  long: 'Largo (cm)',
  width: 'Ancho (cm)',
  dateGuideGeneration: 'Fecha generación guía',
  guideNumber: 'Número de guía',
  height: 'Alto (cm)',
  yes: 'Si',
  no: 'No',
  label: 'Rotulo',
  purchaceOrderState: 'Estado Orden de Compra',
  homologationState: 'Estado homologacion',
  createdBy: 'Creado por',
  flow: 'Flujo',
  trackingType: 'Tipo tracking',
  date: 'Fecha',
  user: 'Usuario',
  idOC: 'ID estado OC',
  descStateOC: 'Desc. estado OC',
  idStateHo: 'ID estado homologacion',
  descStateHM: 'Desc. estado HO',
  creation: 'Creación',
  id: 'ID',
  desc: 'Desc.',
  minDeliverDate: 'Fecha minima de entrega',
  maxDeliverDate: 'Fecha máxima de entrega',
};

export const detailsTable = {
  FECHA_REAL_EVENTO: strings.realEventDate,
  FECHA_CREACION: null, // strings.creationDate,
  NAME_FAMILIA: strings.family,
  ORG_NAME_FULL: null, // strings.locality,
  ORIGEN_DESC: null, // strings.origin,
  PMG_CANCEL_DATE: strings.cancelationDate,
  PMG_EXP_RCT_DATE: null, // strings.spectedDeliverDate,
  PMG_SELL_COST: strings.cost,
  PMG_SELL_QTY: strings.quantity,
  PMG_STAT_NAME: strings.orderStateInvoice,
  USR_CREACION: null, // strings.creationUser,
  PRD_NAME_FULL: null, // strings.description,
  FECHA_MODIFICACION: strings.editDate,
  USR_MODIFICACION: strings.editUser,
  PRD_LVL_NUMBER: strings.sku,
  PRD_UPC: strings.barCode,
  ESTADO: null, // strings.orderState,
  PMG_SHIP_DATE: null, // strings.dispatchDate,
  PMG_SHIP_DATE1: strings.deliverDate,
  FECHA_GENERAION_GUIA: strings.dateGuideGeneration,
  URL_GUIA: null, // strings.guide,
  PMG_TOT_DTL_COST: null,
  ID_ESTADO: null,
  PMG_RETAIL: null,
  PMG_PAY_DATE: null,
  PMG_PACK_COST: null,
  PMG_PACK_QTY: null,
  PMG_STATUS: null,
  PMG_DTL_TYPE: null,
  ORG_LVL_CHILD: null,
  PMG_PO_NUMBER: null,
  PMG_SEQ_NUM: null,
  PMG_DTL_TECH_KEY: null
};

export const longMessages = {
  generateOrderGuideAlert:
    'Al continuar con el proceso de generación de guía, usted estará afectando los skus internos que conforman esta orden de compra.',
  generateOrderGuideTitle: 'Generación de guía para orden de compra',
  orderDetailTitle: 'Detalles de la orden de compra',
  tableClick: 'Haga clic sobre la fila para ver los detalles.',
  packagesUpdateConfirm:
    '¿Está seguro de recalcular la configuración de los bultos?',
  generateOrderGuideAlertFinal:
    '¿Está seguro de querer generar la guía para la orden de compra seleccionada?',
  generateGuideSuccess: 'La guía se generó de forma exitosa.'
};

export class Constants {
  // DEV & QA
  static readonly PATHROTULO =
    'http://200.69.100.66/2IMPRESIONGUIASpruebas/ISticker_ZEA.aspx?';
  // PROD
  // static readonly PATHROTULO = 'http://200.69.100.66/2IMPRESIONGUIAS/ISticker_ZEA2.aspx';

  // DEV
  static readonly APIORDENDECOMPRA =
    'http://10.23.14.164:9002/Servicios/ORDEN_COMPRA_1.0.0/api';
  // QA
  // static readonly APIORDENDECOMPRA = 'http://10.23.14.163:9002/Servicios/ORDEN_COMPRA_1.0.0/api';
  // // PROD
  // static readonly APIORDENDECOMPRA = 'http://10.23.18.163:9002/Servicios/ORDEN_COMPRA_1.0.0/api';

  // DEV & QA
  static readonly USRPASSWD = 'EMPCAR01:EMPCAR1';
  static readonly USR = 'EMPCAR01';
  static readonly PASSWD = 'EMPCAR1';
  // PROD
  // static readonly USRPASSWD = 'EAE6VELE:51AAD9C1';
  // static readonly USR = 'EAE6VELE';
  // static readonly PASSWD = '51AAD9C1';

  // DEV & QA
  static readonly GUIA =
    'http://200.69.100.66/ServicioLiquidacionRESTpruebas/Service1.svc/Generacion';
  // PROD
  // static readonly GUIA = 'http://200.69.100.66/ServicioLiquidacionREST/Service1.svc/Generacion';

  // DEV
  static readonly APIGUIA =
    'http://10.23.14.164:9001/Servicios/Transportadora_1.0.0/api';
  // QA
  // static readonly APIGUIA = 'http://10.23.14.163:9001/Servicios/Transportadora_1.0.0/api';
  // PROD
  // static readonly APIGUIA = 'http://10.23.18.163:9001/Servicios/Transportadora_1.0.0/api';
  // Local
  // static readonly APIGUIA = 'http://localhost/Abastecimiento/Servicios/Transportadoras/api';
}
